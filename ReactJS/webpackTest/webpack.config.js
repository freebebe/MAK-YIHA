const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    index: './index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './index.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}
