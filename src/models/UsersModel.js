/* */
import Immutable from 'immutable'

/* */
import User from './UserModel'

let _users = Immutable.List()

class UsersModel {

  constructor() {

  }

  static setInstance(users) {
    _users = Immutable.List()
    users.map((elem) => {
      _users = _users.push(new User(elem))
    })
    return _users
  }

  static getInstance() {
    return _users
  }

}

export default UsersModel
