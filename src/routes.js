/**/
import React from 'react'
import { Router, Route, Link, browserHistory, useRouterHistory, hashHistory, IndexRoute, IndexRedirect } from 'react-router'
import { createHashHistory } from 'history'

/**/
import App from './components/App'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Home from './components/Home'

/************************************************************
 * Redux
 ************************************************************/
import store from './redux'
import { Provider } from 'react-redux'


function authCheck(nextState, replace) {
  console.log('auth')
  if (!window.sessionStorage.hasOwnProperty('smp-token')) {
    // replace('/signin')
  } else {
    // replace('/home')
  }
}

function temp(nextState, replace) {
  console.log('t')
}


const appHistory = useRouterHistory(createHashHistory)({ queryKey: true })


export default (
  <Provider store={store()}>
    <Router history={appHistory}>
      <Route path="/" component={App} onEnter={temp}>
        <IndexRoute onEnter={authCheck} />
        <Route path="signin" component={Signin} />
        <Route path="signup" component={Signup} />
        <Route path="home" component={Home}/>
        <Route path="lectures" component={Home}/>
        <Route path="lectures/:id" component={Home}/>
      </Route>
    </Router>
  </Provider>
)



// <Router history={appHistory}>
//   <Route path="/" component={App}>
//   <Route path="signup" component={Signup}/>
//   <Route path="signin" component={Signin}/>
//   <Route path="home" component={Home} onEnter={authCheck}/>
//   <Route path="lectures" component={Home} onEnter={authCheck}>
//   <Route path="lectures/:id" component={Home}/>
//   </Route>
//
//   <Route path="*" component={Home} onEnter={authCheck}/>
//
//   </Route>
//   </Router>
//
