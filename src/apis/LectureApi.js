import * as API from './lib.js'

/**
 *
 */
export function getLectures() {
  return API.get(`lectures`)
}
