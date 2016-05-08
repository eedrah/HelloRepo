var path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    library: 'HelloRepo',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loader: 'babel',
        exclude: /node_modules/,
        query: { presets: [ 'es2015', 'react' ] }
      },
      {
        test: /\.css$/,
        loaders: [ 'style', 'css', 'postcss' ]
      },
      {
        test: /\.(png|jpg)$/,
        loaders: [ 'url' ],
        query: { limit: 8192 }
      }
    ]
  },
  progress: true
}
