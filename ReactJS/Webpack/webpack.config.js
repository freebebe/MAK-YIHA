const path = require("path");

const webpack = require("webpack");
module.exports = {
  context: path.resolve(__dirname, "./src/testing"),
  entry: {
    app: "./main.js",
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js",
    publicPath: "/assets",
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: ["style.loader", "css-loader"],
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, "./src"),
  },
};
