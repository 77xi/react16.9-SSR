import React from "react"
import { hydrate } from "react-dom"
import { BrowserRouter } from "react-router-dom"

import { createStore, applyMiddleware, combineReducers } from "redux"
import { Provider } from "react-redux"
import { composeWithDevTools } from "redux-devtools-extension"

import App from "~/App"
import rootReducers from "~/redux/reducers"

const createClient = ({ modules }) => {
  const { initalState, spanName } = JSON.parse(
    document.getElementById("js-initalData").textContent
  )

  const reducers = combineReducers({
    ...rootReducers,
    [spanName]: modules
  })

  const store = createStore(
    reducers,
    initalState,
    composeWithDevTools(applyMiddleware())
  )

  hydrate(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
    document.getElementById("app")
  )
}

export default createClient
