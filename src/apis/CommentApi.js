import * as API from './lib.js'

export default {
  requestPostComment: (arg) => {
    return API.post(`${arg.articleType}/${arg.articleId}/comments`, arg.data)
  }
}
