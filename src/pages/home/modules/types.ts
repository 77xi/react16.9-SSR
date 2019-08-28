export const MESSAGES_DATA_ACTIONS_SUCCESS = Symbol(
  "MESSAGES_DATA_ACTIONS_SUCCESS"
)

export interface Text {
  text: string
}

export interface HomeState {
  messages: Text[]
}

export interface MessageDataAction {
  type: typeof MESSAGES_DATA_ACTIONS_SUCCESS
  payload: Text[]
}

export type actions = MessageDataAction
