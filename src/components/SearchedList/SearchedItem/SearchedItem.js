/* External Dependencies */
import React from 'react'
import { withRouter } from 'react-router'
import classNames from 'classnames'
import moment from 'moment'

/* Internal Dependencies */
import styles from './SearchedItem.scss'
import searchedListStyles from '../SearchedList.scss'
import Link from '../../Link'


const SearchedItem = (props) => {

  return (
      <Link to={props.link}>
        <div className={classNames(styles.wrapper, {[styles.firstItem]: props.idx === 0}, props.className)}>
          <div className={searchedListStyles.cellFirst}>{props.firstColumn}</div>
          <div className={searchedListStyles.cellSecond}>{props.secondColumn}</div>
          <div className={searchedListStyles.cellThird}>{props.thirdColumn}</div>
        </div>
      </Link>
  )
}

export default SearchedItem


// const year = +date.substring(0, 4)
// const month = +date.substring(5, 7) - 1
// const day = +date.substring(8, 10)
// const hour = +date.substring(11, 13)
// const minute = +date.substring(14, 16)
// const second = +date.substring(17, 19)
