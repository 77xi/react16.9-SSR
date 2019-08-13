const webpack = require("webpack")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

const paths = require("./paths")

const config = {
  mode: 'development',
  entry: {
    client: paths.resolveRoot("src/client")
  },
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
