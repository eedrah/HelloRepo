var merge = require('merge-and-concat')
var webpack = require('webpack')

var config = require('./webpack.config.js')

module.exports = merge({}, config, {
  bail: true,
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin()
  ]
})
