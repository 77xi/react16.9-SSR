import React from "react"
import { hydrate } from "react-dom"
import { BrowserRouter } from "react-router-dom"

import { createStore, applyMiddleware, combineReducers } from "redux"
import { Provider } from "react-redux"
import { composeWithDevTools } from "redux-devtools-extension"

import App from "~/App"
import rootReducers from "~/redux/reducers"

const render = async ({ initalState, spanName, modules }, next) => {
  const reducers = combineReducers({
    ...rootReducers,
    ...(modules && {
      [spanName]: modules
    })
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

export default render
