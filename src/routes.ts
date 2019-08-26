// https://webpack.js.org/guides/dependency-management/#context-module-api
import * as _ from "lodash"

const importAll = r => r.keys().map(key => r(key).default)

const routes = importAll(require.context("~/pages/", true, /routes.ts$/))

// why flatten
export default _.flatten(routes)
