const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const ManifestPlugin = require("webpack-manifest-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin")
const nodeExternals = require("webpack-node-externals")

const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")

const paths = require("./paths")
const getEntrys = require("./getEntrys")
const { vendorDependencies } = require("./constant")

const pageEntrys = getEntrys()

const web = "web"
const development = "development"

function createConfig(target = web, mode = development) {
  const isWeb = target === web
  const isDev = mode === development

  const config = {
    mode,
    entry: {
      ...(isWeb && {
        ...pageEntrys,
        ...(!isDev && {
          vendor: vendorDependencies
        })
      }),
      ...(!isWeb && {
        server: paths.resolveRoot("src/server")
      })
    },
    output: {
      filename: isWeb ? "[name].[contenthash].js" : "[name].js",
      path: isWeb
        ? paths.resolveRoot("dist/client")
        : paths.resolveRoot("dist/server"),
      publicPath: "client/"
    },
    stats: "errors-only",
    ...(!isWeb && {
      target: "node",
      externals: [nodeExternals()]
    }),
    ...(isDev && {
      devtool: "inline-source-map",
      watch: true,
      watchOptions: {
        ignored: /dist/
      }
    }),
    resolve: {
      alias: {
        "~": paths.resolveRoot("src")
      },
      extensions: [".js", ".ts", ".d.ts", ".tsx"]
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            isWeb && {
              loader: MiniCssExtractPlugin.loader
            },
            isWeb && "css-loader",
            !isWeb && {
              loader: "css-loader",
              options: {
                importLoaders: 1
              }
            }
          ].filter(Boolean)
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
                limit: 8192,
                emitFile: isWeb
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      isDev && new ForkTsCheckerWebpackPlugin(),
      isWeb &&
        new MiniCssExtractPlugin({
          filename: "[name].[hash].css",
          chunkFilename: "[name].[hash].css"
        }),
      isWeb &&
        new ManifestPlugin({
          publicPath: "client/"
        })
    ].filter(Boolean),
    ...(isWeb && {
      ...(!isDev && {
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
      })
    })
  }

  return config
}

module.exports = createConfig
