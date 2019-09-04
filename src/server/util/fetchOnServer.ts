import { Store } from "redux"
import { MatchedRoute } from "react-router-config"

interface Param {
  /* eslint-disable @typescript-eslint/no-explicit-any */
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

  if (typeof fetchData !== "function") {
    return
  }

  const result = fetchData({ dispatch, getState })

  if (typeof result === "function") {
    return result({ dispatch, getState })
  }
}

export default fetchOnServer
