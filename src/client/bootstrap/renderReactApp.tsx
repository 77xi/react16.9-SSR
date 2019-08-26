import * as React from "react"
import { hydrate } from "react-dom"
import {
  BrowserRouter,
  Route,
  Switch,
  RouteComponentProps
} from "react-router-dom"

import * as redux from "redux"
import { Provider } from "react-redux"

import App from "~/App"

interface Params {
  store: redux.Store
  routes: RouteComponentProps[]
}

const render = async ({ store, routes }: Params, next: Function) => {
  hydrate(
    <BrowserRouter>
      <Provider store={store}>
        <App>
          <Switch>
            {routes.map((props: RouteComponentProps, index: number) => (
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
