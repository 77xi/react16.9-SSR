import React from "react"
import { hydrate } from "react-dom"
import { BrowserRouter } from "react-router-dom"

import App from "~/App"

const createClient = () =>
  hydrate(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById("app")
  )

export default createClient
