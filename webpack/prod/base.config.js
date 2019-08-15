const paths = require("../paths")
const getEntrys = require("../getEntrys")
const pageEntrys = getEntrys()

const config = {
  mode: "development",
  entry: pageEntrys,
  resolve: {
    alias: {
      "~": paths.resolveRoot("src")
    }
  }
}

module.exports = config
