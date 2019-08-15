import React from "react"
import { hydrate } from "react-dom"
import { BrowserRouter } from "react-router-dom"

import { Provider } from "react-redux"

import App from "~/App"

const render = async ({ store }, next) => {
  hydrate(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
    document.getElementById("app")
  )

  next()
}

export default render