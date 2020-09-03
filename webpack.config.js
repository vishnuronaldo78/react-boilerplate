const webpackMerge = require('webpack-merge');
const common = require('./webpack/webpack.common');

const envs = {
  development: 'development',
  production: 'production',
};

/* eslint-disable global-require,import/no-dynamic-require */
module.exports = ({ mode } = { mode: "development"}) => {
  const env = envs[process.env.NODE_ENV || 'development'], __DEV__ = (mode !== 'production');
  const envConfig = require(`./webpack/webpack.${env}.js`);
  return webpackMerge(common, envConfig({ mode, __DEV__ }));
}


