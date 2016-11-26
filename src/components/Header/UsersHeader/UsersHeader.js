/* Externals */
import React from 'react'
import Immutable from 'immutable'

/* Internals */
import DefaultHeader from '../DefaultHeader'
import styles from './UsersHeader.scss'
import Spinner from '../../Spinner'


const UsersHeader = (props) => {

  return (
    <div>
      <DefaultHeader header="사람들"/>
    </div>
  )
}

export default UsersHeader
