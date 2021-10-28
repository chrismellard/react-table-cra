
const { useBabelRc, getBabelLoader } = require('customize-cra');

module.exports = function override(config) {

  // Allow babel to load files across entire monorepo
  useBabelRc();
  getBabelLoader(config).include = undefined;

  return config;
};
