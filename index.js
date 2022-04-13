const kusamaJsons = require.context("./networks/kusama", false, /\.json$/);
const kusamaParachains = {};
kusamaJsons.keys().forEach((k) => {
  const c = kusamaJsons(k);
  if (c.data && c.data.ParaID) {
    kusamaParachains[c.data.ParaID] = c.data;
    try {
      const logoPaths = c.data.Logo.split("/");
      const imageName = logoPaths[logoPaths.length - 1];
      kusamaParachains[
        c.data.ParaID
      ].logo = require(`./assets/images/${imageName}`);
    } catch {}
  }
});

const polkadotJsons = require.context("./networks/polkadot", false, /\.json$/);
const polkadotParachains = {};
polkadotJsons.keys().forEach((k) => {
  const c = polkadotJsons(k);
  if (c.data && c.data.ParaID) {
    polkadotParachains[c.data.ParaID] = c.data;
    try {
      const logoPaths = c.data.Logo.split("/");
      const imageName = logoPaths[logoPaths.length - 1];
      polkadotParachains[
        c.data.ParaID
      ].logo = require(`./assets/images/${imageName}`);
    } catch {}
  }
});

const rococoJsons = require.context("./networks/rococo", false, /\.json$/);
const rococoParachains = {};
rococoJsons.keys().forEach((k) => {
  const c = rococoJsons(k);
  if (c.data && c.data.ParaID) {
    rococoParachains[c.data.ParaID] = c.data;
    try {
      const logoPaths = c.data.Logo.split("/");
      const imageName = logoPaths[logoPaths.length - 1];
      rococoParachains[
        c.data.ParaID
      ].logo = require(`./assets/images/${imageName}`);
    } catch {}
  }
});

const westendJsons = require.context("./networks/westend", false, /\.json$/);
const westendParachains = {};
westendJsons.keys().forEach((k) => {
  const c = westendJsons(k);
  if (c.data && c.data.ParaID) {
    westendParachains[c.data.ParaID] = c.data;
    try {
      const logoPaths = c.data.Logo.split("/");
      const imageName = logoPaths[logoPaths.length - 1];
      westendParachains[
        c.data.ParaID
      ].logo = require(`./assets/images/${imageName}`);
    } catch {}
  }
});

export const parachainInfos = {
  kusama: kusamaParachains,
  polkadot: polkadotParachains,
  rococo: rococoParachains,
  westend: westendParachains,
};
