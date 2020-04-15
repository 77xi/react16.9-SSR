const fs = require("fs")
const zipObject = require("lodash/zipObject")

const paths = require("./paths")

const getEntrys = entry => {
  const pagePath = paths.resolveRoot("src/apps")
  const pageNameArr = fs.readdirSync(pagePath)
  const pageEntryArr = pageNameArr.map(
    name => `${pagePath}/${name}/${entry}.ts`
  )

  return zipObject(pageNameArr, pageEntryArr)
}

const getClientAppEntrys = () => getEntrys("client")
const getServerAppEntrys = () => getEntrys("server")

module.exports = {
  getClientAppEntrys,
  getServerAppEntrys
}
