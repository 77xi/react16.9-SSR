const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const ManifestPlugin = require("webpack-manifest-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")

const baseConfig = require("./base.config")
const paths = require("../paths")
const { vendorDependencies } = require("../constant")
const getEntrys = require("../getEntrys")

const pageEntrys = getEntrys()

const config = {
  ...baseConfig,
  entry: {
    ...baseConfig.entry,
    vendor: vendorDependencies
  },
  output: {
    filename: "[name].[contenthash].js",
    path: paths.resolveRoot("dist/client"),
    publicPath: "client/"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          "css-loader"
        ]
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
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
      chunkFilename: "[name].[hash].css"
    }),
    new ManifestPlugin({
      publicPath: "client/"
    })
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin()
    ],
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: "initial",
          test: "vendor",
          name: "vendor"
        },
        common: {
          chunks: "initial",
          name: "common",
          priority: -1,
          minChunks: Object.keys(pageEntrys).length,
          enforce: true
        }
      }
    }
  }
}

module.exports = config
