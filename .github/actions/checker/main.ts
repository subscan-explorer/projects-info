const {cryptoWaitReady, decodeAddress, signatureVerify} = require('@polkadot/util-crypto');
const {u8aToHex} = require('@polkadot/util');
const actions = require('@actions/core');
const nFetch = require('node-fetch')

const {getOctokit, context} = require('@actions/github')

const fs = require('fs')

const isValidSignature = (signedMessage, signature, address) => {
    const publicKey = decodeAddress(address);
    const hexPublicKey = u8aToHex(publicKey);

    return signatureVerify(signedMessage, signature, hexPublicKey).isValid;
};

const tryIsValidSignatures = (signedMessages, signature, address) => {
    for (const signedMessage of signedMessages) {
        if (isValidSignature(signedMessage, signature, address)) {
            return true
        }
    }

    return false
}

const rpcList: { [network: string]: string } = require('../../../api.json')
const headers = {
    'Content-Type': 'application/json',
    'X-Api-Key': process.env.APIKEY
}

const isOwnerOfParachain = async (relay, owner, paraId) => {
    const apiUrl = `${rpcList[relay]}/api/scan/parachain/info`
    const body = JSON.stringify({
        row: 1,
        page: 0,
        para_id: paraId
    })

    return (await nFetch(apiUrl, {
        method: "post",
        headers,
        body
    }).then(resp => resp.json()).then(data => {
        if (data?.code === 0) {
            return data
        }
        throw new Error(`response code ${data?.code} failed: ${data?.message}`)
    }).then(data => data.data.chains).then(chains => {
        for (const chain of chains) {
            if (chain.para_id == paraId && chain.manager == owner) {
                return chain
            }
        }
        throw new Error('no para id detail')
    }).catch(err => console.log(err)))?.para_id == paraId
}

const getPRContentBySha = async (token: string, sha: string) => {
    const octKit = getOctokit(token)
    const result = await octKit.rest.repos.listPullRequestsAssociatedWithCommit({
        owner: context.repo.owner,
        repo: context.repo.repo,
        commit_sha: sha,
    });
    const pullRequests = result.data.filter((pullRequest) => pullRequest.state === 'open');
    if (pullRequests.length === 0) {
        return null
    }

    let pr = pullRequests.length > 0 && pullRequests[0];
    pullRequests.forEach(pullRequest => pullRequest.head.sha.startsWith(sha) && (pr = pullRequest));
    return pr
}

const getPRContentByNumber = async(token: string, num: number) => {
    const octKit = getOctokit(token)
    const { data: pullRequest } = await octKit.rest.pulls.get({
        owner: context.repo.owner,
        repo: context.repo.repo,
        pull_number: num,
    });
    return pullRequest
}

const re = /Para ID Owner & Signature Account:[\n\s]+`([a-zA-Z\d ]+)`[\n\s]+Data that needs to be signed:[\n\s]+`file`[\n\s]+Signature Hash: `([0xa-zA-Z\d ]+)`/

const main = async () => {
    const changes: string[] = actions.getInput('filenames').split(' ')
    // const changes: string[] = ['networks/rococo/parachain/test.json']
    if (changes.length === 0) {
        return
    }

    const githubToken = actions.getInput('token')
    const sha = actions.getInput('sha')
    const num = actions.getInput('num')
    const pr = num ? await getPRContentByNumber(githubToken, num) : await getPRContentBySha(githubToken, sha)
    console.log('pr', sha, num, pr)
    if (!pr) {
        actions.setFailed('get PR content failed')
        return
    }

    const result = re.exec(pr.body)
    if (!result || result.length !== 3) {
        actions.setFailed('the PR content is not expected')
        return
    }

    const signature = result[2].trim()
    const owner = result[1].trim()

    console.log('result', signature, owner)

    let verified = true

    await cryptoWaitReady();
    for (const file of changes) {
        if (!file.startsWith('networks/') || !file.endsWith('.json')) {
            continue
        }

        // check signature
        const body: string = fs.readFileSync(__dirname + '/../../../' + file, 'utf8').toString()
        if (body.length === 0) {
            continue
        }
        const detail = JSON.parse(body)

        // polkadot apps paste replace method
        const secBody = body.replace(/\n/g, ' ')
        const thirdBody = secBody.trim()
        if (!tryIsValidSignatures([body, secBody, thirdBody], signature, owner)) {
            actions.setFailed("the signature is not valid")
            verified = false
        }

        if (file.indexOf('/parachain/') !== -1) {
            let [, relayChainName] = /networks\/([a-zA-Z]+)\/parachain\//.exec(file)
            if (relayChainName.length === 0) {
                actions.setFailed('can not get relayChain name')
                verified = false
            }

            let {'data': {'ParaID': paraId}} = detail
            if (!await isOwnerOfParachain(relayChainName, owner, paraId)) {
                actions.setFailed('the Owner Account does not belong The paraId')
                verified = false
            }
        }

        break
    }

    actions.setOutput('verified', verified ? 'true' : 'false')
}

main().then();
