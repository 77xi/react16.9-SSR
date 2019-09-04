import { Dispatch } from "redux"

import { MESSAGES_ACTIONS_SUCCESS, Text, MessageAction } from "./types"

export const loadMessageData = () => async (
  dispatch: Dispatch
): Promise<MessageAction> => {
  const messages: Text[] = await new Promise(resolve => {
    setTimeout(() => resolve([{ text: "home ~~~~~~" }]))
  })

  return dispatch({
    type: MESSAGES_ACTIONS_SUCCESS,
    payload: messages
  })
}
