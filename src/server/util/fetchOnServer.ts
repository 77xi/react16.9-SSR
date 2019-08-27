import { Store } from "redux"
import { MatchedRoute } from "react-router-config"

interface Param {
  // ????
  branch: MatchedRoute<any>[]
  store: Store
}

const fetchOnServer = async ({ branch, store }: Param) => {
  const [
    {
      route: {
        component: { fetchData }
      }
    }
  ] = branch

  const { dispatch, getState } = store

  if (typeof fetchData === "function") {
    return fetchData({ dispatch, getState })
  }
}

export default fetchOnServer
