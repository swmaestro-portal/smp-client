/* External Dependencies */
import React from 'react'
import { withRouter } from 'react-router'

/* Internal Dependencies */
import styles from './Notifications.scss'
import Notification from './Notification'


const Notifications = (props) => {
  if (props.notifications == null) return <div />

  const notifications = props.notifications.map(
    (elem, i) => <Notification key={i} idx={i} notification={elem} className={styles.row} handleClickNotification={props.handleClickNotification} />
  )

  const empty = (
    <div className={styles.empty_message}>
      <p>알림이 없습니다.</p>
    </div>
  )

  return (
    <div className={styles.wrapper}>
      <h6 className={styles.header}>
        <i className="fa fa-bell" aria-hidden="true"/>&nbsp;&nbsp;알림
      </h6>
      <ul>
        {notifications.size > 0 ? notifications : empty}
      </ul>
    </div>
  )
}

export default Notifications
