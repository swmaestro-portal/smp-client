/* Route */
import ReactDom from 'react-dom'
import React from 'react'
import routes from './routes'

/* CSS */
require('normalize.css')
require('./style/global.css')

ReactDom.render(routes, document.getElementById('main'))
