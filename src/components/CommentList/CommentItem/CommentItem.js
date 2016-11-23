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

  const taID = 'comment-ta-' + comment.get('commentId');

  const taAdjust = () => {
    FormUtils.textAreaAdjust('#' + taID)
  }

  const foo = () => {
    setTimeout(() => {
      document.getElementById(taID).value = comment.get('commentContent')
      taAdjust()
    }, 0)
  }

  const toggleEdit = () => {
    const ta = document.querySelector('#' + taID)
    const editBtn = document.querySelector('#' + taID + '-btn-edit')
    const doneBtn = document.querySelector('#' + taID + '-btn-done')

    ta.readOnly = !ta.readOnly
    if (ta.readOnly) {
      editBtn.style.display = "block"
      doneBtn.style.display = "none"
    } else {
      editBtn.style.display = "none"
      doneBtn.style.display = "block"
      ta.focus()
    }
  }

  const doneEdit = () => {
    const ta = document.querySelector('#' + taID)

    toggleEdit()
    props.handleEditComment(comment.get('commentId'), {'commentContent': ta.value})
  }


  moment.locale('ko');
  return (
    <div className={classNames(styles.wrapper, {[styles.firstItem]: props.idx === 0})} id={"comment-" + comment.get('commentId')}>
      <span className={styles.name}>{comment.getIn(['commentWriter', 'userName'])}</span>
      <textarea className={styles.content} id={taID} readOnly={true} onChange={taAdjust} />
      <script>{foo()}</script>
      <span className={styles.date}>{moment(date).fromNow()}</span>
      <span className={styles.moreArea}>
        <i className={classNames(styles.editButton, "fa fa-pencil")} aria-hidden="true" id={taID + "-btn-edit"} onClick={toggleEdit} style={{display: props.isMe ? 'block' : 'none'}} />
        <i className={classNames(styles.doneButton, "fa fa-check")} aria-hidden="true" id={taID + "-btn-done"} onClick={doneEdit} style={{display: 'none'}} />
      </span>
    </div>
  )
}

export default CommentItem
