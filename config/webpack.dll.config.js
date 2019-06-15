const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  mode: 'production',
  entry: {
    vendor: [
      'antd',
      'axios',
      'classnames',
      'enquire-js',
      'es6-promise',
      'gg-editor',
      'good-storage',
      'lodash-decorators',
      'nprogress',
      'numeral',
      'path-to-regexp',
      'prop-types',
      'rc-drawer',
      'react',
      'react-container-query',
      'react-document-title',
      'react-dom',
      'react-loadable',
      'react-redux',
      'react-router-dom',
      'redux',
      'redux-thunk',
      'whatwg-fetch',
    ],
  },
  output: {
    filename: '[name].[contenthash:8].dll.js',
    path: resolve('./dll'),
    library: '[name]'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DllPlugin({
      name: '[name]',
      path: resolve('./dll/[name].manifest.json')
    })
  ]
}
