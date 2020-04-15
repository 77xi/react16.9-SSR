// import { Action } from "redux"
// import { ThunkAction } from "redux-thunk"

// import { MESSAGES_ACTIONS_SUCCESS, Text, HomeState } from "./types"

// https://redux.js.org/recipes/usage-with-typescript#usage-with-redux-thunk
// export const loadMessage = (): ThunkAction<
//   void,
//   HomeState,
//   null,
//   Action<symbol>
// > => async dispatch => {
//   const messages: Text[] = await new Promise(resolve => {
//     setTimeout(() => resolve([{ text: "home ~~~~~~" }]))
//   })

//   return dispatch({
//     type: MESSAGES_ACTIONS_SUCCESS,
//     payload: messages
//   })
// }
