/* External Dependencies */
import React from 'react'
import { withRouter } from 'react-router'

/* Internal Dependencies */
import styles from './Lectures.scss'
import Lecture from './Lecture'

const Lectures = (props) => {
  const lectures = []
  props.lectures.map((elem, i) => lectures.push(<Lecture key={i} idx={i} lecture={elem}/>))

  return (
    <div className={styles.wrapper}>
      {lectures}
    </div>
  )
}

// lectures: Immutable.List

export default Lectures
