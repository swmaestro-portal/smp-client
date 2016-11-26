/* Externals */
import React from 'react'
import Immutable from 'immutable'

/* Internals */
import styles from './LecturesHeader.scss'
import Spinner from '../../Spinner'
import DefaultHeader from '../DefaultHeader'

const LecturesHeader = (props) => {

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.back}
        onClick={()=>{browserHistory.goBack()}}>
        <i className="fa fa-chevron-left" aria-hidden="true"/>
      </div>
      <DefaultHeader header="강의"/>
      <div className={styles.write}>
        <i className="fa fa-pencil-square-o" aria-hidden="true"/>
      </div>
    </div>
  )
}

export default LecturesHeader
