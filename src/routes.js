/* Route */
import ReactDom from 'react-dom'
import React from 'react'
import App from './container/App'
import Signin from './container/Signin'
import Signup from './container/Signup'
import Task from './container/Task'
import MyPage from './container/MyPage'
import { Router, Route, Link, browserHistory } from 'react-router'

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="signup" component={Signup}/>
      <Route path="signin" component={Signin}/>
      <Route path="/tasks" component={Task}/>
      <Route path="/myPage" component={MyPage}/>
    </Route>
  </Router>
)
