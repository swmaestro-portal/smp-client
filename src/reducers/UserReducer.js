import ActionTypes from '../actions/ActionTypes'
import { browserHistory } from 'react-router'

export default function _user(state = {}, action) {
  console.log('_user', state, action)

  switch (action.type) {

    case ActionTypes.SIGNIN_REQUEST:
      return {
        ...state,
      }

    case ActionTypes.SIGNIN_SUCCESS:
      window.sessionStorage.setItem('smp-token', action.result.token)
      browserHistory.push('/home') // redirect after success

      return {
        ...state,
      }

    case ActionTypes.SIGNIN_FAILURE:
      return {
        ...state,
      }

    default:
      return state
  }
}
