import * as API from './lib.js'

export default {
  requestGetNotifications: () => {
    return API.get(`notifications/me`)
  },

  requestReadNotification: (id) => {
    return API.put(`notifications/${id}`)
  },
}
