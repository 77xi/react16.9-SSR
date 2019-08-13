const webpack = require("webpack")
const merge = require("webpack-merge")
const nodeExternals = require("webpack-node-externals")

const paths = require("./paths")
const baseConfig = require("./base.config")

const config = merge(baseConfig, {
  entry: {
    server: paths.resolveRoot("src/server")
  },
  target: "node",
  externals: [nodeExternals()],
  output: {
    filename: "[name].js",
    path: paths.resolveRoot("dist/server"),
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
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
      __isBrowser__: false
    })
  ]
})

module.exports = config
