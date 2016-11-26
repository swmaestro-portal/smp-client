/* Externals */
import React from 'react'
import Immutable from 'immutable'

/* Internals */
import DefaultHeader from '../DefaultHeader'
import styles from './AssignmentsHeader.scss'
import Spinner from '../../Spinner'


const AssignmentsHeader = (props) => {

  return (
    <div>
      <DefaultHeader header="과제"/>
    </div>
  )
}

export default AssignmentsHeader
