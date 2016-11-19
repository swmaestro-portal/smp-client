/* */
import Immutable from 'immutable'

class NotificationModel {

  constructor(notification) {
    return Immutable.fromJS(notification)
  }

}

export default NotificationModel
