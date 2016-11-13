import * as API from './lib.js'

export default {
  requestGetLectures: function() {
    return API.get(`lectures`)
  }
}
