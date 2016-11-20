/* External Dependencies */
import React from 'react'
import { withRouter } from 'react-router'
import classNames from 'classnames'
import Link from '../../Link'
import { DateUtils } from '../../../utils'

/* Internal Dependencies */
import styles from './AssignmentItem.scss'

const AssignmentItem = (props) => {

  const endAt = new Date(props.assignment.get('assignmentEndAt'))

  const date = `${endAt.getFullYear()}년 
    ${(endAt.getMonth() + 1)}월 
    ${endAt.getDate()}일 
    (${DateUtils.dayToKoreanWeekday(endAt.getDay())})`
  const createdAt = `게시일 ${props.assignment.get('articleCreatedAt')}`
  const time = `${endAt.toString().substring(15,21)}`
  

  return (
    <div className={classNames(styles.wrapper, {[styles.firstItem]: props.idx === 0})}>
      <div className={styles.schedule}>
        <span>{`[${props.assignment.get('articleGenerationId')}기]`}</span>
        <span className={styles.date}>{date}</span>
        <span className={styles.time}>{time}</span>
      </div>
        <Link to={"/assignments/" + props.assignment.get('articleId')}>
        <div className={styles.subject}>
          <span>{props.assignment.get('articleSubject')}</span>
        </div>
      </Link>
      <div className={styles.meta}>
        <div className={styles.leftMetaGroup}>
          <span className={styles.profileImg}></span>
          <span className={styles.articleWriter}>{props.assignment.getIn(['articleWriter', 'userName'])}</span>
        </div>
        <div className={styles.rightMetaGroup}>
          <span>{props.assignment.get('articleCreatedAt')}</span>
          <span>{props.assignment.get('articleModifiedAt')}</span>
        </div>
      </div>
    </div>
  )
}

export default AssignmentItem
