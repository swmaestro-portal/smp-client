/* External Dependencies */
import React from 'react'
import {browserHistory} from 'react-router'

/* */
import styles from './App.scss'

class App extends React.Component {

  constructor() {
    super()
  }

  componentWillMount() {
  }                                                   

  render() {
    return (
      <div className={styles.wrapper}>
        {this.props.children}
      </div>
    )
  }

}

export default App
