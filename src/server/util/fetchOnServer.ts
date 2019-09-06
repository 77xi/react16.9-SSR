import { Store } from "redux"
import { MatchedRoute } from "react-router-config"

interface Param {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  branch: MatchedRoute<any>[]
  store: Store
}

const fetchOnServer = async ({ branch, store }: Param) => {
  const promise = branch.map(({ route, match }) => {
    const { params } = match
    const {
      component: { fetchData }
    } = route

    if (typeof fetchData !== "function") return

    const result = fetchData({
      params,
      dispatch: store.dispatch,
      getState: store.getState
    })

    if (typeof result === "function") {
      return result(store.dispatch, store.getState)
    }
  })

  return Promise.all(promise.filter(Boolean))
}

export default fetchOnServer
