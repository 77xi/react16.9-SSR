export const MESSAGES_ACTIONS_SUCCESS = "MESSAGES_ACTIONS_SUCCESS"

export interface Text {
  text: string
}

export interface HomeState {
  messages: Text[]
}

export interface MessageAction {
  type: string
  payload: Text[]
}

export type actions = MessageAction
