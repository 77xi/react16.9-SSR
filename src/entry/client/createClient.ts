import "~/entry/client/polyfill.client"

import { ReducersMapObject } from "redux"

import domReady from "~/libs/domReady"
import bootstrap from "~/entry/client/bootstrap"

import { PageRouteProps } from "~/types"

interface Params {
  routes?: PageRouteProps[]
  modules?: ReducersMapObject
}

const initClient = ({ routes, modules }: Params): Function => {
  const { initalState, spanName } = JSON.parse(
    document.getElementById("js-initalData").textContent
  )
  return bootstrap({ routes, modules, initalState, spanName })
}

const createClient = (options: Params) =>
  domReady()
    .then(() => initClient(options))
    .then() // report or set init success
    .catch(console.error)

export default createClient
