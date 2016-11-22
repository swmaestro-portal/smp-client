/* External Dependencies */
import React from 'react'
import { withRouter } from 'react-router'
import classNames from 'classnames'
import moment from 'moment'

/* Internal Dependencies */
import styles from './CommentItem.scss'
import { DateUtils } from '../../../utils'
import Link from '../../Link'

const CommentItem = (props) => {

  const comment = props.comment
  const date = `${comment.get('commentCreatedAt')}`
  const content = comment.get('commentContent').split('\n').map(function(item, idx) {
    return (
      <span key={idx}>{item}<br/></span>
    )
  })

  moment.locale('ko');
  return (
    <div className={classNames(styles.wrapper, {[styles.firstItem]: props.idx === 0})}>
      <span className={styles.name}>{comment.getIn(['commentWriter', 'userName'])}</span>
      <span className={styles.content}>{content}</span>
      <span className={styles.date}>{moment(date).fromNow()}</span>
    </div>
  )
}

export default CommentItem


// const year = +date.substring(0, 4)
// const month = +date.substring(5, 7) - 1
// const day = +date.substring(8, 10)
// const hour = +date.substring(11, 13)
// const minute = +date.substring(14, 16)
// const second = +date.substring(17, 19)
