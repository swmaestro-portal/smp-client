/* Route */
import ReactDom from 'react-dom'
import React from 'react'
import App from './container/App'
import Signin from './container/Signin'
import Signup from './container/Signup'
import LeftBar from './component/LeftBar'
import Home from './component/Home'
// import Task from './container/Task'
// import MyPage from './container/MyPage'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

function authCheck(nextState, replaceState) {
  console.log(3)
  if (true) {
    replaceState('/home')
  }
}

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute onEnter={authCheck}/>
      <Route path="signup" component={Signup}/>
      <Route path="signin" component={Signin}/>
      <Route path="home" component={Home}>

      </Route>
    </Route>
  </Router>
)


