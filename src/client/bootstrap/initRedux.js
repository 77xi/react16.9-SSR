import { createStore, applyMiddleware, combineReducers } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import rootReducers from "~/redux/reducers"

const initRedux = async (context, next) => {
  const { modules, spanName, initalState } = context
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

  context.store = store

  next()
}

export default initRedux
