/* External Dependencies */
import React from 'react'
import { withRouter } from 'react-router'
import classNames from 'classnames'

/* Internal Dependencies */
import styles from './Lecture.scss'

const Lecture = (props) => {
  // props.lecture

  return (
    <div className={styles.wrapper}>
      {props.lecture}
    </div>
  )
}

// lectures: Immutable.List

export default Lecture
