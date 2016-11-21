/* External Dependencies */
import React from 'react'
import { withRouter } from 'react-router'

/* Internal Dependencies */
import styles from './LectureList.scss'
import LectureItem from './LectureItem'

const LectureList = (props) => {

  return (
    <div className={styles.wrapper}>
      {props.lectures.map((elem, i) =>(<LectureItem key={i} idx={i} lecture={elem}/>))}
    </div>
  )
}

export default LectureList
