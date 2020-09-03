/* eslint-disable import/no-extraneous-dependencies */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const commonPaths = require('./paths');

module.exports = {
  mode: 'production',
  output: {
    filename: `${commonPaths.jsFolder}/[name].[hash].js`,
    path: commonPaths.outputPath,
    chunkFilename: `${commonPaths.jsFolder}/[name].[chunkhash].js`,
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        cache: true,
        sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin(),
    ],
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name(module, chunks, cacheGroupKey) {
            const moduleFileName = module.identifier().split('/').reduceRight(item => item);
            const allChunksNames = chunks.map(item => item.name).join('~');
            return `${cacheGroupKey}-${allChunksNames}-${moduleFileName}`;
          },
          chunks: 'initial',
        },
        async: {
          test: /[\\/]node_modules[\\/]/,
          name: 'async',
          chunks: 'async',
          minChunks: 4,
        },
      },
    },
    runtimeChunk: true,
  },

  module: {
    rules: [
      {
        test: /\.(css|scss|less)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
            },
          },
          'sass-loader',
          {
            loader: 'less-loader',
            options: {
              sourceMap: true,
              javascriptEnabled: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: `${commonPaths.cssFolder}/[name].css`,
      chunkFilename: `${commonPaths.cssFolder}/[name].css`,
    }),
    new CopyWebpackPlugin([
      { from: 'src/assets/fonts', to: `${commonPaths.fontsFolder}` },
    ]),
  ],
  devtool: 'source-map',
};
