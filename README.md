# projects-info

This repo contains info of projects used in [Subscan parachain module](https://rococo.subscan.io/auction_board) based on [@polkadot/apps-config](https://github.com/polkadot-js/apps/tree/master/packages/apps-config).

## Notice

- The data will be displayed in Subscan（[EG-1](https://kusama.subscan.io/parachain/2000?tab=project), [EG-2](https://kusama.subscan.io/crowdloan/2012-3?tab=project)）, please be sure to fill in the real information. It is recommended to use the github account of the project member to submit.

- All the items are optional, fill in " " for those that cannot be answered at present.

- Please use the *owner account* that submitted `registrar_reserve` to sign the `project information`, and fill in the signature. We will compare the submitted information with the signature. If it does not match, the pr will not be merged.

- After each update of the `project information`, please sign the latest data and submit the signature.

- Signature tool: [For Polkadot](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.polkadot.io#/signing), [For Kusama](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama-rpc.polkadot.io#/signing) , [For Rococo](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococo-rpc.polkadot.io#/signing) , [For Westend](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fwestend-rpc.polkadot.io#/signing).

Welcome to pr to update your `project information`.

# How to request a change of network

- [How to request a change of network](#how-to-request-a-change-of-network)
- [How to make a description file](#how-to-make-a-description-file)

## How to start

Here is a [pr example](https://github.com/subscan-explorer/projects-info/pull/58) for your reference.

> If you want to request new project info, You need to prepare these files:

1. description file (\<network\>.json)
2. network icon image as SVG or PNG (recommend 512x512 and SVG)
3. cover image as SVG or PNG (unnecessary)

> If you want to request new/updated project info, You need to follow these steps:

(If you have submitted project info and only want to update resouces without a description file, you can skip the signature step)

1. put your description file in the right folder like `networks/kusama/parachain/<network>.json`
2. put your images to `assets/images/<network>.<svg/png>`
3. go [polkadot apps signing](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.polkadot.io#/signing) to sign your description file content (**paste all content of the description file**) with **The parachain owner account**
4. make a pull request to our repo, and replace placeholders of `Para ID Owner & Signature Account` and `Signature Hash` of `Signature Auto check` by the Owner account and Signature
5. check all of the checklist
6. done, now you can create and wait for the Signature Checker to pass your request, and our team will double-check and confirm your request

## How to make a description file

Here is a [template.json](https://github.com/subscan-explorer/projects-info/blob/main/networks/polkadot/parachain/template.json) you can refer to, don't worry about indentation and spaces, you just need to make sure it's in valid JSON format

```json
{
  "data": {
    "ParaID": 2000,
    "Project Name": "",
    "Logo": "../../assets/images/[logo file name]",
    "Cover": "../../assets/images/[cover file name]",
    "Description (en)": "",
    "Description (zh)": "",
    "Auction Reward & Reward Vesting Schedule (en)": "<LEAVE HERE A LINK OR EMPTY>",
    "Auction Reward & Reward Vesting Schedule (zh)": "<LEAVE HERE A LINK OR EMPTY>",
    "Website Link": "<LEAVE HERE A LINK OR EMPTY>",
    "Twitter Link": "<LEAVE HERE A LINK OR EMPTY>",
    "Telegram Link": "<LEAVE HERE A LINK OR EMPTY>",
    "Discord Link": "<LEAVE HERE A LINK OR EMPTY>",
    "Medium Link": "<LEAVE HERE A LINK OR EMPTY>",
    "Github Link": "<LEAVE HERE A LINK OR EMPTY>",
    "Owner account": ""
  }
}
```

## Why the Signature Checker report **Not-Verified**

1. Make sure you haven't changed other formats except for angle brackets(\<\>) and included words
2. Make sure the signature you put is made by the same Parachain Owner
3. Make sure your description file is in valid JSON format
4. Probably our Signature checker give up its job :(

If up there is nothing to help, contact us, and we will help you manually verify your request.
