const webpack = require("webpack")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

const paths = require("./paths")
const getEntrys = require("./getEntrys")
const pageEntrys = getEntrys()

const config = {
  mode: 'development',
  entry: pageEntrys,
  output: {
    filename: "js/[name].[contenthash].js",
    path: paths.resolveRoot("dist/client"),
    publicPath: "/"
  },
  resolve: {
    alias: {
      "~": paths.resolveRoot("src")
    }
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
}

module.exports = config
