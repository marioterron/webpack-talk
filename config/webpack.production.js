const commonPaths = require('./common-paths');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin([commonPaths.build], { root: commonPaths.root }),
    new CopyWebpackPlugin([
      {
        from: `${commonPaths.public}/favicon.png`,
        to: `${commonPaths.build}/favicon.png`,
        toType: 'file',
      },
    ]),
    new MiniCssExtractPlugin('style.[hash].css'),
  ],
};
