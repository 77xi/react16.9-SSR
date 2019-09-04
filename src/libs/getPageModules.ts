import { Reducer, ReducersMapObject } from "redux"

const cache: ReducersMapObject = {}

/* eslint-disable @typescript-eslint/no-explicit-any */
const importAll = (r: any) =>
  r.keys().map((key: string) => (cache[key] = r(key).default))

importAll(require.context("~/pages", true, /modules(\.ts|\/index\.ts)$/))

const getPageModules = (spanName: string): Reducer =>
  cache[`./${spanName}/modules/index.ts`]

export default getPageModules
