/* */
import Immutable from 'immutable'

class UserModel {

  constructor() {
    console.warn('DO NOT instantiate UserModel')
  }

  static setInstance(user=null) {
    if (user == null) {
      return Immutable.Map()
    }

    return Immutable.fromJS(user)
  }

  static updateInstance(user, newUser) {
    for (var key in newUser) {
      user = user.set(key, newUser['key'])
    }

    return user
  }

}

export default UserModel
