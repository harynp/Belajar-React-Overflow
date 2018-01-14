const initialState = {
  user : []
}

const registerReducers = (state=initialState, action) => {
  switch (action.type) {
    case 'REGISTER':
      return {...state, user : action.payload}
  default:
    return state
  }
}

export default registerReducers
