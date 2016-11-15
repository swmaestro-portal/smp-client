/* External Dependencies */
import React from 'react'
import { withRouter } from 'react-router'
import classNames from 'classnames'

/* Internal Dependencies */
import styles from './User.scss'

const User = (props) => {
  // props.user

  return (
    <div className={styles.wrapper}>
      {props.user}
    </div>
  )
}

// users: Immutable.List

export default User
