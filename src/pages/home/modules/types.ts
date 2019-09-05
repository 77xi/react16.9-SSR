export const MESSAGES_ACTIONS_SUCCESS = Symbol("MESSAGES_ACTIONS_SUCCESS")

export interface Text {
  text: string
}

export interface HomeState {
  messages: Text[]
}

export interface MessageAction {
  type: typeof MESSAGES_ACTIONS_SUCCESS
  payload: Text[]
}

export type actions = MessageAction
