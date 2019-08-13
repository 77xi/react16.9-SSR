const webpack = require("webpack")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const merge = require("webpack-merge")
const AssetsPlugin = require("assets-webpack-plugin")

const baseConfig = require("./base.config")
const paths = require("./paths")

const config = merge(baseConfig, {
  devtool: "inline-source-map",
  output: {
    filename: "bundle.js",
    // filename: "[name].[contenthash].js",
    path: paths.resolveRoot("dist/client"),
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: true
    }),
    new CleanWebpackPlugin(),
    new AssetsPlugin({
      path: paths.resolveRoot("dist/client")
    })
  ]
})

module.exports = config
