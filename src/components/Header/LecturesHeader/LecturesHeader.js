/* Externals */
import React from 'react'
import Immutable from 'immutable'
import { browserHistory } from 'react-router'

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
      <div
        className={styles.write}
        onClick={()=>{browserHistory.push('/addLecture')}}>
        <i className="fa fa-pencil-square-o" aria-hidden="true"/>
        글쓰기
      </div>
    </div>
  )
}

export default LecturesHeader
