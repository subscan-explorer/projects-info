// Copyright 2017-2021 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

// structs need to be in order
/* eslint-disable sort-keys */

const definitions = {
  types: [{
    // on all versions
    minmax: [0, undefined],
    types: {
      "H256Le": "H256",
      "DOT": "u128",
      "PolkaBTC": "Balance",
      "BTCBalance": "u128",
      "StatusCode": {
        "_enum": [
          "Running",
          "Error",
          "Shutdown"
        ]
      },
      "Address": "AccountId",
      "LookupSource": "AccountId",
      "Status": "StatusCode",
      "ErrorCode": {
        "_enum": [
          "None",
          "NoDataBTCRelay",
          "InvalidBTCRelay",
          "OracleOffline",
          "Liquidation"
        ]
      },
      "VaultStatus": {
        "_enum": [
          "Active",
          "Liquidated",
          "CommittedTheft"
        ]
      },
      "RawBlockHeader": {
        "0": "[u8; 80]"
      },
      "RichBlockHeader": {
        "block_hash": "H256Le",
        "block_header": "BlockHeader",
        "block_height": "u32",
        "chain_ref": "u32",
        "account_id": "AccountId"
      },
      "BlockHeader": {
        "merkle_root": "H256Le",
        "target": "U256",
        "timestamp": "u32",
        "version": "i32",
        "hash_prev_block": "H256Le",
        "nonce": "u32"
      },
      "BlockChain": {
        "chain_id": "u32",
        "start_height": "u32",
        "max_height": "u32",
        "no_data": "BTreeSet<u32>",
        "invalid": "BTreeSet<u32>"
      },
      "BtcAddress": {
        "_enum": {
          "P2PKH": "H160",
          "P2SH": "H160",
          "P2WPKHv0": "H160"
        }
      },
      "BtcPublicKey": "[u8; 33]",
      "Wallet": {
        "addresses": "BTreeSet<BtcAddress>",
        "public_key": "BtcPublicKey"
      },
      "Vault": {
        "id": "AccountId",
        "to_be_replaced_tokens": "PolkaBTC",
        "to_be_issued_tokens": "PolkaBTC",
        "issued_tokens": "PolkaBTC",
        "to_be_redeemed_tokens": "PolkaBTC",
        "wallet": "Wallet",
        "backing_collateral": "DOT",
        "banned_until": "Option<BlockNumber>",
        "status": "VaultStatus"
      },
      "StatusUpdate": {
        "new_status_code": "StatusCode",
        "old_status_code": "StatusCode",
        "add_error": "Option<ErrorCode>",
        "remove_error": "Option<ErrorCode>",
        "start": "BlockNumber",
        "end": "BlockNumber",
        "proposal_status": "ProposalStatus",
        "btc_block_hash": "Option<H256Le>",
        "proposer": "AccountId",
        "deposit": "DOT",
        "tally": "Tally",
        "message": "Text"
      },
      "Tally": {
        "aye": "Votes",
        "nay": "Votes"
      },
      "Votes": {
        "accounts": "BTreeSet<AccountId>",
        "total_stake": "Balance"
      },
      "ProposalStatus": {
        "_enum": [
          "Pending",
          "Accepted",
          "Rejected"
        ]
      },
      "StakedRelayer": {
        "stake": "DOT",
        "height": "BlockNumber"
      },
      "IssueRequest": {
        "vault": "AccountId",
        "opentime": "BlockNumber",
        "griefing_collateral": "DOT",
        "amount": "PolkaBTC",
        "fee": "PolkaBTC",
        "requester": "AccountId",
        "btc_address": "BtcAddress",
        "btc_public_key": "BtcPublicKey",
        "completed": "bool",
        "cancelled": "bool"
      },
      "RedeemRequest": {
        "vault": "AccountId",
        "opentime": "BlockNumber",
        "amount_polka_btc": "PolkaBTC",
        "fee": "PolkaBTC",
        "amount_btc": "PolkaBTC",
        "amount_dot": "DOT",
        "premium_dot": "DOT",
        "redeemer": "AccountId",
        "btc_address": "BtcAddress",
        "completed": "bool",
        "cancelled": "bool",
        "reimburse": "bool"
      },
      "ReplaceRequest": {
        "old_vault": "AccountId",
        "open_time": "BlockNumber",
        "amount": "PolkaBTC",
        "griefing_collateral": "DOT",
        "new_vault": "Option<AccountId>",
        "collateral": "DOT",
        "accept_time": "Option<BlockNumber>",
        "btc_address": "Option<BtcAddress>",
        "completed": "bool",
        "cancelled": "bool"
      },
      "RefundRequest": {
        "vault": "AccountId",
        "amount_polka_btc": "PolkaBTC",
        "fee": "PolkaBTC",
        "amount_btc": "PolkaBTC",
        "issuer": "AccountId",
        "btc_address": "BtcAddress",
        "issue_id": "H256",
        "completed": "bool"
      },
      "BalanceWrapper": {
        "amount": "String"
      },
      "BtcTxFeesPerByte": {
        "fast": "u32",
        "half": "u32",
        "hour": "u32"
      },
      "Version": "u32",
      "AccountIdJsonRpcResponse": {
        "account_id": "String"
      },
      "RegisterStakedRelayerJsonRpcRequest": {
        "stake": "u128"
      },
      "SuggestStatusUpdateJsonRpcRequest": {
        "deposit": "u128",
        "status_code": "StatusCode",
        "add_error": "Option<ErrorCode>",
        "remove_error": "Option<ErrorCode>",
        "block_hash": "Option<H256Le>",
        "message": "String"
      },
      "SystemVault": {
        "id": "AccountId",
        "to_be_issued_tokens": "PolkaBTC",
        "issued_tokens": "PolkaBTC",
        "to_be_redeemed_tokens": "PolkaBTC"
      },
      "VoteOnStatusUpdateJsonRpcRequest": {
        "status_update_id": "U256",
        "approve": "bool"
      },
      "ReplaceRequestJsonRpcRequest": {
        "amount": "u128"
      },
      "RegisterVaultJsonRpcRequest": {
        "collateral": "u128"
      },
      "FundAccountJsonRpcRequest": {
        "account_id": "AccountId"
      },
      "RegisterVaultJsonRpcResponse": {
        "public_key": "BtcPublicKey"
      },
      "ChangeCollateralJsonRpcRequest": {
        "amount": "u128"
      },
      "WithdrawReplaceJsonRpcRequest": {
        "replace_id": "H256"
      },
      "FixedPoint": "FixedI128",
      "SignedFixedPoint": "FixedI128",
      "UnsignedFixedPoint": "FixedU128",
      "StatusUpdateId": "u64"
    }
  }]
};

export default definitions;
