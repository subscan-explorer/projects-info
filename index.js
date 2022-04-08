const kusamaJsons = require.context("./networks/kusama", false, /\.json$/);
const kusamaParachains = {};
kusamaJsons.keys().forEach((k) => {
  const c = kusamaJsons(k);
  if (c.data && c.data.ParaID) {
    kusamaParachains[c.data.ParaID] = c.data;
  }
});

const polkadotJsons = require.context("./networks/polkadot", false, /\.json$/);
const polkadotParachains = {};
polkadotJsons.keys().forEach((k) => {
  const c = polkadotJsons(k);
  if (c.data && c.data.ParaID) {
    polkadotParachains[c.data.ParaID] = c.data;
  }
});

const rococoJsons = require.context("./networks/rococo", false, /\.json$/);
const rococoParachains = {};
rococoJsons.keys().forEach((k) => {
  const c = rococoJsons(k);
  if (c.data && c.data.ParaID) {
    rococoParachains[c.data.ParaID] = c.data;
  }
});

const westendJsons = require.context("./networks/westend", false, /\.json$/);
const westendParachains = {};
westendJsons.keys().forEach((k) => {
  const c = westendJsons(k);
  if (c.data && c.data.ParaID) {
    westendParachains[c.data.ParaID] = c.data;
  }
});

export const parachainInfos = {
  kusama: kusamaParachains,
  polkadot: polkadotParachains,
  rococo: rococoParachains,
  westend: westendParachains,
};
