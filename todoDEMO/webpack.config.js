const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    path: path.resolve(__dirname, 'src', 'main.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './index.bunble.js'
  },
  module: {
    rules: [{
      test: ['/\.?js$/', '/\.css$/i'],
      exclude: [/node_modules/],
      use: {
        loader: ['babel-loader', 'style-loader', 'css-loader', 'file-loader', '@svgr/webpack'],
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    }, ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html")
    })
  ]
}
