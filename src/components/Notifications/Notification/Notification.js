/* External Dependencies */
import React from 'react'
import { withRouter } from 'react-router'
import classNames from 'classnames'
import TimeAgo from '../../TimeAgo'

/* Internal Dependencies */
import styles from './Notification.scss'
import Link from '../../Link'

const Notification = (props) => {

  return (
    <li className={classNames(styles.wrapper, props.notification.get('notificationIsRead') ? styles.read : styles.unread )}>
      <div onClick={() => props.handleClickNotification(props.notification.get('notificationId'))}>
        <Link to={props.notification.get('notificationUrl')} className={styles.link}>
          <p className={styles.message}>{props.notification.get('notificationMessage')}</p>
          <TimeAgo date={props.notification.get('notificationCreatedAt')} className={styles.timeago} />
        </Link>
      </div>
    </li>
  )
}

export default Notification
