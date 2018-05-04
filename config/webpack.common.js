const commonPaths = require('./common-paths');
const { ProgressPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  output: {
    path: commonPaths.build,
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: 'file-loader',
      },
    ],
  },
  plugins: [
    new ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: `${commonPaths.public}/index.html`,
    }),
  ],
};
