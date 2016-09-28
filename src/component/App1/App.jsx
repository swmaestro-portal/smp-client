/* External Dependencies */
import React from 'react'

/* Internal Dependencies */
import styles from './App.scss'
import LeftBar from '../LeftBar'
import MainPanel from '../MainPanel'
// import Temp from '../Temp'


class App extends React.Component {

  constructor() {
    super()
  }

  componentWillMount() {
    console.log('App mount')
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <LeftBar/>
        <MainPanel/>
      </div>
    )
  }

}

export default App
