import { userActions } from '../actions'

export default {
  authCheck: (nextState, replace, callback, store) => {
    console.log('auth')
    if (!window.sessionStorage.hasOwnProperty('smp-token')) {
      console.log('not logged in')
      store.dispatch(userActions.signin({username: 'aaa@aa.com', password:'aaaa'}))
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
