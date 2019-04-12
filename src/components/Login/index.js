// @flow

import React from 'react'
import { inject, observer } from 'mobx-react'
import { Redirect } from 'react-router-dom'

@inject('user', 'ws')
@observer
class Login extends React.Component {
  state = {
    value: '',
    loading: false,
  }

  handleChange = (e: Object) => {
    this.setState({ value: e.target.value.trim() })
  }

  handleSubmit = () => {
    const { value } = this.state
    const {
      user: { login },
      ws: { subscribe },
    } = this.props

    if (value !== '') {
      this.setState({ loading: true })
      login(value)
      subscribe()
    }
  }

  render() {
    const { value, loading } = this.state
    const {
      user: { uId },
      ws: { socket },
    } = this.props

    return (
      <div className="login-container">
        {uId && socket && <Redirect to="/welcome" />}
        {loading ? (
          <div className="login-loader" />
        ) : (
          <>
            <input
              name="name"
              className="login-input"
              onChange={e => this.handleChange(e)}
              placeholder="Name ..."
              value={value}
            />
            <button className="login-button" onClick={this.handleSubmit}>
              Go !
            </button>
          </>
        )}
      </div>
    )
  }
}

export default Login
