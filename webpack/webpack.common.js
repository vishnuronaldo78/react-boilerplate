/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const PnpWebpackPlugin = require('pnp-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

const path = require('path');
const commonPaths = require('./paths');


// eslint-disable-next-line import/no-dynamic-require
require('dotenv').config({
  path: process.env.NODE_ENV === 'development'
    ? path.resolve(__dirname, '..', '.env.development')
    : path.resolve(__dirname, '..', '.env.production'),
});


module.exports = {
  entry: ['react-hot-loader/patch', commonPaths.entryPath],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: commonPaths.imagesFolder,
            },
          },
        ],
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: '@svgr/webpack',
            options: {
              babel: false,
              icon: true,
            },
          },
        ],
      },
      {
        test: /\.(woff2|ttf|woff|otf|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: commonPaths.fontsFolder,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.mjs', '.css', '.scss', '.less'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
    plugins: [
      PnpWebpackPlugin,
    ],
  },
  resolveLoader: {
    plugins: [
      PnpWebpackPlugin.moduleLoader(module),
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: commonPaths.templatePath,
      favicon:commonPaths.faviconPath
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'async',
    }),
    new webpack.DefinePlugin({
      GRAPHQL_ENDPOINT: JSON.stringify(process.env.URI),
      ENDPOINT: JSON.stringify(process.env.BASE_URI),
      PUBLICPATH: JSON.stringify(process.env.PUBLICPATH),
    }),
  ],
};
