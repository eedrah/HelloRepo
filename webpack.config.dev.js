var webpack = require('webpack')
var merge = require('merge-and-concat')

var config = require('./webpack.config.js')

module.exports = merge({}, config, {
  output: {
    pathinfo: true
  },
  debug: true,
  devtool: 'inline-source-map',
  watchOptions: {
    aggregateTimeout: 100
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
})
