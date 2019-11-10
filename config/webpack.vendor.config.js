const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  mode: 'production',
  entry: {
    vendor: [
      '@antv/data-set',
      'antd',
      'axios',
      'bizcharts',
      'classnames',
      'enquire-js',
      'gg-editor',
      'good-storage',
      'lodash-decorators',
      'moment',
      'numeral',
      'nzh',
      'path-to-regexp',
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
      'whatwg-fetch'
    ]
  },
  output: {
    filename: '[name].[contenthash:8].chunk.js',
    path: resolve('./vendor'),
    library: '[name]'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DllPlugin({
      name: '[name]',
      path: resolve('./vendor/[name].manifest.json')
    })
  ]
}
