/* External Dependencies */
import React from 'react'
import { withRouter } from 'react-router'
import classNames from 'classnames'
import moment from 'moment'

/* Internal Dependencies */
import styles from './CommentItem.scss'
import { DateUtils, FormUtils } from '../../../utils'
import Link from '../../Link'

const CommentItem = (props) => {

  const comment = props.comment
  const date = `${comment.get('commentCreatedAt')}`
  const content = comment.get('commentContent')

  const taAdjust = () => {
    FormUtils.textAreaAdjust('#comment-ta-' + comment.get('commentId'))
  }

  moment.locale('ko');
  return (
    <div className={classNames(styles.wrapper, {[styles.firstItem]: props.idx === 0})} id={"comment-" + comment.get('commentId')}>
      <span className={styles.name}>{comment.getIn(['commentWriter', 'userName'])}</span>
      <textarea className={styles.content} id={"comment-ta-" + comment.get('commentId')} readOnly={true} defaultValue={content} onChange={taAdjust} />
      <script>{taAdjust()}</script>
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
