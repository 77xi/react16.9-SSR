import "~/client/polyfill.client"

import * as React from "react"
import { RouteComponentProps } from "react-router-dom"
import { Reducer } from "redux"

import domReady from "~/libs/domReady"
import bootstrap from "~/client/bootstrap"

interface CustomRoute {
  exact: boolean
  path: string
  name: string
  component: React.ComponentType
}

interface Params {
  routes?: RouteComponentProps[] | CustomRoute[]
  modules?: Reducer
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
    .then(() => {
      // report or set init success
    })
    .catch(err => {
      console.error(`init err`, err)
      // report error
    })

export default createClient
