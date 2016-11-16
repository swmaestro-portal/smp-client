/* External Dependencies */
import React from 'react'
import {browserHistory} from 'react-router'

/* */
import styles from './Assignment.scss'

class Assignment$ extends React.Component {

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

export default Assignment$
