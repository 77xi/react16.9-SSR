import "~/server/polyfill.server"

import fs from "fs"

import React from "react"
import { renderToString, renderToStaticMarkup } from "react-dom/server"
import { StaticRouter } from "react-router-dom"
import { matchRoutes } from "react-router-config"

import { createStore, combineReducers } from "redux"
import { Provider } from "react-redux"

import App from "~/App"
import routes from "~/routes"
import rootReducers from "~/redux/reducers"
import paths from "~/../webpack/paths"
import getPageModules from "~/libs/getPageModules"
import Html from "~/server/middlewares/reactApplication/Html"

export default async ctx => {
  const { url, path } = ctx
  const branch = matchRoutes(routes, path)

  if (!branch.length) {
    ctx.status = 404
    return
  }

  const [
    {
      route: { name: spanName }
    }
  ] = branch

  const assetsMapStr = fs.readFileSync(
    paths.resolveRoot("dist", "client", "manifest.json"),
    "utf-8"
  )

  const spanModules = getPageModules(spanName)

  const store = createStore(
    combineReducers({
      ...rootReducers,
      spanModules
    })
  )

  const markup = renderToString(
    <StaticRouter location={url}>
      <Provider store={store}>
        <App />
      </Provider>
    </StaticRouter>
  )

  ctx.body =
    `<!DOCTYPE html> \n` +
    renderToStaticMarkup(
      <Html
        spanName={spanName}
        markup={markup}
        assetsMapStr={assetsMapStr}
        initalState={store.getState()}
      />
    )
}
