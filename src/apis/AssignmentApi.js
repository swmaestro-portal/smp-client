import * as API from './lib.js'

export default {
  requestGetAssignments: function() {
    return API.get(`assignments`)
  }
}
