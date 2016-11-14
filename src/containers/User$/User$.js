/* External Dependencies */
import React from 'react'
import {browserHistory} from 'react-router'

/* */
import styles from './User$.scss'

class User$ extends React.Component {

  constructor() {
    super()
  }

  componentWillMount() {

  }

  render() {
    return (
      <div className={styles.wrapper}>
        User
      </div>
    )
  }

}

export default User$
