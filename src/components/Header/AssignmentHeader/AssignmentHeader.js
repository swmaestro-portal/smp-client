/* Externals */
import React from 'react'
import Immutable from 'immutable'
import { browserHistory } from 'react-router'

/* Internals */
import styles from './AssignmentHeader.scss'
import DefaultHeader from '../DefaultHeader'
import Spinner from '../../Spinner'


const AssignmentHeader = (props) => {

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.back}
        onClick={()=>{browserHistory.goBack()}}>
        <i className="fa fa-chevron-left" aria-hidden="true"/>
      </div>
      <DefaultHeader header="과제"/>
    </div>
  )
}

export default AssignmentHeader
