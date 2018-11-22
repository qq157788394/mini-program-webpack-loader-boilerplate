const path = require('path')
const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const base = require('./webpack.config.base.js')
const utils = require('./utils')

module.exports = merge(base, {
  plugins: [
    // production模式下，清空dist目录
    new CleanWebpackPlugin([utils.resolve('dist')], {
      root: '/',
      verbose: true,
      dry: false
    })
  ]
})
