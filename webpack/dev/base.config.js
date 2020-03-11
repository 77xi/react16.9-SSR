const paths = require("../paths")
const getEntrys = require("../getEntrys")
const pageEntrys = getEntrys()

const config = {
  mode: "development",
  entry: pageEntrys,
  resolve: {
    alias: {
      "~": paths.resolveRoot("src")
    },
    extensions: [".js", ".ts", ".d.ts", ".tsx"]
  },
  watch: true,
  watchOptions: {
    ignored: /dist/
  }
}

module.exports = config
