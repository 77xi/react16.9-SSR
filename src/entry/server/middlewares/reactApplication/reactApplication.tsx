import fs from "fs"
import { BaseContext } from "koa"

import React from "react"
import { renderToString, renderToStaticMarkup } from "react-dom/server"
import { StaticRouter, Route, Switch } from "react-router-dom"
import { matchRoutes } from "react-router-config"

import { createStore, combineReducers, applyMiddleware, Store } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"

import App from "~/App"

import rootReducers from "~/redux/reducers"
import resolveRoot from "~/libs/resolveRoot"
import Html from "~/entry/server/middlewares/reactApplication/Html"
import fetchOnServer from "~/entry/server/util/fetchOnServer"

export default function reactApplication({ routes, modules }) {
  return async (ctx: BaseContext) => {
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
      resolveRoot("dist", "client", "manifest.json"),
      "utf-8"
    )

    const store: Store = createStore(
      combineReducers({
        ...rootReducers,
        ...modules
      }),
      applyMiddleware(thunk)
    )

    await fetchOnServer({ branch, store })

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
}
