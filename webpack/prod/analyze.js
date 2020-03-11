const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin

const createConfig = require("../createConfig")

const clientConfig = createConfig("web", "production")

clientConfig.plugins.push(new BundleAnalyzerPlugin())

module.exports = clientConfig
