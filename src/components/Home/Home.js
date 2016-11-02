import React from 'react'
import { connect } from 'react-redux'

/**/
import styles from './Home.scss'
import LeftBar from '../LeftBar/LeftBar'
import MainPanel from '../MainPanel'
import Masthead from '../Masthead/Masthead'

class Home extends React.Component {

  componentWillMount() {
    console.log('home')
  }
  
  render () {
    return (
      <div className={styles.wrapper}>
        <Masthead>1</Masthead>
        <div className={styles.body}>
          <LeftBar className={styles.leftBar}/>
          <MainPanel className={styles.mainPanel}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state/*, props*/) => {
  return {
    reduxState: state
  }
}

const ConnectedHome = connect(mapStateToProps)(Home)

export default ConnectedHome

