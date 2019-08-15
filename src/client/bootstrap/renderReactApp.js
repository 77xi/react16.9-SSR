import React from "react"
import { hydrate } from "react-dom"
import { BrowserRouter } from "react-router-dom"

import { Provider } from "react-redux"

import App from "~/App"

const render = async ({ initalState, spanName, store,  modules }, next) => 
  hydrate(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
    document.getElementById("app")
  )

export default render
