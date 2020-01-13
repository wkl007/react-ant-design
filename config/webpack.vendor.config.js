const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

const resolve = dir => path.join(__dirname, '..', dir)

module.exports = {
  mode: 'production',
  entry: {
    vendor: [
      'react',
      'react-dom'
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
