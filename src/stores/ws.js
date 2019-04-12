import { action, observable, computed } from 'mobx'
import io from 'socket.io-client'

import { WS_CONFIG } from 'config'

class WSStore {
  @observable
  _socket = undefined

  @observable
  _room = undefined

  @computed
  get socket() {
    return this._socket
  }

  @action
  setSocket = ws => {
    this._socket = ws
  }

  subscribe = () => {
    console.log('Trying to reach the socket ... ')
    const ws = io(`ws://${WS_CONFIG.url}:${WS_CONFIG.port}`)
    ws.on('connect', () => {
      console.log('connected')
      this.setSocket(ws)
    })
  }

  joinRoom = data => {
    console.log('Trying to reach the room')
    setTimeout(() => {
      this._socket.emit('joinRoom', data)
    }, 1500)
  }

  cardClick = data => {
    console.log('client Click', data)
    this._socket.emit('clickCard', data)
  }
}

export default new WSStore()
