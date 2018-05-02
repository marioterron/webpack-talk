const webpackMerge = require('webpack-merge');
const commonConfig = require('./config/webpack.common');

module.exports = env => {
  const envConfig = require(`./config/webpack.${env}`);
  return webpackMerge({ mode: env }, commonConfig, envConfig);
};
