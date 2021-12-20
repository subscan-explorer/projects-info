// Copyright 2017-2021 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

// structs need to be in order
/* eslint-disable sort-keys */

const definitions = {
  types: [
    {
      // on all versions
      minmax: [0, undefined],
      types: {
        AccountInfo: {
          nonce: 'Index',
          consumers: 'RefCount',
          providers: 'RefCount',
        },
        Address: 'AccountId',
        Asset: 'Currency',
        AssetMetrics: {
          period_start: 'Duration',
          period_end: 'Duration',
          returns: 'Vec<FixedNumber>',
          volatility: 'FixedNumber',
          correlations: 'Vec<(Asset, FixedNumber)>',
        },
        Balance: 'u64',
        BalanceOf: 'Balance',
        BalancesAggregate: {
          total_issuance: 'Balance',
          total_debt: 'Balance',
        },
        BlockNumber: 'u64',
        CapVec: {
          head_index: 'u32',
          len_cap: 'u32',
          items: 'Vec<FixedNumber>',
        },
        ChainId: 'u8',
        Currency: {
          _enum: ['UNKNOWN', 'Usd', 'Eq', 'Eth', 'Btc', 'Eos', 'Dot', 'Crv'],
        },
        DataPoint: {
          price: 'u64',
          account_id: 'AccountId',
          block_number: 'BlockNumber',
          timestamp: 'u64',
        },
        DepositNonce: 'u64',
        Duration: {
          secs: 'u64',
          nanos: 'u32',
        },
        FinancialMetrics: {
          period_start: 'Duration',
          period_end: 'Duration',
          assets: 'Vec<Asset>',
          mean_returns: 'Vec<FixedNumber>',
          volatilities: 'Vec<FixedNumber>',
          correlations: 'Vec<FixedNumber>',
          covariances: 'Vec<FixedNumber>',
        },
        FixedI64: 'i64',
        FixedNumber: 'u128',
        Keys: 'SessionKeys3',
        LookupSource: 'AccountId',
        OperationRequest: {
          account: 'AccountId',
          authority_index: 'AuthIndex',
          validators_len: 'u32',
          block_num: 'BlockNumber',
        },
        PortfolioMetrics: {
          period_start: 'Duration',
          period_end: 'Duration',
          z_score: 'u32',
          volatility: 'FixedNumber',
          value_at_risk: 'FixedNumber',
        },
        Price: 'u128',
        PriceLog: {
          latest_timestamp: 'Duration',
          prices: 'CapVec<Price>',
        },
        PricePayload: "Data",
        PricePeriod: {
          _enum: ['Min', 'TenMin', 'Hour', 'FourHour', 'Day'],
        },
        PricePoint: {
          block_number: 'BlockNumber',
          timestamp: 'u64',
          price: 'u64',
          data_points: 'Vec<DataPoint>',
        },
        PriceUpdate: {
          period_start: 'Duration',
          time: 'Duration',
          price: 'FixedNumber',
        },
        ProposalStatus: {
          _enum: ['Initiated', 'Approved', 'Rejected'],
        },
        ProposalVotes: {
          votes_for: 'Vec<AccountId>',
          votes_against: 'Vec<AccountId>',
          status: 'ProposalStatus',
          expiry: 'BlockNumber',
        },
        ResourceId: '[u8; 32]',
        SignedBalance: {
          _enum: {
            Positive: 'Balance',
            Negative: 'Balance',
          },
        },
        SubAccType: {
          _enum: ['Bailsman', 'Borrower', 'Lender'],
        },
        TotalAggregates: {
          collateral: 'Balance',
          debt: 'Balance',
        },
        TransferReason: {
          _enum: [
            'Common',
            'InterestFee',
            'MarginCall',
            'LiquidityFarming',
            'BailsmenRedistribution',
            'TreasuryEqBuyout',
            'TreasuryBuyEq',
            'Subaccount',
            'Lock',
          ],
        },
        UserGroup: {
          _enum: ['Unknown', 'Balances', 'Bailsmen', 'Borrowers', 'Lenders'],
        },
        VestingInfo: {
          locked: 'Balance',
          perBlock: 'Balance',
          startingBlock: 'BlockNumber',
        },
      },
    },
  ],
};
