const commonPaths = require('./paths');

module.exports = {
  mode: 'development',
  watch: true,
  watchOptions: {
    poll: 100,
  },
  output: {
    filename: '[name].js',
    path: commonPaths.outputPath,
    publicPath: '/',
    chunkFilename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(css|scss|less)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
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
  devServer: {
    historyApiFallback: true,
    contentBase: commonPaths.outputPath,
    compress: true,
    hot: true,
  },
};
