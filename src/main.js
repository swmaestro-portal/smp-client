/* Route */
import ReactDom from 'react-dom'
import React from 'react'
import routes from './routes'

/* global import */
require('es6-promise').polyfill();

/* CSS */
require('normalize.css')
require('./style/global.css')

ReactDom.render(routes, document.getElementById('main'))
