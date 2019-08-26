import "~/server/polyfill.server"

import * as fs from "fs"
import * as Koa from "koa"
import * as React from "react"
import { renderToString, renderToStaticMarkup } from "react-dom/server"
import { StaticRouter, Route, Switch } from "react-router-dom"
import { matchRoutes } from "react-router-config"

import { createStore, combineReducers } from "redux"
import { Provider } from "react-redux"

import App from "~/App"
import routes from "~/routes"
import rootReducers from "~/redux/reducers"
import paths from "~/../webpack/paths"
import getPageModules from "~/libs/getPageModules"
import Html from "~/server/middlewares/reactApplication/Html"

export default async (ctx: Koa.BaseContext) => {
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

  const manifest = fs.readFileSync(
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
        <App>
          <Switch>
            {routes.map((props, index) => (
              <Route {...props} key={index} />
            ))}
          </Switch>
        </App>
      </Provider>
    </StaticRouter>
  )

  ctx.body =
    `<!DOCTYPE html> \n` +
    renderToStaticMarkup(
      <Html
        spanName={spanName}
        markup={markup}
        manifest={manifest}
        initalState={store.getState()}
      />
    )
}
