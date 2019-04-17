import React from 'react'
import ReactDOM from 'react-dom'
import App from 'components/App'
import createHistory from 'history/createBrowserHistory'

import 'styles/reset.css'

import * as stores from 'stores'

ReactDOM.render(<App stores={stores} />, document.getElementById('app'))

module.hot.accept()
