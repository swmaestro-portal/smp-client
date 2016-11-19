export default {
  authCheck: (nextState, replace) => {
    console.log('auth')
    if (!window.sessionStorage.hasOwnProperty('smp-token')) {
      console.log('not logged in')
      replace('/signin')
    }
  }
}
