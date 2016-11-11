import * as UserAPI from '../apis/userApi'
import createType from './ActionTypeGenerator'

export function signin(user) {

  console.log(1, user)
  return {
    types: createType('SIGNIN'),
    promise: () => {

      return UserAPI.signin(user.username, user.password)
    }
  }
}
