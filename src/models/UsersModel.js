/* */
import Immutable from 'immutable'

/* */
import User from './UserModel'

class UsersModel {
  constructor() {
    console.warn('DO NOT instantiate UsersModel')
  }

  static setInstance(users=null) {
    if (users == null) {
      return Immutable.List()
    }

    return Immutable.List(
      users.map(elem => { return User.setInstance(elem) })
    )
  }

  static updateInstance(users, newUsers) {
    newUsers.map((user) => {
      if (users.filter((existsUser) => { return existsUser.get('userId') == user.userId }).size == 0) {
        // Append if not exists
        users = users.push(new User(user))
        return
      }

      // Update if exists
      users = users.map((existsUser) => {
        return existsUser.userId == user.userId ? User.updateINstance(existsUser, user) : existsUser
      })
    })

    return users
  }

}

export default UsersModel
