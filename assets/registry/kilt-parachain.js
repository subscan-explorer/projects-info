// Copyright 2017-2021 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

// structs need to be in order
/* eslint-disable sort-keys */

const types8 = {
  AccountInfo: "AccountInfoWithDualRefCount",
  Address: "AccountId",
  Attestation: {
    ctypeHash: "Hash",
    attester: "AccountId",
    delegationId: "Option<DelegationNodeId>",
    revoked: "bool",
  },
  Balance: "u128",
  DelegationNode: {
    rootId: "DelegationNodeId",
    parent: "Option<DelegationNodeId>",
    owner: "AccountId",
    permissions: "Permissions",
    revoked: "bool",
  },
  DelegationNodeId: "Hash",
  DelegationRoot: {
    ctypeHash: "Hash",
    owner: "AccountId",
    revoked: "bool",
  },
  DidRecord: {
    signKey: "Hash",
    boxKey: "Hash",
    docRef: "Option<Vec<u8>>",
  },
  Index: "u64",
  LookupSource: "AccountId",
  Permissions: "u32",
  PublicBoxKey: "Hash",
  PublicSigningKey: "Hash",
  Signature: "MultiSignature",
  XCurrencyId: {
    chainId: "ChainId",
    currencyId: "Vec<u8>",
  },
  ChainId: {
    _enum: {
      RelayChain: "Null",
      ParaChain: "ParaId",
    },
  },
  CurrencyIdOf: "CurrencyId",
  CurrencyId: {
    _enum: {
      DOT: 0,
      KSM: 1,
      KILT: 2,
    },
  },
  XcmError: {
    _enum: {
      Undefined: 0,
      Unimplemented: 1,
      UnhandledXcmVersion: 2,
      UnhandledXcmMessage: 3,
      UnhandledEffect: 4,
      EscalationOfPrivilege: 5,
      UntrustedReserveLocation: 6,
      UntrustedTeleportLocation: 7,
      DestinationBufferOverflow: 8,
      CannotReachDestination: 9,
      MultiLocationFull: 10,
      FailedToDecode: 11,
      BadOrigin: 12,
      ExceedsMaxMessageSize: 13,
      FailedToTransactAsset: 14,
    },
  },
  ReferendumInfo: {
    _enum: {
      Ongoing: "ReferendumStatus",
      Finished: "ReferendumInfoFinished",
    },
  },
};

const types9 = {
  // Runtime types
  AccountInfo: "AccountInfoWithTripleRefCount",
  Address: "MultiAddress",
  AmountOf: "i128",
  Balance: "u128",
  BlockNumber: "u64",
  Index: "u64",
  LookupSource: "MultiAddress",

  // Ctype types
  CtypeCreatorOf: "DidIdentifierOf",
  CtypeHashOf: "Hash",

  // Attestation types
  ClaimHashOf: "Hash",
  AttesterOf: "DidIdentifierOf",
  AttestationDetails: {
    ctypeHash: "CtypeHashOf",
    attester: "AttesterOf",
    delegationId: "Option<DelegationNodeIdOf>",
    revoked: "bool",
  },

  // Delegation types
  Permissions: "u32",
  DelegationNodeIdOf: "Hash",
  DelegatorIdOf: "DidIdentifierOf",
  DelegationSignature: "DidSignature",
  DelegationRoot: {
    ctypeHash: "CtypeHashOf",
    owner: "DelegatorIdOf",
    revoked: "bool",
  },
  DelegationNode: {
    rootId: "DelegationNodeIdOf",
    parent: "Option<DelegationNodeIdOf>",
    owner: "DelegatorIdOf",
    permissions: "Permissions",
    revoked: "bool",
  },

  // Did types
  KeyIdOf: "Hash",
  DidIdentifierOf: "AccountId",
  AccountIdentifierOf: "AccountId",
  BlockNumberOf: "BlockNumber",
  DidCallableOf: "Call",
  DidVerificationKey: {
    _enum: {
      Ed25519: "[u8; 32]",
      Sr25519: "[u8; 32]",
    },
  },
  DidEncryptionKey: {
    _enum: {
      X25519: "[u8; 32]",
    },
  },
  DidPublicKey: {
    _enum: {
      PublicVerificationKey: "DidVerificationKey",
      PublicEncryptionKey: "DidEncryptionKey",
    },
  },
  DidVerificationKeyRelationship: {
    _enum: ["Authentication", "CapabilityDelegation", "CapabilityInvocation", "AssertionMethod"],
  },
  DidSignature: {
    _enum: {
      Ed25519: "Ed25519Signature",
      Sr25519: "Sr25519Signature",
    },
  },
  DidError: {
    _enum: {
      StorageError: "StorageError",
      SignatureError: "SignatureError",
      UrlError: "UrlError",
      InternalError: "Null",
    },
  },
  StorageError: {
    _enum: {
      DidAlreadyPresent: "Null",
      DidNotPresent: "Null",
      DidKeyNotPresent: "DidVerificationKeyRelationship",
      VerificationKeyNotPresent: "Null",
      CurrentlyActiveKey: "Null",
      MaxTxCounterValue: "Null",
    },
  },
  SignatureError: {
    _enum: ["InvalidSignatureFormat", "InvalidSignature", "InvalidNonce"],
  },
  KeyError: {
    _enum: ["InvalidVerificationKeyFormat", "InvalidEncryptionKeyFormat"],
  },
  UrlError: {
    _enum: ["InvalidUrlEncoding", "InvalidUrlScheme"],
  },
  DidPublicKeyDetails: {
    key: "DidPublicKey",
    blockNumber: "BlockNumberOf",
  },
  DidDetails: {
    authenticationKey: "KeyIdOf",
    keyAgreementKeys: "BTreeSet<KeyIdOf>",
    delegationKey: "Option<KeyIdOf>",
    attestationKey: "Option<KeyIdOf>",
    publicKeys: "BTreeMap<KeyIdOf, DidPublicKeyDetails>",
    endpointUrl: "Option<Url>",
    lastTxCounter: "u64",
  },
  DidCreationOperation: {
    did: "DidIdentifierOf",
    newAuthenticationKey: "DidVerificationKey",
    newKeyAgreementKeys: "BTreeSet<DidEncryptionKey>",
    newAttestationKey: "Option<DidVerificationKey>",
    newDelegationKey: "Option<DidVerificationKey>",
    newEndpointUrl: "Option<Url>",
  },
  DidUpdateOperation: {
    did: "DidIdentifierOf",
    newAuthenticationKey: "Option<DidVerificationKey>",
    newKeyAgreementKeys: "BTreeSet<DidEncryptionKey>",
    attestationKeyUpdate: "DidVerificationKeyUpdateAction",
    delegationKeyUpdate: "DidVerificationKeyUpdateAction",
    publicKeysToRemove: "BTreeSet<KeyIdOf>",
    newEndpointUrl: "Option<Url>",
    txCounter: "u64",
  },
  DidVerificationKeyUpdateAction: {
    _enum: {
      Ignore: "Null",
      Change: "DidVerificationKey",
      Delete: "Null",
    },
  },
  DidDeletionOperation: {
    did: "DidIdentifierOf",
    txCounter: "u64",
  },
  DidAuthorizedCallOperation: {
    did: "DidIdentifierOf",
    txCounter: "u64",
    call: "DidCallableOf",
  },
  HttpUrl: {
    payload: "Text",
  },
  FtpUrl: {
    payload: "Text",
  },
  IpfsUrl: {
    payload: "Text",
  },
  Url: {
    _enum: {
      Http: "HttpUrl",
      Ftp: "FtpUrl",
      Ipfs: "IpfsUrl",
    },
  },

  // Launch types
  LockedBalance: {
    block: "BlockNumber",
    amount: "Balance",
  },
};

const types10 = {
  // Runtime
  AccountInfo: "AccountInfoWithTripleRefCount",
  Address: "MultiAddress",
  AmountOf: "i128",
  Balance: "u128",
  BlockNumber: "u64",
  Index: "u64",
  LookupSource: "MultiAddress",

  // Ctypes
  CtypeCreatorOf: "AccountId",
  CtypeHashOf: "Hash",
  ClaimHashOf: "Hash",

  // Attestations
  AttesterOf: "AccountId",
  AttestationDetails: {
    ctypeHash: "CtypeHashOf",
    attester: "AttesterOf",
    delegationId: "Option<DelegationNodeIdOf>",
    revoked: "bool",
  },

  // Delegations
  Permissions: "u32",
  DelegationNodeIdOf: "Hash",
  DelegatorIdOf: "AccountId",
  DelegateSignatureTypeOf: "Vec<u8>",
  DelegationRoot: {
    ctypeHash: "CtypeHashOf",
    owner: "DelegatorIdOf",
    revoked: "bool",
  },
  DelegationNode: {
    rootId: "DelegationNodeIdOf",
    parent: "Option<DelegationNodeIdOf>",
    owner: "DelegatorIdOf",
    permissions: "Permissions",
    revoked: "bool",
  },

  // DIDs
  KeyIdOf: "Hash",
  DidIdentifierOf: "AccountId",
  AccountIdentifierOf: "AccountId",
  BlockNumberOf: "BlockNumber",
  DidCallableOf: "Call",
  DidVerificationKey: {
    _enum: {
      Ed25519: "[u8; 32]",
      Sr25519: "[u8; 32]",
    },
  },
  DidEncryptionKey: {
    _enum: {
      X25519: "[u8; 32]",
    },
  },
  DidPublicKey: {
    _enum: {
      PublicVerificationKey: "DidVerificationKey",
      PublicEncryptionKey: "DidEncryptionKey",
    },
  },
  DidVerificationKeyRelationship: {
    _enum: ["Authentication", "CapabilityDelegation", "CapabilityInvocation", "AssertionMethod"],
  },
  DidSignature: {
    _enum: {
      Ed25519: "Ed25519Signature",
      Sr25519: "Sr25519Signature",
    },
  },
  DidError: {
    _enum: {
      StorageError: "StorageError",
      SignatureError: "SignatureError",
      UrlError: "UrlError",
      InternalError: "Null",
    },
  },
  StorageError: {
    _enum: {
      DidAlreadyPresent: "Null",
      DidNotPresent: "Null",
      DidKeyNotPresent: "DidVerificationKeyRelationship",
      VerificationKeyNotPresent: "Null",
      CurrentlyActiveKey: "Null",
      MaxTxCounterValue: "Null",
    },
  },
  SignatureError: {
    _enum: ["InvalidSignatureFormat", "InvalidSignature", "InvalidNonce"],
  },
  KeyError: {
    _enum: ["InvalidVerificationKeyFormat", "InvalidEncryptionKeyFormat"],
  },
  UrlError: {
    _enum: ["InvalidUrlEncoding", "InvalidUrlScheme"],
  },
  DidPublicKeyDetails: {
    key: "DidPublicKey",
    blockNumber: "BlockNumberOf",
  },
  DidDetails: {
    authenticationKey: "KeyIdOf",
    keyAgreementKeys: "BTreeSet<KeyIdOf>",
    delegationKey: "Option<KeyIdOf>",
    attestationKey: "Option<KeyIdOf>",
    publicKeys: "BTreeMap<KeyIdOf, DidPublicKeyDetails>",
    endpointUrl: "Option<Url>",
    lastTxCounter: "u64",
  },
  DidCreationOperation: {
    did: "DidIdentifierOf",
    newAuthenticationKey: "DidVerificationKey",
    newKeyAgreementKeys: "BTreeSet<DidEncryptionKey>",
    newAttestationKey: "Option<DidVerificationKey>",
    newDelegationKey: "Option<DidVerificationKey>",
    newEndpointUrl: "Option<Url>",
  },
  DidUpdateOperation: {
    did: "DidIdentifierOf",
    newAuthenticationKey: "Option<DidVerificationKey>",
    newKeyAgreementKeys: "BTreeSet<DidEncryptionKey>",
    attestationKeyUpdate: "DidVerificationKeyUpdateAction",
    delegationKeyUpdate: "DidVerificationKeyUpdateAction",
    publicKeysToRemove: "BTreeSet<KeyIdOf>",
    newEndpointUrl: "Option<Url>",
    txCounter: "u64",
  },
  DidVerificationKeyUpdateAction: {
    _enum: {
      Ignore: "Null",
      Change: "DidVerificationKey",
      Delete: "Null",
    },
  },
  DidDeletionOperation: {
    did: "DidIdentifierOf",
    txCounter: "u64",
  },
  DidAuthorizedCallOperation: {
    did: "DidIdentifierOf",
    txCounter: "u64",
    call: "DidCallableOf",
  },
  HttpUrl: {
    payload: "Text",
  },
  FtpUrl: {
    payload: "Text",
  },
  IpfsUrl: {
    payload: "Text",
  },
  Url: {
    _enum: {
      Http: "HttpUrl",
      Ftp: "FtpUrl",
      Ipfs: "IpfsUrl",
    },
  },

  // LaunchPallet
  LockedBalance: {
    block: "BlockNumber",
    amount: "Balance",
  },

  // Staking
  BalanceOf: "Balance",
  RoundInfo: {
    current: "SessionIndex",
    first: "BlockNumber",
    length: "BlockNumber",
  },
  OrderedSet: "Vec<Stake>",
  Stake: {
    owner: "AccountId",
    amount: "Balance",
  },
  TotalStake: {
    collators: "Balance",
    delegators: "Balance",
  },
  InflationInfo: {
    collator: "StakingInfo",
    delegator: "StakingInfo",
  },
  StakingInfo: {
    maxRate: "Perquintill",
    rewardRate: "RewardRate",
  },
  RewardRate: {
    annual: "Perquintill",
    perBlock: "Perquintill",
  },
  Delegator: {
    delegations: "Vec<Stake>",
    total: "Balance",
  },
  DelegationCounter: {
    round: "SessionIndex",
    counter: "u32",
  },
  Collator: {
    id: "AccountId",
    stake: "Balance",
    delegators: "Vec<Stake>",
    total: "Balance",
    state: "CollatorStatus",
  },
  CollatorStatus: {
    _enum: {
      Active: "Null",
      Leaving: "SessionIndex",
    },
  },
};

const types12 = {
  ...types10,
  DelegationCounter: {
    round: "SessionIndex",
    counter: "u32",
  },
};

const definitions = {
  types: [
    {
      minmax: [0, 8],
      types: types8,
    },
    {
      minmax: [9, 9],
      types: types9,
    },
    {
      minmax: [10, 11],
      types: types10,
    },
    {
      minmax: [12, undefined],
      types: types12,
    },
  ],
};

export default definitions;
