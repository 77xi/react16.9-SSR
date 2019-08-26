interface Param {
  spanName: string
  manifest: string
}

const getAssets = ({ spanName, manifest }: Param) => {
  const manifestMap = JSON.parse(manifest)

  const commonCss = manifestMap["common.css"]
  const publicJs = [manifestMap["vendor.js"], manifestMap["common.js"]]

  return {
    scripts: [...publicJs, manifestMap[`${spanName}.js`]].filter(Boolean),
    styles: [commonCss, manifestMap[`${spanName}.css`]].filter(Boolean)
  }
}

export default getAssets
