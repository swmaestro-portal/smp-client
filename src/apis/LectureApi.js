import * as API from './lib.js'

export default {
  requestGetLectures: function() {
    return API.get(`lectures`)
  },

  requestGetLecture: function(id) {
    return API.get(`lectures/` + id)
  },
  
  requestGetComments: (id) => {
    return API.get(`lectures/${id}/comments`)
  },
  
  requestPostAttachment: (args) => {
    return API.postFile(`attachments`, args)
  },
  
  requestPostLecture: (args) => {
    return API.post(`lectures`, args)
  }
}
