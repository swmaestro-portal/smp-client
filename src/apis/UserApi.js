import * as API from './index.js'

export function signin(username, password) {
  return API.get(`auth/token?email=${username}&password=${password}`)
}
