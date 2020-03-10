const nodeExternals = require("webpack-node-externals")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

const paths = require("../paths")
const baseConfig = require("./base.config")

const config = {
  ...baseConfig,
  entry: {
    server: paths.resolveRoot("src/server")
  },
  target: "node",
  externals: [nodeExternals()],
  output: {
    filename: "[name].js",
    path: paths.resolveRoot("dist/server"),
    publicPath: "client/"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["css-loader"]
      },
      {
        test: /\.ts(x?)$/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  plugins: [new CleanWebpackPlugin()]
}

module.exports = config
