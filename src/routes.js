// https://webpack.js.org/guides/dependency-management/#context-module-api
import flatten from "lodash.flatten"

const importAll = r => r.keys().map(key => r(key).default)

const routes = importAll(require.context("~/page/", true, /routes.js$/))

// why flatten
export default flatten(routes)
