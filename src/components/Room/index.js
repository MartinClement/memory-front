import React from 'react'
import { inject, observer } from 'mobx-react'
import { withRouter } from 'react-router'
import uniqid from 'uniqid'

import 'styles/Room/room.css'

const Card = ({ x, y, card, onClick }) => {
  const { returned, value } = card

  return (
    <div
      className={`room-game-card ${returned ? 'returned' : ''}`}
      data-x={x}
      data-y={y}
      onClick={onClick ? e => onClick(e) : undefined}
    >
      {card.value}
    </div>
  )
}

@inject('user', 'ws')
@observer
class Room extends React.Component {
  constructor() {
    super()
    console.log('coucou')
  }
  state = {
    connectedToRoom: false,
    game: undefined,
    tries: 0,
  }

  componentDidMount = () => {
    const {
      ws: { joinRoom, socket },
      user: { name, uId },
      match: { params },
    } = this.props

    socket.on('sendGame', game => {
      console.log('game received')
      this.setState({ game })
    })

    const data = {
      roomId: params.roomId,
      name,
      uId,
    }

    joinRoom(data)
  }

  handleGameUpdate = (game: Object) => {
    this.setState({ game })
  }

  handleClick = e => {
    const { attributes } = e.target
    const {
      match: { params },
      ws: { cardClick },
      user: { uId },
    } = this.props

    cardClick({
      x: attributes['data-x'].value,
      y: attributes['data-y'].value,
      uId,
      roomId: params.roomId,
    })
  }

  render() {
    const {
      user: { name, uId },
    } = this.props

    const { game } = this.state

    console.log(game && game.checking)

    return (
      <div className="room-container">
        {!game ? (
          <div className="room-loader" />
        ) : (
          <div className="room-game">
            {game.grid.map((lv, l) => (
              <div className="room-game-line" key={uniqid()}>
                {lv.map((card, c) => (
                  <Card
                    x={l}
                    y={c}
                    card={card}
                    onClick={!game.checking && this.handleClick}
                    key={`${l}${c}`}
                  />
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }
}

export default Room
