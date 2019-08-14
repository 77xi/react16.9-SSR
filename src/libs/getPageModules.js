const cache = {}

const importAll = r => r.keys().map(key => (cache[key] = r(key).default))

importAll(require.context("~/page", true, /modules(\.js|\/index\.js)$/))

const getPageModules = spanName => ({
  [spanName]: cache[`./${spanName}/modules/index.js`]
})

export default getPageModules
