/**/
import * as API from './lib.js'

export default {
  requestGetAll: function(query) {
    return API.get(`search/all?q=` + query)
  },
  requestGetUser: function(query) {
    return API.get(`search/users?q=` + query)
  }
}
