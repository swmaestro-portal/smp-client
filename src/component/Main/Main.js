/* External Dependencies */
import React from 'react'

/* Internal Dependencies */
import styles from './Main.scss'
import LeftBar from '../LeftBar'

class Logo extends React.Component {

  componentWillMount() {
    console.log('Main mount')
  }


  render() {
    return (
      <div className={styles.wrapper}>
        Main
        <LeftBar/>
        {this.props.children}
      </div>
    )
  }

}

export default Logo
