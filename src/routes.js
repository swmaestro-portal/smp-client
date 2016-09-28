/* Route */
import ReactDom from 'react-dom'
import React from 'react'
import App from './container/App'
import Signin from './container/Signin'
import Signup from './container/Signup'
import Task from './container/Task'
import MyPage from './container/MyPage'
import Power from './component/Power'
import Power2 from './component/Power2'
import { Router, Route, Link, browserHistory } from 'react-router'

export default (
  <Router history={browserHistory}>
    <Route path="signup" component={Signup}/>
    <Route path="signin" component={Signin}/>
    <Route path="/" component={App}>
      <Route path="/" component={Power}>
        <Route path="lecture" component={Power2}/>
        <Route path="/members" component={Task}/>
        <Route path="/myPage" component={MyPage}/>
      </Route>
    </Route>

  </Router>
)


