import {get, post} from '../apis'
import ATG from './ActionTypeGenerator'

export function signin(user) {
  return {
    types: ATG('SIGNIN'),
    promise: () => {
      
      
      return get()
      return fetch(`http://172.16.101.199:8888/auth/token?email=${user.username}&password=${user.password}`, {
        method: 'GET'
      })
    }
  }
}
