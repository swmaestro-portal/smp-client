import { userActions } from '../actions'

export default {
  authCheck: (nextState, replace, callback, store) => {
    console.log('auth')
    if (!window.localStorage.hasOwnProperty('smp-token')) {
      // Login if not logged in

      console.log('AuthCheck:', 'not logged in')

      replace('/signin')
      callback()
    } else if (store.getState().meReducer.me.isEmpty()) {
      // Get /users/me if meReducer empty

      console.log('AuthCheck:', 'meReducer empty')

      store.dispatch(userActions.getMe())
        .then(res => {
          callback()
        })
        .catch(res => {
          replace('/signin')
          callback()
        })
    } else {
      callback()
    }
  }
}
