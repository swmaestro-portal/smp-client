/* External Dependencies */
import React from 'react'
import { withRouter } from 'react-router'

/* Internal Dependencies */
import styles from './CommentList.scss'
import CommentItem from './CommentItem'
import Spinner from '../Spinner'


function shouldCommentListMount(props) {
  return props.comments && props.comments.size
}

const tableHeader = (
  <div className={styles.tableHeader}>
    <span className={styles.author}>이름</span>
    <span className={styles.content}>내용</span>
    <span className={styles.date}>일시</span>
  </div>
)

const CommentList = (props) => {

  if (shouldCommentListMount(props)) {
    return (
      <div className={styles.wrapper}>
        {tableHeader}
        {props.comments.map((elem, i) => (<CommentItem key={i} idx={i} comment={elem}/>))}
      </div>
    )
  } else {
    return null
  }

}

export default CommentList
