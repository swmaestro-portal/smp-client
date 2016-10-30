/**/
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

/**/
import reduxInit from './redux'
import routes from './routes'
const store = reduxInit()

render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('main')
)

                
