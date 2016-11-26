/**/
import * as API from './lib.js'

export default {
  requestPostComment: (arg) => {
    return API.post(`${arg.articleType}/${arg.articleId}/comments`, arg.data)
  },

  requestGetComments: (type, id) => {
    return API.get(`${type}/${id}/comments`)
  },

  requestPutComment: (id, arg) => {
    return API.put(`comments/${id}`, arg)
  }
}
