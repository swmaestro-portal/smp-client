/**/
import React from 'react'
import { render } from 'react-dom'

/**/
import routes from './routes'


/************************************************************
 * Redux
 ************************************************************/
import store from './redux'
import { Provider } from 'react-redux'


/************************************************************
 * Global style
 ************************************************************/
require('./styles/normalize.css')
require('./styles/global.scss')
require('./styles/font-awesome.css')



render(
  <Provider store={store()}>
    {routes}
  </Provider>,
  document.getElementById('main')
)

                
