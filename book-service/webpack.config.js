const path = require('path');

module.exports = {
  entry: './src/Service.ts',
  target: 'node',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  output: {
    path: __dirname,
    filename: 'service.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.js'],
    mainFields: ["main"] //resolves zipkin node-fetch issue
  },
  node: {
    __dirname: false,
    __filename: false
  }
};
