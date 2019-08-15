const prodConfig = require("./index")
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin

prodConfig.plugins.push(new BundleAnalyzerPlugin())

module.exports = prodConfig
