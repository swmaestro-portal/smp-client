/* Externals */
import React from 'react'
import Immutable from 'immutable'
import { browserHistory } from 'react-router'

/* Internals */
import DefaultHeader from '../DefaultHeader'
import styles from './AssignmentsHeader.scss'
import Spinner from '../../Spinner'


const AssignmentsHeader = (props) => {

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.back}
        onClick={()=>{browserHistory.goBack()}}>
        <i className="fa fa-chevron-left" aria-hidden="true"/>
      </div>
      <DefaultHeader header="과제"/>
      <div
        className={styles.write}
        onClick={()=>{browserHistory.push('/addAssignment')}}>
        <i className="fa fa-pencil-square-o" aria-hidden="true"/>
        글쓰기
      </div>
    </div>
  )
}

export default AssignmentsHeader
