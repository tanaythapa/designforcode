import { types } from './actions'

const initialState = {
  user: {
    id: '',
    username: '',
    email: ''
  },
  token: '',
  isAuthenticated: false,
  error: ''
}

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case types.AUTH_SET_USER:
      localStorage.setItem('user_token', action.token)
      return {
        ...state,
        user: action.user,
        token: action.token,
        isAuthenticated: true,
      }
    case types.AUTH_USER_ERROR:
      return {
        ...state,
        error: action.err
      }
    case types.AUTH_LOGOUT:
      localStorage.removeItem('user_token')
      return {
        ...initialState
      }
    default: return state
  }
}
