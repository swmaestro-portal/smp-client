import React from 'react'
import styles from './App.css'
import styles2 from './App.scss'

class App extends React.Component {
  

  render() {
    console.log(1, styles, styles2)
    return (
      <div className={styles2.temp}> First app </div>
    )
  }

}

export default App