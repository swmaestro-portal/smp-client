/* External Dependencies */
import React from 'react'
import { withRouter, Link } from 'react-router'

/* Internal Dependencies */
import styles from './Link.scss'

const LinkComponent = (props) => {
  return (
    <Link
      className={styles.wrapper}
      to={props.to}>
      {props.children}
    </Link>
  )
}

export default LinkComponent
