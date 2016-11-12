/**/
import React from 'react'
import { Router, Route, Link, browserHistory, useRouterHistory, hashHistory, IndexRoute, IndexRedirect } from 'react-router'
import { createHashHistory } from 'history'

/**/
import App from './components/App'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Home from './components/Home'
import MainFrame from './components/MainFrame'
import Lectures$ from './components/Lectures'

/************************************************************
 * Redux
 ************************************************************/
import store from './redux'
import { Provider } from 'react-redux'


function authCheck(nextState, replace) {
  console.log('auth')
  if (!window.sessionStorage.hasOwnProperty('smp-token')) {
    replace('/signin')
  }
}

// const appHistory = useRouterHistory(createHashHistory)()

const Temp = ({ power }) => (
  <div className="Sidebar">
    {power}
  </div>
)

export default (
  <Provider store={store()}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route component={({a,b})=>(<div>{a}</div>)}>
          <IndexRoute component={Home}/>
          <Route path="/lectures" components={{a: Lectures$, b: Signin}}/>

        </Route>
      </Route>

    </Router>
  </Provider>
)




// <Route path="lectures/:id" component={null}/>
//
//   <Route path="assignments" component={null}/>
//   <Route path="assignments/:id" component={null}/>
