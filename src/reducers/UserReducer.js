import AT from '../actions/ActionTypes'
import { browserHistory } from 'react-router'

export default function _user(state = {}, action) {
  console.log('_user', state, action)

  switch (action.type) {

    case AT.SIGNIN:
      console.log(2, action)
      window.sessionStorage.setItem('smp-token', action.payload.token)
      browserHistory.push('/')
      return state

    default:
      return state
  }
}
