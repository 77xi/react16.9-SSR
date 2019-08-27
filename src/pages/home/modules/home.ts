import axios from "axios"
import { AnyAction, Dispatch } from "redux"

const MY_ACTIONS_SUCCESS = Symbol()

export const loadHomeData = () => async (dispatch: Dispatch) => {
  const res = await axios.get(
    "https://www.zhihu.com/api/v4/members/qi-xi-hui-shuo-hua/activities"
  )
  if (res.status === 200) {
    return dispatch({
      type: MY_ACTIONS_SUCCESS,
      payload: res.data
    })
  }
}

const reducer = (state = {}, action: AnyAction) => {
  switch (action.type) {
    case MY_ACTIONS_SUCCESS: {
      return {
        ...state,
        ...action.payload
      }
    }

    default: {
      return state
    }
  }
}

export default reducer
