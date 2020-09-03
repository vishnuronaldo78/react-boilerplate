const webpack = require('webpack');
const commonPaths = require('./paths');
const config = env => (require('../src/config.json')[env]);
const configLocal = env => (require('../src/config.local')[env]);

module.exports = ({ mode, __DEV__ }) => {
  const info = config(mode);
  const local = configLocal(mode);

  return {
    mode: 'development',
    devtool: 'eval-source-map',
    resolve: {
    //   alias: {
    //     'react-dom': '@hot-loader/react-dom'
    //   },
    },
    output: {
      filename: '[name].js',
      path: commonPaths.outputPath,
      chunkFilename: '[name].js',
    },
    module: {
      rules: [
        {
          test: /\.(css)$/,
          use: ['style-loader', 'css-loader', {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }]
        },
        {
          test: /\.(s(a|c)ss)$/,
          use: ['style-loader', 'css-loader', {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }]
        },
      ],
    },
    devServer: {
      historyApiFallback: true,
      contentBase: commonPaths.outputPath,
      compress: true,
      proxy: {
        '/images': 'http://localhost:3001'
      },
      hot: true,
      liveReload: false,
      openPage: '',
      port: 3000
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        __DEV__,
        app_environment: mode,
        env_config: JSON.stringify({...info, ...local})
      })
    ],
  };
}
