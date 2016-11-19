/* External Dependencies */
import React from 'react'

/* Internals */
import styles from './Avatar.scss'


const Avatar = (props) => {
  return (
    <div className={styles.wrapper}>
      <i className="fa fa-user-circle" aria-hidden="true"/>
    </div>
  )
}

export default Avatar
