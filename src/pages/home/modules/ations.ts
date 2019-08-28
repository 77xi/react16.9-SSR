import { Action } from "redux"
import { ThunkAction } from "redux-thunk"

import { MESSAGES_DATA_ACTIONS_SUCCESS, Text } from "./types"

export const loadMessageData = (): ThunkAction<
  void,
  null,
  null,
  Action<symbol>
> => async dispatch => {
  const messages: Text[] = await new Promise(resolve => {
    setTimeout(() => resolve([{ text: "home ~~~~~~" }]))
  })

  return dispatch({
    type: MESSAGES_DATA_ACTIONS_SUCCESS,
    payload: messages
  })
}
