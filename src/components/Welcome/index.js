import React from 'react'
import { inject, observer } from 'mobx-react'
import { Link } from 'react-router-dom'

@inject('user')
@observer
class Welcome extends React.Component {
  render() {
    const { user } = this.props

    return (
      <div className="welcome-container">
        <div className="welcome-avatar">
          <img src={`https://robohash.org/${user.name}${user.uId}`} />
        </div>
        <div className="welcome-name">{user.name}</div>
        <Link className="welcome-room-link" to={`/room/${user.uId}`}>
          {'< Create Room >'}
        </Link>
      </div>
    )
  }
}

export default Welcome
