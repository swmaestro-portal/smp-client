/* */
import Immutable from 'immutable'

/* */
import Notification from './NotificationModel'

class NotificationsModel {

  constructor() {
    console.warn('NOT INSTANTIABLE')
  }

  static setInstance(notifications = null) {
    if (notifications == null) {
      return Immutable.List()
    }

    return Immutable.List(
      notifications.map(elem => { return new Notification(elem) })
    )
  }

  // static updateInstance(_users, users) {
  //   users.map((user) => {
  //     if (_users.filter((_user) => _user.get('userId') == user.userId).size == 0) {
  //       // Append if not exists
  //       _users = _users.push(new User(user))
  //     } else {
  //       // Update if exists
  //       _users = _users.map((_user) => {
  //         return _user.userId == user.userId ?
  //           new User(user)
  //           : _user
  //       })
  //     }
  //   })
  //
  //   return _users
  // }

}

export default NotificationsModel
