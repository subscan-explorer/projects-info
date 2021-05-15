import acala_icon from "url:../assets/images/acala.svg";
import ares_icon from "url:../assets/images/ares.svg";
import bifrost_icon from "url:../assets/images/bifrost.svg";
import bitcountry_icon from "url:../assets/images/bitcountry.svg";
import clover_icon from "url:../assets/images/clover.svg";
import crust_icon from "url:../assets/images/crust.svg"
import crust_type from "../assets/registry/crust-parachain.js";
import darwinia_icon from "url:../assets/images/darwinia.png"
import darwinia_type from "../assets/registry/darwinia-parachain.js";
import datahighway_icon from "url:../assets/images/datahighway.png"
import encointer_notee_icon from "url:../assets/images/encointer-notee.svg"
import hydrate_icon from "url:../assets/images/hydrate.png"
import hydrate_type from "../assets/registry/hydrate-parachain.js";
import integritee_icon from "url:../assets/images/integritee.svg"
import jupiter_icon from "url:../assets/images/jupiter.svg"
import kilt_icon from "url:../assets/images/kilt.svg"
import kilt_type from "../assets/registry/kilt-parachain.js";
import litentry_icon from "url:../assets/images/litentry.png"
import math_icon from "url:../assets/images/math.svg"
import polkabtc_icon from "url:../assets/images/polkabtc.png"
import polkabtc_type from "../assets/registry/polkabtc-parachain.js";
import phala_icon from "url:../assets/images/phala.svg"
import phala_type from "../assets/registry/phala-parachain.js";
import plasm_icon from "url:../assets/images/plasm.png"
import plasm_type from "../assets/registry/plasm-parachain.js";
import subdao_icon from "url:../assets/images/subdao.png"
import tick_icon from "url:../assets/images/tick.svg"
import track_icon from "url:../assets/images/track.svg"
import trick_icon from "url:../assets/images/trick.svg"
import zenlink_icon from "url:../assets/images/zenlink.svg"

//https://github.com/polkadot-js/apps/blob/b8f22763ab0fe2fd4b0663d3d4988a9763dcd9ce/packages/apps-config/src/endpoints/testingRococo.ts

export default {
  parachains: [
    {
      info: 'rococoTick',
      paraId: 100,
      text: 'Tick',
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
      websiteLink: "https://apron.pro/",
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
      websiteLink: "https://www.aresprotocol.com/",
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
      websiteLink: "",
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
      websiteLink: "https://bifrost.finance/",
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
      websiteLink: "https://bit.country/",
      logo: bitcountry_icon,
      registry: {},
      providers: {
        BitCountry: 'wss://tewai-parachain.js.bit.country:9955'
      }
    },
    {
      info: '',
      paraId: 10001,
      text: 'Centrifuge',
      project: "Centrifuge",
      websiteLink: "https://centrifuge.io/",
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
      websiteLink: "https://chainx.org/",
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
      websiteLink: "https://clover.finance/",
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
      websiteLink: "https://www.crust.network/",
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
      websiteLink: "https://darwinia.network/",
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
      websiteLink: "https://www.datahighway.com/",
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
      websiteLink: "https://encointer.org/",
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
      websiteLink: "https://equilibrium.io",
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
      websiteLink: "https://hydradx.io/",
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
      websiteLink: "https://github.com/scs/integritee-parachain.js",
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
      websiteLink: "https://patract.network/",
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
      websiteLink: "https://kilt.io/",
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
      websiteLink: "https://laminar.one/",
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
      websiteLink: "https://www.litentry.com/",
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
      websiteLink: "https://acala.network/",
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
      websiteLink: "https://mathchain.org/",
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
      websiteLink: "https://phala.network/",
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
      websiteLink: "https://www.plasmnet.io/",
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
      websiteLink: "https://polkabtc.io/",
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
      websiteLink: "https://robonomics.network/",
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
      websiteLink: "https://snowfork.substack.com/p/a-trustless-general-purpose-polkadot",
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
      websiteLink: "https://sora.org/",
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
      websiteLink: "https://starks.network/",
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
      websiteLink: "https://www.subdao.network/",
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
      websiteLink: "https://subsocial.network/",
      registry: {},
      providers: {
        wss: ''
      }
    },
    {
      info: '',
      paraId: 3,
      text: 'TiDOT',
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
      websiteLink: "https://www.zenlink.pro/",
      logo: zenlink_icon,
      registry: {},
      providers: {
        Zenlink: 'wss://rococo-parachain.js.zenlink.pro'
      }
    }
  ]
}