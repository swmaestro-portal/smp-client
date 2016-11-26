/* External Dependencies */
import React from 'react'
import { withRouter } from 'react-router'
import classNames from 'classnames'
import moment from 'moment'

/* Internal Dependencies */
import styles from './Notification.scss'
import Link from '../../Link'

moment.locale('ko')

const Notification = (props) => {
  return (
    <li className={classNames(styles.wrapper, props.notification.get('notificationIsRead') ? styles.read : styles.unread )}>
      <div onClick={() => props.handleClickNotification(props.notification.get('notificationId'))}>
        <Link to={props.notification.get('notificationUrl')} className={styles.link}>
          <p className={styles.message}>{props.notification.get('notificationMessage')}</p>
          <p className={styles.timeago}>{moment(props.notification.get('notificationCreatedAt')).fromNow()}</p>
        </Link>
      </div>
    </li>
  )
}

export default Notification
