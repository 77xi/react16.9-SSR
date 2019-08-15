const fs = require("fs")
const zipObject = require("lodash/zipObject")

const paths = require("./paths")

const getEntrys = () => {
  const pagePath = paths.resolveRoot("src/pages")
  const pageNameArr = fs.readdirSync(pagePath)
  const pageEntryArr = pageNameArr.map(name => `${pagePath}/${name}/entry.js`)

  return zipObject(pageNameArr, pageEntryArr)
}

module.exports = getEntrys
