/* Polyfill */
require('es6-promise').polyfill()
require('babel-polyfill')

/* Route */
import ReactDom from 'react-dom'
import App from './component/App'

ReactDom.render(App, document.getElementById('main'))