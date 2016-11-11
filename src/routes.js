/**/
import React from 'react'
import { Router, Route, Link, browserHistory, IndexRoute, IndexRedirect } from 'react-router'

/**/
import App from './components/App/App'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Home from './components/Home'

function authCheck(nextState, replaceState) {
  if (!window.sessionStorage.hasOwnProperty('smp-token')) {
    replaceState({
      pathname: '/signin',     
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

export default (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRedirect to='/home'/>
        <Route path="signup" component={Signup}/>
        <Route path="signin" component={Signin}/>
        <Route path="home" component={Home} onEnter={authCheck}>

        </Route>
      </Route>
    </Router>

)


