import { HomeState, actions, MESSAGES_DATA_ACTIONS_SUCCESS } from "./types"

const initialState: HomeState = {
  messages: []
}

const reducers = (state = initialState, action: actions): HomeState => {
  switch (action.type) {
    case MESSAGES_DATA_ACTIONS_SUCCESS: {
      return {
        ...state,
        messages: action.payload
      }
    }

    default: {
      return state
    }
  }
}

export default reducers
