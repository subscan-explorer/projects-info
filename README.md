# parachain-projects-info

This repo contains info of parachain projects used in [Subscan parachain module](https://rococo.subscan.io/auction_board) based on [@polkadot/apps-config](https://github.com/polkadot-js/apps/tree/master/packages/apps-config).

## Notice

- The data will be displayed in Subscan, please be sure to fill in the real information. It is recommended to use the github account of the project member to submit.

- All the items are optional, fill in " " for those that cannot be answered at present.

- Please use the account that submitted `registrar_reserve` to sign the `project information`, and fill in the signature. We will compare the submitted information with the signature. If it does not match, the pr will not be merged.

- After each update of the `project information`, please sign the latest data and submit the signature.

- Signature tool: https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama-rpc.polkadot.io#/signing


Welcome to pr to update your `project information`.

## Example

//The format of `project information`

      {
        ParaID: '0',
        Description: 'text',
        Parachain Crowdloans Allocation: 'text',
        Auction Reward & Reward Vesting Schedule: 'text',
        Financing Information: 'text',
        Website Link: 'text',
        Twitter Link: 'text',
        Telegram Link: 'text',
        Discord Link: 'text',
        Medium Link: 'text',
        Github Link: 'text'
       }
---------------
 
 Signature: '0x....'
 
---------------

Logo: ''
