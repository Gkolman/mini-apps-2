const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './client/app.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, './public/dist'),
    filename: 'bundle.js',
  },
  watch: true,
};