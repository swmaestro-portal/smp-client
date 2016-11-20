/* External Dependencies */
import React from 'react'
import { withRouter } from 'react-router'
import classNames from 'classnames'
import Link from '../../Link'
import { DateUtils } from '../../../utils'

/* Internal Dependencies */
import styles from './CommentItem.scss'

const CommentItem = (props) => {

  //
  // const date = `${beginAt.getFullYear()}년
  //   ${(beginAt.getMonth() + 1)}월
  //   ${beginAt.getDate()}일
  //   (${DateUtils.dayToKoreanWeekday(beginAt.getDay())})`
  // const createdAt = `게시일 ${props.lecture.get('articleCreatedAt')}`
  // const time = `${beginAt.toString().substring(15,21)} ~ ${endAt.toString().substring(15,21)}`
  //

  console.log(1, props.comment.toJS())
  return (
    <div className={classNames(styles.wrapper, {[styles.firstItem]: props.idx === 0})}>
      <span>{props.comment.get('commentContent')}</span>
      <span>{props.comment.get('commentCreatedAt')}</span>
      <span>{props.comment.get('commentId')}</span>
      <span>{props.comment.get('commentParentId')}</span>
      <span>{props.comment.get('commentStatus')}</span>
      <span>{props.comment.get('commentWriterId')}</span>
      <span>{props.comment.get('commentUpdatedAt')}</span>
    </div>
  )
}

export default CommentItem
