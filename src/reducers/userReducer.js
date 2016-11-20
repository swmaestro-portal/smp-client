import AT from '../actions/ActionTypes'
import { browserHistory } from 'react-router'
import User from '../models/UserModel'

export default function _user(state = {}, action) {
  // console.log('_user', state, action)

  switch (action.type) {

    case AT.SIGNIN:
      return state

    case AT.GET_USER:
      return {
        ...state,
        user: new User(action.payload)
      }

    default:
      return state
  }
}
