const webpack = require("webpack")
const nodeExternals = require('webpack-node-externals')

const paths = require("./paths")

const config = {
  mode: 'development',
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
  resolve: {
    alias: {
      "~": paths.resolveRoot("src")
    }
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
}

module.exports = config
