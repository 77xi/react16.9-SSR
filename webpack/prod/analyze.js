const prodConfig = require("./client.config")
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin

prodConfig.plugins.push(new BundleAnalyzerPlugin())

module.exports = prodConfig
