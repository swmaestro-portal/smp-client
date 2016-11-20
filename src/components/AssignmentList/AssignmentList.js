/* External Dependencies */
import React from 'react'
import { withRouter } from 'react-router'

/* Internal Dependencies */
import styles from './AssignmentList.scss'
import AssignmentItem from './AssignmentItem'

const AssignmentList = (props) => {

  return (
    <div className={styles.wrapper}>
      {props.assignments.map((elem, i) =>(<AssignmentItem key={i} idx={i} assignment={elem}/>))}
    </div>
  )
}

export default AssignmentList
