/**/
import React from 'react'
import { Router, Route, Link, browserHistory, useRouterHistory, hashHistory, IndexRoute, IndexRedirect } from 'react-router'
import { createHashHistory } from 'history'

/**/
import App from './components/App'
import Signin from './components/Signin'
import Signup from './components/Signup'
import HomeContainer from './containers/HomeContainer'
import MainFrame from './components/MainFrame'
import Users$ from './containers/UsersContainer'
import User$ from './containers/UserContainer'
import Lectures$ from './containers/LecturesContainer'
import Lecture$ from './containers/LectureContainer'
import Assignments$ from './containers/AssignmentsContainer'
//import Assignment$ from './containers/Assignment$'

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
          <IndexRoute components={{mainPanel: HomeContainer}}/>
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

          <Route
              path="assignments"
              components={{mainPanel: Assignments$}}
          />

        </Route>
      </Route>

    </Router>
  </Provider>
)
