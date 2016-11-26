/* Externals */
import React from 'react'
import Immutable from 'immutable'

/* Internals */
import DefaultHeader from '../DefaultHeader'
import styles from './HomeHeader.scss'
import Spinner from '../../Spinner'

const AssignmentHeader = (props) => {

  return (
    <div>
      <DefaultHeader header="소프트웨어 마에스트로 포탈"/>
    </div>
  )

}

export default AssignmentHeader
