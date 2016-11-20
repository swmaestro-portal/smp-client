import { userActions } from '../actions'

export default {
  authCheck: (nextState, replace, callback, store) => {
    console.log('auth')
      store.dispatch(userActions.signin({username: 'aaa@aa.com', password:'aaaa'}))
    if (!window.localStorage.hasOwnProperty('smp-token')) {
      // Login if not logged in

      console.log('AuthCheck:', 'not logged in')
        .then(res => {
          console.log(1)
          // replace('/')
          callback()
        })
        .catch(res => {
          console.log(2)
          replace('/signin')
          callback()
        })
    } else {
      console.log(3)
      // replace('/')
      callback()
    }
  }
}
