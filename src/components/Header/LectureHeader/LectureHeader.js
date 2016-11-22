/* Externals */
import React from 'react'
import Immutable from 'immutable'

/* Internals */
import styles from './LectureHeader.scss'
import Spinner from '../../Spinner'
import DefaultHeader from '../DefaultHeader'

const LectureHeader = (props) => {

  return (
    <div>
      <DefaultHeader header="강의"/>
    </div>
  )
}

export default LectureHeader
