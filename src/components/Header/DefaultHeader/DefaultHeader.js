/* Externals */
import React from 'react'
import Immutable from 'immutable'

/* Internals */
import styles from './DefaultHeader.scss'
import Spinner from '../../Spinner'


const DefaultHeader = (props) => {

  return (
    <div className={styles.wrapper}>{props.header}</div>
  )
}

export default DefaultHeader
