/* External Dependencies */
import React from 'react'
import {browserHistory} from 'react-router'

/* */
import styles from './AssignmentContainer.scss'

class AssignmentContainer extends React.Component {

  constructor() {
    super()
  }

  componentWillMount() {
  }

  render() {
    return (
      <div className={styles.wrapper}>
        Assignment
      </div>
    )
  }

}

export default AssignmentContainer
