const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `$(__dirname)/index.html`,
  filename: 'index.html',
  inject: 'body',
})

module.exports = {
  entry: [
    './src/main.js'
  ],
  output: {
    path: `$(__dirname)/dist`,
    filename: 'index_bundle.js',
  },
  module: [
    preLoaders: [
      {
        test: /\.jsx$|\.js$\,
        loader: 'eslint-loader',
        include: `${__dirname}/src`,
        exclude: /bundle\.js$/,
      }
    ],
    loader: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      },
    }],
  ]
  devServer: {
    inline: true,
    prots: 8008,
  },
  plugins:[HtmlWebpackPluginConfig],
}
