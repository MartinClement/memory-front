// @flow

import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Login from 'components/Login'
import 'styles/Login/login.css'

import Welcome from 'components/Welcome'
import 'styles/Welcome/welcome.css'

import Room from 'components/Room'

const NoMatch = () => (
  <h1 style={{ color: white, fontSize: 14, fontFamily: 'Arial, Helvetica, sans-serif' }}>
    404 Not Found
  </h1>
)

class Routes extends React.Component<Props> {
  render() {
    const { history } = this.props

    return (
      <Switch>
        <Route exact path="/" render={() => <Login />} />
        <Route path="/welcome" render={() => <Welcome />} />
        <Route path="/room/:roomId" render={p => <Room {...p} />} />
        <Route render={() => <NoMatch />} />
      </Switch>
    )
  }
}

export default Routes
