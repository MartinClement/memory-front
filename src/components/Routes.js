// @flow

import React from 'react'
import { Route } from 'react-router-dom'
import { Switch, Redirect } from 'react-router'
import { inject, observer } from 'mobx-react'

import Login from 'components/Login'
import 'styles/Login/login.css'

import Welcome from 'components/Welcome'
import 'styles/Welcome/welcome.css'

import Room from 'components/Room'

const NoMatch = () => (
  <h1 style={{ color: 'white', fontSize: 14, fontFamily: 'Arial, Helvetica, sans-serif' }}>
    404 Not Found
  </h1>
)

@inject('user')
@observer
class Routes extends React.Component<Props> {
  render() {
    const {
      user: { uId },
    } = this.props

    console.log(uId)

    return (
      <Switch>
        <Redirect exact path="/" to="/welcome" />
        <Route path="/login" render={() => <Login />} />
        <Route path="/welcome" render={() => (uId ? <Welcome /> : <Redirect to="/login" />)} />
        <Route
          path="/room/:roomId"
          render={p => (uId ? <Room {...p} /> : <Redirect to="/login" />)}
        />
        <Route render={() => <NoMatch />} />
      </Switch>
    )
  }
}

export default Routes
