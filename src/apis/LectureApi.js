import * as API from './index.js'

/**
 *
 */
export function getLectures() {
  return API.get(`lectures`)
}
