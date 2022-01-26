const { cryptoWaitReady, decodeAddress, signatureVerify} = require('@polkadot/util-crypto');
const { u8aToHex } = require('@polkadot/util');
const actions = require('@actions/core')
const fs = require('fs')

const isValidSignature = (signedMessage, signature, address) => {
    const publicKey = decodeAddress(address);
    const hexPublicKey = u8aToHex(publicKey);

    return signatureVerify(signedMessage, signature, hexPublicKey).isValid;
};

const main = async () => {
    await cryptoWaitReady();

    // const changes: string[] = JSON.parse(actions.getInput("filenames"))
    const changes: string[] = ['networks/polkadot/astar.json']
    for (const change of changes) {
        // check signature
        if (change.startsWith('networks/')) {
            const body = fs.readFileSync(change, 'utf8')
            const object: {
                data: [string, any],
                signature: string
            } = JSON.parse(body)

            const owner: string = object.data["Owner account"]
            const signature = object.signature

            const dataKey = `"data":`
            const startPos = body.indexOf(dataKey) + dataKey.length + 1
            let endPos = -1

            let strCount = 0
            let markCount = 0
            for (let i = startPos; i < body.length; i++) {
                if (body[i] === '"') {
                    if (strCount > 0) {
                        strCount--
                    } else {
                        strCount++
                    }
                } else if (strCount === 0 && body[i] === '{') {
                    markCount++
                } else if (strCount === 0 && body[i] === '}') {
                    markCount--
                    if (markCount === 0) {
                        endPos = i + 1
                        break
                    }
                }
            }

            const text = body.substring(startPos, endPos)

            console.log(text, signature, owner)

            if (!isValidSignature(text, signature, owner)) {
                actions.setFailed("the signature is not valid")
                break
            }
        }
    }
    // true
}

main();
