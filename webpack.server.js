const merge = require('webpack-merge');
const path = require('path');
const baseConfig = require('./webpack.base');

const serverConfig = {
  mode: 'development',
  entry: {
    server: path.resolve(__dirname, './server.js')
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist')
  },
  target: "node",
};

module.exports = merge(baseConfig, serverConfig);