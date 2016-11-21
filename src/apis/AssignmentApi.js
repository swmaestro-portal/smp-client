import * as API from './lib.js'

export default {
  requestGetAssignments: function() {
    return API.get(`assignments`)
  },

  requestGetAssignment: function(id) {
    return API.get(`assignments/` + id)
  },

  requestGetComments: (id) => {
    return API.get(`assignments/${id}/comments`)
  }
}
