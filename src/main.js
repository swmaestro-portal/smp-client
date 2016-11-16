/**/
import React from 'react'
import ReactDom from 'react-dom'

/**/
import routes from './routes'


/************************************************************
 * Polyfills
 ************************************************************/
require('es6-promise').polyfill();
require('whatwg-fetch')

/************************************************************
 * Global style
 ************************************************************/
require('./styles/normalize.css')
require('./styles/reset.scss')
require('./styles/global.scss')
require('./styles/font-awesome.css')

ReactDom.render(
  routes,
  window.document.getElementById('main')
)

                
