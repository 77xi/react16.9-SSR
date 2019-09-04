// https://webpack.js.org/guides/dependency-management/#context-module-api
import _ from "lodash"

/* eslint-disable @typescript-eslint/no-explicit-any */
const importAll = (r: any) => r.keys().map((key: string) => r(key).default)

const routes = importAll(require.context("~/pages/", true, /routes.ts$/))

// why flatten
export default _.flatten(routes)
