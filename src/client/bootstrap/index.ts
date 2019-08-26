import { RouteComponentProps } from "react-router-dom"
import { Store, Reducer } from "redux"

import renderReactApp from "./renderReactApp"
import initRedux from "./initRedux"

interface CustomRoute {
  exact: boolean
  path: string
  name: string
  component: React.ComponentType
}

interface Params {
  routes?: RouteComponentProps[] | CustomRoute[]
  modules?: Reducer
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
