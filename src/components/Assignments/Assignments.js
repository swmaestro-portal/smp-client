/* External Dependencies */
import React from 'react'
import { withRouter } from 'react-router'

/* Internal Dependencies */
import styles from './Assignments.scss'
import Assignment from './Assignment'

const Assignments = (props) => {
  const assignments = []
  props.assignments.map((elem, i) => assignments.push(<Assignment key={i} idx={i} assignment={elem}/>))

  return (
    <div className={styles.wrapper}>
      {assignments}
    </div>
  )
}

// assignments: Immutable.List

export default Assignments
