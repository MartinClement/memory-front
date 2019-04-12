import { observable, action, computed } from 'mobx'
import uniqid from 'uniqid'

class UserStore {
  @observable
  _name = undefined

  @observable
  _uId = undefined

  @computed
  get name() {
    return this._name
  }

  @computed
  get uId() {
    return this._uId
  }

  @action
  setName = n => {
    this._name = n
  }

  @action
  setUId = () => {
    setTimeout(() => {
      this._uId = uniqid()
    }, 1500)
  }

  login = (name: string) => {
    this.setName(name)
    this.setUId()
  }
}

const userStore = new UserStore()
export default userStore
