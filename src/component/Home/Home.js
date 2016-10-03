/* External Dependencies */
import React from 'react'

/* Internal Dependencies */
import styles from './Home.scss'
import LeftBar from '../LeftBar'
import { fetchTemp } from '../../fetch/API'

class Home extends React.Component {

  componentWillMount() {
    console.log('Main mount')
  }

  componentDidMount() {
    var x = fetchTemp()
    console.log(1, x)
  }

  render() {
    return (
      <div className={styles.wrapper}>
        Home
        <LeftBar/>
        {this.props.children}
      </div>
    )
  }

}

export default Home
