import { Store, ReducersMapObject } from "redux"
import { PageRouteProps } from "~/types"

import renderReactApp from "./renderReactApp"
import initRedux from "./initRedux"

interface Params {
  routes?: PageRouteProps[]
  modules?: ReducersMapObject
  initalState?: object
  spanName?: string
  store?: Store
}

// const next = () => initRedux(context, () => renderReactApp(context, () => Promise.resolve))
const microFlow = (middlewares: Function[]) => (context: Params) => {
  const next = middlewares.reduceRight(
    (acc, f) => () => f(context, acc),
    () => Promise.resolve
  )
  return next()
}

export default microFlow([initRedux, renderReactApp])
