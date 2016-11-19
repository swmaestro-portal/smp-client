/* */
import Immutable from 'immutable'

/* */
import User from './UserModel'

class UsersModel {

  constructor() {
    console.warn('DO NOT instantiate UsersModel')
  }

  static setInstance(users = null) {
    if (users == null) {
      return Immutable.List()
    }

    return Immutable.List(
      users.map(elem => { return new User(elem) })
    )
  }

  static updateInstance(_users, users) {
    users.map((user) => {
      if (_users.filter((_user) => _user.get('userId') == user.userId).size == 0) {
        // Append if not exists
        _users = _users.push(new User(user))
      } else {
        // Update if exists
        _users = _users.map((_user) => {
          return _user.userId == user.userId ?
            new User(user)  
            : _user
        })
      }
    })

    return _users
  }

}

export default UsersModel
