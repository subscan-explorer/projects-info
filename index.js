import acala_icon from "assets/images/acala-rococo.svg"
import ares_icon from "assets/images/ares-rococo.svg"
import bifrost_icon from "assets/images/bifrost-rococo.svg"
import bitcountry_icon from "assets/images/bitcountry-rococo.svg"
import clover_icon from "assets/images/clover-rococo.svg"
import crust_icon from "assets/images/crust-rococo.svg"
import crust_type from "assets/registry/crust-parachain";
import darwinia_icon from "assets/images/darwinia-rococo.png"
import darwinia_type from "assets/registry/darwinia-parachain";
import datahighway_icon from "assets/images/datahighway-rococo.png"
import encointer_notee_icon from "assets/images/encointer-notee-rococo.svg"
import hydrate_icon from "assets/images/hydrate-rococo.png"
import hydrate_type from "assets/registry/hydrate-parachain";
import integritee_icon from "assets/images/integritee-rococo.svg"
import jupiter_icon from "assets/images/jupiter-rococo.svg"
import kilt_icon from "assets/images/kilt-rococo.svg"
import kilt_type from "assets/registry/kilt-parachain";
import litentry_icon from "assets/images/litentry-rococo.png"
import math_icon from "assets/images/math-rococo.svg"
import polkabtc_icon from "assets/images/polkabtc-rococo.png"
import polkabtc_type from "assets/registry/polkabtc-parachain";
import phala_icon from "assets/images/phala-rococo.svg"
import phala_type from "assets/registry/phala-parachain";
import plasm_icon from "assets/images/plasm-rococo.png"
import plasm_type from "assets/registry/plasm-parachain";
import subdao_icon from "assets/images/subdao-rococo.png"
import tick_icon from "assets/images/tick-rococo.svg"
import track_icon from "assets/images/track-rococo.svg"
import trick_icon from "assets/images/trick-rococo.svg"
import zenlink_icon from "assets/images/zenlink-rococo.svg"

//https://github.com/polkadot-js/apps/blob/b8f22763ab0fe2fd4b0663d3d4988a9763dcd9ce/packages/apps-config/src/endpoints/testingRococo.ts

export default {
  parachains: [
    {
      info: 'rococoTick',
      paraId: 100,
      text: 'Tick',
      tag: "System",
      logo: tick_icon,
      registry: {},
      providers: {
        Parity: 'wss://tick-rpc.polkadot.io'
      }
    },
    {
      info: 'rococoTrick',
      paraId: 110,
      text: 'Trick',
      tag: "System",
      logo: trick_icon,
      registry: {},
      providers: {
        Parity: 'wss://trick-rpc.polkadot.io'
      }
    },
    {
      info: 'rococoTrack',
      paraId: 120,
      text: 'Track',
      tag: "System",
      logo: track_icon,
      registry: {},
      providers: {
        Parity: 'wss://track-rpc.polkadot.io'
      }
    },
    // add any additional parachains here, alphabetical
    {
      info: '',
      paraId: 128,
      text: 'Apron',
      project: "Apron",
      tag: "Infrastructure Grant",
      link: "https://apron.pro/",
      batch: "Waiting",
      registry: {},
      providers: {
        wss: ''
      }
    },
    {
      info: 'rococoAres',
      paraId: 6,
      text: 'Ares PC1',
      project: "ARES PC1",
      tag: "Oracle",
      link: "https://www.aresprotocol.com/",
      batch: "Waiting",
      logo: ares_icon,
      registry: {},
      providers: {
        'Ares Protocol': 'wss://rococo.parachain.aresprotocol.com'
      }
    },
    {
      info: '',
      paraId: 58111,
      text: 'Automata',
      project: "Automata",
      tag: "",
      link: "",
      batch: "Waiting",
      registry: {},
      providers: {
        wss: ''
      }
    },
    {
      info: 'rococoBifrost',
      paraId: 107,
      text: 'Bifrost PC1',
      project: "Bifrost",
      tag: "Bridge DeFi",
      link: "https://bifrost.finance/",
      batch: "4th",
      logo: bifrost_icon,
      registry: {},
      providers: {
        Bifrost: 'wss://rococo-1.testnet.liebi.com'
      }
    },
    {
      info: 'rococoBitCountry',
      paraId: 8888,
      text: 'Bit.Country PC1',
      project: "Bit.Country",
      link: "https://bit.country/",
      batch: "Waiting",
      logo: bitcountry_icon,
      registry: {},
      providers: {
        BitCountry: 'wss://tewai-parachain.bit.country:9955'
      }
    },
    {
      info: '',
      paraId: 10001,
      text: 'Centrifuge',
      project: "Centrifuge",
      tag: "DeFi",
      link: "https://centrifuge.io/",
      batch: "Waiting",
      registry: {},
      providers: {
        wss: ''
      }
    },
    {
      info: '',
      paraId: 59,
      text: 'ChainX',
      project: "ChainX",
      tag: "Bridge",
      link: "https://chainx.org/",
      batch: "5th",
      registry: {},
      providers: {
        wss: ''
      }
    },
    {
      info: 'rococoClover',
      paraId: 229,
      text: 'Clover PC1',
      project: "Clover",
      tag: "SmartContracts",
      link: "https://clover.finance/",
      batch: "4th",
      logo: clover_icon,
      registry: {},
      providers: {
        Clover: 'wss://api-rococo.clover.finance'
      }
    },
    {
      info: 'rococoCrust',
      paraId: 7777,
      text: 'Crust PC1',
      logo: crust_icon,
      project: "Crust",
      tag: "Data",
      link: "https://www.crust.network/",
      registry: crust_type,
      providers: {
        Crust: 'wss://api-rococo.crust.network'
      }
    },
    {
      info: 'rococoDarwinia',
      paraId: 18,
      text: 'Darwinia PC2',
      project: "Darwinia",
      tag: "Bridge",
      link: "https://darwinia.network/",
      logo: darwinia_icon,
      registry: darwinia_type,
      providers: {
        Darwinia: 'wss://parachain-rpc.darwinia.network'
      }
    },
    {
      info: 'rococoDataHighway',
      paraId: 2,
      text: 'DataHighway',
      project: "DataHighway",
      tag: "Data",
      batch: "Waiting",
      link: "https://www.datahighway.com/",
      logo: datahighway_icon,
      registry: {},
      providers: {
        DataHighway: 'wss://testnet-harbour.datahighway.com'
      }
    },
    {
      info: '',
      paraId: 2021,
      text: 'Edgeware',
      project: "Edgeware",
      tag: "SmartContracts",
      batch: "Waiting",
      registry: {},
      providers: {
        wss: ''
      }
    },
    {
      info: 'rococoEncointer',
      paraId: 1862,
      text: 'Encointer PC1',
      project: "Encointer",
      tag: "DAO",
      link: "https://encointer.org/",
      batch: "Waiting",
      logo: encointer_notee_icon,
      registry: {},
      providers: {
        Encointer: 'wss://rococo.encointer.org'
      }
    },
    {
      info: '',
      paraId: 42,
      text: 'Equilibrium',
      project: "Equilibrium",
      tag: "DeFi",
      link: "https://equilibrium.io",
      batch: "Waiting",
      registry: {},
      providers: {
        wss: ''
      }
    },
    {
      info: '',
      paraId: 6806,
      text: 'Everlasting',
      project: "Everlasting",
      batch: "Waiting",
      registry: {},
      providers: {
        wss: ''
      }
    },
    {
      info: 'rococoHydrate',
      paraId: 82406,
      text: 'Hydrate',
      project: "HydraDX",
      tag: "DeFi",
      link: "https://hydradx.io/",
      logo: hydrate_icon,
      registry: hydrate_type,
      providers: {
        HydraDX: 'wss://hydrate-rpc.hydradx.io:9944'
      }
    },
    {
      info: 'rococoIdavoll',
      paraId: 7766,
      text: 'Idavoll',
      registry: {},
      providers: {
        Idavoll: 'wss://rococo.idavoll.network'
      }
    },
    {
      info: 'rococoIntegritee',
      paraId: 1983,
      text: 'IntegriTEE PC1',
      project: "IntegriTEE",
      tag: "Developer",
      link: "https://github.com/scs/integritee-parachain",
      batch: "Waiting",
      logo: integritee_icon,
      registry: {},
      providers: {
        SCS: 'wss://rococo.integritee.network'
      }
    },
    {
      info: 'rococoJupiter',
      paraId: 1,
      text: 'Patract Jupiter R1',
      project: 'Patract Jupiter R1',
      batch: "5th",
      tag: "SmartContracts",
      link: "https://patract.network/",
      logo: jupiter_icon,
      registry: {},
      providers: {
        jupiter: 'wss://ws.rococo.jupiter.patract.cn'
      }
    },
    {
      info: 'rococoKilt',
      paraId: 12623,
      text: 'KILT PC1',
      project: 'KILT',
      tag: "Data",
      link: "https://kilt.io/",
      logo: kilt_icon,
      registry: kilt_type,
      providers: {
        'KILT Protocol': 'wss://para.rococo-v1.kilt.io'
      }
    },
    {
      info: '',
      paraId: 777,
      text: 'Laminar',
      project: "Laminar",
      tag: "DeFi",
      link: "https://laminar.one/",
      batch: "Waiting",
      registry: {},
      providers: {
        wss: ''
      }
    },
    {
      info: 'rococoLitentry',
      paraId: 1984,
      text: 'Litentry Rostock',
      project: "Litentry Rostock",
      tag: "Identity",
      link: "https://www.litentry.com/",
      batch: "Waiting",
      logo: litentry_icon,
      registry: {},
      providers: {
        Litentry: 'wss://rococov1.litentry.io'
      }
    },
    {
      info: 'rococoAcala',
      paraId: 666,
      text: 'Mandala PC2',
      project: 'Acala',
      tag: "DeFi",
      link: "https://acala.network/",
      logo: acala_icon,
      registry: {},
      providers: {
        // Acala: 'wss://rococo-1.acala.laminar.one/ws'
        Acala: ''
      }
    },
    {
      info: 'rococoMathChain',
      paraId: 40,
      text: 'MathChain PC1',
      project: "MathChain",
      tag: "SmartContracts",
      link: "https://mathchain.org/",
      batch: "5th",
      logo: math_icon,
      registry: {},
      providers: {
        MathWallet: 'wss://testpara.maiziqianbao.net/ws'
      }
    },
    {
      info: 'rococoPhala',
      paraId: 30,
      text: 'Phala PC1',
      project: 'Phala',
      tag: "Privacy",
      link: "https://phala.network/",
      logo: phala_icon,
      registry: phala_type,
      providers: {
        // Phala: 'wss://rococov1.phala.network/ws'
        Phala: ''
      }
    },
    {
      info: 'rococoPlasm',
      paraId: 5000,
      text: 'Plasm PC2',
      project: 'Plasm',
      tag: "SmartContracts",
      link: "https://www.plasmnet.io/",
      logo: plasm_icon,
      registry: plasm_type,
      providers: {
        PlasmNetwork: 'wss://rpc.rococo.plasmnet.io'
      }
    },
    {
      info: 'rococoPolkabtc',
      paraId: 21,
      text: 'PolkaBTC PC1',
      project: 'PolkaBTC',
      tag: "Bridge",
      link: "https://polkabtc.io/",
      logo: polkabtc_icon,
      registry: polkabtc_type,
      providers: {
        Interlay: 'wss://rococo.polkabtc.io/api/parachain'
      }
    },
    {
      info: 'rococoRobonomics',
      paraId: 3000,
      text: 'Robonomics PC2',
      project: 'Robonomics',
      batch: "5th",
      tag: "IOT",
      link: "https://robonomics.network/",
      registry: {},
      providers: {
        Airalab: 'wss://rococo.parachain.robonomics.network'
      }
    },
    {
      info: '',
      paraId: 755,
      text: 'Snowbridge',
      project: 'Snowbridge',
      batch: "Waiting",
      tag: "Bridge",
      link: "https://snowfork.substack.com/p/a-trustless-general-purpose-polkadot",
      registry: {},
      providers: {
        wss: ''
      }
    },
    {
      info: '',
      paraId: 1337,
      text: 'SORA',
      project: 'SORA',
      batch: "Waiting",
      tag: "DeFi",
      link: "https://sora.org/",
      registry: {},
      providers: {
        wss: ''
      }
    },
    {
      info: '',
      paraId: 1617,
      text: 'Starks',
      project: 'Starks',
      batch: "4th",
      tag: "Privacy",
      link: "https://starks.network/",
      registry: {},
      providers: {
        wss: ''
      }
    },
    {
      info: 'rococoSubDAO',
      paraId: 888,
      text: 'SubDAO PC1',
      project: 'SubDAO PC1',
      batch: "Waiting",
      tag: "DAO",
      link: "https://www.subdao.network/",
      logo: subdao_icon,
      registry: {},
      providers: {
        SubDAONetwork: 'wss://parachain.subdao.network'
      }
    },
    {
      info: '',
      paraId: 28,
      text: 'Subsocial',
      project: 'Subsocial',
      batch: "Waiting",
      tag: "Social",
      link: "https://subsocial.network/",
      registry: {},
      providers: {
        wss: ''
      }
    },
    {
      info: '',
      paraId: 3,
      text: 'TiDOT',
      batch: "Waiting",
      registry: {},
      providers: {
        SubDAONetwork: 'wss://parachain.subdao.network'
      }
    },
    {
      info: 'rococoTrustBase',
      paraId: 6633,
      text: 'TrustBase PC1',
      registry: {},
      providers: {
        TrustBase: 'wss://rococo.trustednodes.net'
      }
    },
    {
      info: 'rococoZenlink',
      paraId: 188,
      text: 'Zenlink PC1',
      project: 'Zenlink',
      batch: "4th",
      tag: "DeFi",
      link: "https://www.zenlink.pro/",
      logo: zenlink_icon,
      registry: {},
      providers: {
        Zenlink: 'wss://rococo-parachain.zenlink.pro'
      }
    }
  ]
}