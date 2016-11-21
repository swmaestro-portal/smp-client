/* Externals */
import React from 'react'

/* Internals */
import styles from './Spinner.scss'


const Spinner = (props) => {
  return (
    <div className={styles.wrapper}>
      <i className="fa fa-circle-o-notch fa-spin"/>
    </div>
  )
}

export default Spinner
