// @flow

import React from 'react'
import { Provider } from 'mobx-react'
// import { BrowserRouter as Router } from 'react-router-dom'
import { HashRouter as Router } from 'react-router-dom'
import Routes from 'components/Routes'

import Login from 'components/Login'
import 'styles/Login/login.css'

import Welcome from 'components/Welcome'
import 'styles/Welcome/welcome.css'

const App = ({ stores, history }: { stores: Object, history: any }) => {
  return (
    <Provider {...stores}>
      <Router>
        <Routes />
      </Router>
    </Provider>
  )
}

export default App
