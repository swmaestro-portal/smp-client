/**/
import React from 'react'
import { Router, Route, Link, browserHistory, useRouterHistory, hashHistory, IndexRoute, IndexRedirect } from 'react-router'
import { createHashHistory } from 'history'

/**/
import App from './components/App'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Home$ from './containers/Home$'
import MainFrame from './components/MainFrame'
import Users$ from './containers/Users$'
import User$ from './containers/User$'
import Lectures$ from './containers/Lectures$'
import Lecture$ from './containers/Lectures$'
import Leftbar from './components/Leftbar'
import Masthead from './components/Masthead'
import MainPanel from './components/MainPanel'

/************************************************************
 * Redux
 ************************************************************/
import store from './redux'
import { Provider } from 'react-redux'

function authCheck(nextState, replace) {
  console.log('auth')
  if (!window.sessionStorage.hasOwnProperty('smp-token')) {
    console.log('not logged in')
    replace('/signin')
  }
}

// const appHistory = useRouterHistory(createHashHistory)()


export default (
  <Provider store={store()}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="signin" component={Signin}/>
        <Route path="signup" component={Signup}/>
        <Route component={MainFrame} onEnter={authCheck}>
          <IndexRoute components={{mainPanel: Home$}}/>
          <Route
            path="users"
            components={{mainPanel: Users$}}
            />
          <Route
            path="users/:userID"
            components={{mainPanel: User$}}
          />
          <Route
            path="lectures"
            components={{mainPanel: Lectures$}}
            />
          <Route
            path="lectures/:lectureID"
            components={{mainPanel: Lecture$}}
          />

        </Route>
      </Route>

    </Router>
  </Provider>
)
