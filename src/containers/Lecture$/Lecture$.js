/* External Dependencies */
import React from 'react'
import {browserHistory} from 'react-router'

/* */
import styles from './Lecture$.scss'

class Lecture$ extends React.Component {

  constructor() {
    super()
  }

  componentWillMount() {
  }

  render() {
    return (
      <div className={styles.wrapper}>
        Lecture
      </div>
    )
  }

}

export default Lecture$
