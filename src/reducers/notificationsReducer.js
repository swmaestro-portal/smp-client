import AT from '../actions/ActionTypes'
import Notifications from '../models/NotificationsModel'

const initialState = {
  notifications: Notifications.setInstance()
}

export default function(state = initialState, action) {
  // console.log('_notifications', state, action)

  switch (action.type) {

    case AT.GET_NOTIFICATIONS:
      return {
        ...state,
        notifications: Notifications.setInstance(action.payload)
      }

    default:
      return state
  }
}
