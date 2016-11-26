/* */
import Immutable from 'immutable'

class UserModel {

  constructor(user) {
    return Immutable.fromJS(user)
  }
  
}

export default UserModel
