const commonPaths = require('./common-paths');

module.exports = {
  devServer: {
    port: 3000,
    historyApiFallback: true,
    contentBase: commonPaths.src,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};
