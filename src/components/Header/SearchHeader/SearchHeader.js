/* Externals */
import React from 'react'
import Immutable from 'immutable'

/* Internals */
import DefaultHeader from '../DefaultHeader'
import styles from './SearchHeader.scss'
import Spinner from '../../Spinner'


const SearchHeader = (props) => {

  return (
    <div>
      <DefaultHeader header="검색 결과"/>
    </div>
  )
}

export default SearchHeader
