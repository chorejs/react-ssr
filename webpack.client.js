const merge = require('webpack-merge');
const path = require('path');
const baseConfig = require('./webpack.base');

const clientConfig = {
  mode: 'development',
  entry: {
    client: path.resolve(__dirname, './client/index.js')
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist')
  }
};

module.exports = merge(baseConfig, clientConfig);