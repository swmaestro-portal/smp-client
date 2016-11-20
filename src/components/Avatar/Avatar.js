/* External Dependencies */
import React from 'react'
import classNames from 'classnames'

/* Internals */
import styles from './Avatar.scss'


const Avatar = (props) => {
  const className = props.className || ''

  return (
    <div className={classNames(styles.wrapper, className)}>
      <i className="fa fa-user-circle" aria-hidden="true"/>
    </div>
  )
}

export default Avatar
