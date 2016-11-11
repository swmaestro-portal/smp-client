import * as API from './lib.js'


const getMyNotifications = function() {
  return API.get(`notifications/me`)
}


module.exports = {
  getMyNotifications
}
