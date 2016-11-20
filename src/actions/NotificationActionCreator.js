import { NotificationAPI } from '../apis'
import createAction from './createAction'
import AT from './ActionTypes'

export default {
  getNotifications: () => (dispatch, getState) => {
    return NotificationAPI.requestGetNotifications()
      .then(res => dispatch(createAction(AT.GET_NOTIFICATIONS, res)))
  },

  readNotification: (id) => (dispatch, getState) => {
    return NotificationAPI.requestReadNotification(id)
      .then(res => dispatch(createAction(AT.READ_NOTIFICATION, res)))
  },
}
