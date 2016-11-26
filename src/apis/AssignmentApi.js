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
  },

  requestPostAttachment: (args) => {
      return API.postFile(`attachments`, args)
  },

  requestPostAssignment: (args) => {
      return API.post(`assignments`, args)
  }
}
