/* Externals */
import React from 'react'
import Immutable from 'immutable'
import { browserHistory } from 'react-router'

/* Internals */
import styles from './LectureHeader.scss'
import Spinner from '../../Spinner'
import DefaultHeader from '../DefaultHeader'

const LectureHeader = (props) => {

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.back}
        onClick={()=>{browserHistory.goBack()}}>
        <i className="fa fa-chevron-left" aria-hidden="true"/>
      </div>
      <DefaultHeader header="강의"/>
    </div>
  )
}

export default LectureHeader
