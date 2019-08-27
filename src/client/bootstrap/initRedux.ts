import { RouteComponentProps } from "react-router-dom"
import { Store, Reducer } from "redux"

import { createStore, applyMiddleware, combineReducers } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"

import rootReducers from "~/redux/reducers"

interface Params {
  routes?: RouteComponentProps[]
  modules?: Reducer
  initalState?: object
  spanName?: string
  store?: Store
}

const initRedux = async (context: Params, next: Function) => {
  const { modules, initalState } = context

  const reducers = combineReducers({
    ...rootReducers,
    ...(modules && modules)
  })

  const store = createStore(
    reducers,
    initalState,
    composeWithDevTools(applyMiddleware(thunk))
  )

  context.store = store

  next()
}

export default initRedux
