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
require('./style/normalize.css')
require('./style/global.scss')
require('./style/font-awesome.css')



render(
  <Provider store={store()}>
    {routes}
  </Provider>,
  document.getElementById('main')
)

                
