import React from 'react'
import { connect } from 'react-redux'

/**/
import styles from './MainFrame.scss'
import Leftbar from '../Leftbar'
import MainPanel from '../MainPanel'
import Masthead from '../Masthead/Masthead'

const MainFrame = (props) => {
  // console.log(33, props)
  return (
    <div className={styles.wrapper}>
      <Masthead/>
      <div className={styles.body}>
        <Leftbar className={styles.leftbar}/>
        <MainPanel
          className={styles.mainPanel}
          header={props.header}>
          {props.mainPanel}
        </MainPanel>
      </div>
    </div>
  )
}

export default MainFrame
