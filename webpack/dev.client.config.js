const webpack = require("webpack")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const merge = require("webpack-merge")

const baseConfig = require("./base.config")
const paths = require("./paths")

const config = merge(baseConfig, {
  output: {
    filename: "js/[name].[contenthash].js",
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
    new CleanWebpackPlugin()
  ]
})

module.exports = config
