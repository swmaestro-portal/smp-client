/* External Dependencies */
import React from 'react'

/* Internal Dependencies */
import styles from './App.scss'
import LeftBar from '../../component/LeftBar'
import MainPanel from '../../component/MainPanel'

class App extends React.Component {

  constructor() {
    super()
  }

  componentWillMount() {
    console.log('App mount')
  }

  render() {
    console.log(1, this.props.children)
    return (
      <div className={styles.wrapper}>
        app
        {this.props.children}
      </div>
    )
  }

}

export default App
