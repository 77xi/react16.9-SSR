const nodeExternals = require("webpack-node-externals")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

const paths = require("../paths")
const baseConfig = require("./base.config")

const config = {
  ...baseConfig,
  entry: {
    server: paths.resolveRoot("src/server")
  },
  devtool: "inline-source-map",
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
        test: /\.css$/,
        use: [
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          }
        ]
      },
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
  plugins: [new CleanWebpackPlugin()]
}

module.exports = config
