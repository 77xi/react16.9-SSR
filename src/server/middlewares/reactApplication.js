import "~/server/polyfill.server"

import fs from "fs"

import React from "react"
import { renderToString } from "react-dom/server"
import { StaticRouter, matchPath } from "react-router-dom"

import { createStore, combineReducers } from "redux"
import { Provider } from "react-redux"

import serialize from "serialize-javascript"

import App from "~/App"
import paths from "~/../webpack/paths"
import routes from "~/routes"
import rootReducers from "~/redux/reducers"

import getPageModules from "~/libs/getPageModules"

export default async ctx => {
  const { url, path } = ctx
  const currentRoute = routes.find(route => matchPath(path, route))
  const { name: spanName } = currentRoute

  if (!currentRoute) {
    ctx.status = 404
    return
  }

  const spanModules = getPageModules(spanName)

  const store = createStore(
    combineReducers({
      ...rootReducers,
      spanModules
    })
  )

  const assetsMapStr = fs.readFileSync(
    paths.resolveRoot("dist", "client", "manifest.json"),
    "utf-8"
  )
  const cssRegExp = /\.css$/
  const jsRegExp = /\.js$/
  const assetsValues = Object.values(JSON.parse(assetsMapStr))
  const styles = assetsValues.filter(
    assetsPath =>
      cssRegExp.test(assetsPath) && assetsPath.startsWith(`client/${spanName}.`)
  )
  const scripts = assetsValues.filter(
    assetsPath =>
      jsRegExp.test(assetsPath) && assetsPath.startsWith(`client/${spanName}.`)
  )

  const stylesStr = styles
    .map(style => `<link href=${style} rel="stylesheet"></link>`)
    .join("")
  const scriptsStr = scripts
    .map(js => `<script src=${js} async></script>`)
    .join("")

  const markup = renderToString(
    <StaticRouter location={url}>
      <Provider store={store}>
        <App />
      </Provider>
    </StaticRouter>
  )

  const initalState = store.getState()
  const stateScriptStr = `<script id="js-initalData" type="text/json">${serialize(
    {
      spanName,
      initalState
    }
  )}</script>`

  ctx.body = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>React SSR with Koa</title>
        ${stylesStr}
      </head>
      <body>
        <div id="app">${markup}</div>
        ${stateScriptStr}
        ${scriptsStr}
      </body>
    </html>
  `
}
