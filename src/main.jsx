/* Route */
import ReactDom from 'react-dom'
import React from 'react'
import App from './component/App'

/* CSS */
require('normalize.css')
require('./style/global.css')

ReactDom.render(<App/>, document.getElementById('main'))
