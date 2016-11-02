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
require('./style/global.scss')






render(
  <Provider store={store()}>
    {routes}
  </Provider>,
  document.getElementById('main')
)

                
