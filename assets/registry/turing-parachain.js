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
        AutomationAction: {
          _enum: [
            'Notify',
            'NativeTransfer',
            'XCMP',
            'AutoCompoundDelgatedStake'
          ],
        },
        AutostakingResult: {
          period: 'i32',
          apy: 'f64',
        }
      }
    }
  ]
};

export default definitions;
