const assetsClientPath = "client"

const getAssets = ({ spanName, assetsMapStr }) => {
  const assetsPath = Object.values(JSON.parse(assetsMapStr))
  const rootPath = `${assetsClientPath}/${spanName}`

  // match dist/client/home.hash.js
  const jsRegExp = new RegExp(`^${rootPath}\\..*\\.js$`)
  const cssRegExp = new RegExp(`^${rootPath}\\..*\\.css$`)

  return {
    scripts: assetsPath.filter(assetsPath => jsRegExp.test(assetsPath)),
    styles: assetsPath.filter(assetsPath => cssRegExp.test(assetsPath))
  }
}

export default getAssets
