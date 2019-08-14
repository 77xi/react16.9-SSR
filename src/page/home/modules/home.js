const MY_ACTIONS = Symbol()

const text = "i am home page"

export const loadHomeData = () => {
  
}

const reducer = (state = {}, action) => {
  switch (action.type) {
    case MY_ACTIONS: {
      return {
        ...state,
        home: text
      }
    }

    default: {
      return state
    }
  }
}

export default reducer
