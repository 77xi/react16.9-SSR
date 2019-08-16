import React from "react"
import { hydrate } from "react-dom"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import { Provider } from "react-redux"

import App from "~/App"

const render = async ({ store, routes }, next) => {
  hydrate(
    <BrowserRouter>
      <Provider store={store}>
        <App>
          <Switch>
            {routes.map((props, index) => (
              <Route {...props} key={index} />
            ))}
          </Switch>
        </App>
      </Provider>
    </BrowserRouter>,
    document.getElementById("app")
  )

  next()
}

export default render
