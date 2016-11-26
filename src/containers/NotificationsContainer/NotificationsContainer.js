/* External Dependencies */
import React from 'react'
import { connect } from 'react-redux'

/* Internals */
import styles from './NotificationsContainer.scss'
import { notificationActions } from '../../actions'
import Notifications from '../../components/Notifications'

class NotificationsContainer extends React.Component {

  constructor() {
    super()

    this.handleClickNotification = this.handleClickNotification.bind(this)
  }

  componentWillMount() {
    this.props.dispatch(notificationActions.getNotifications())
  }

  componentDidMount() {
    setInterval(() => {
      this.props.dispatch(notificationActions.getNotifications())
    }, 3000);
  }

  handleClickNotification(id) {
    this.props.dispatch(notificationActions.readNotification(id))
      .then(() => {
        this.props.dispatch(notificationActions.getNotifications())
      })
  }

  render() {
    return (
      <Notifications notifications={this.props.notifications} handleClickNotification={this.handleClickNotification}>
      </Notifications>
    )
  }

}

const mapStateToProps = (state/*, props*/) => {
  return {
    notifications: state.notificationsReducer.notifications
  }
}

NotificationsContainer = connect(mapStateToProps)(NotificationsContainer)

export default NotificationsContainer
