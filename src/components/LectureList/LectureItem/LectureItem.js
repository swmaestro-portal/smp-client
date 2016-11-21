/* External Dependencies */
import React from 'react'
import { withRouter } from 'react-router'
import classNames from 'classnames'
import Link from '../../Link'
import { DateUtils } from '../../../utils'

/* Internal Dependencies */
import styles from './LectureItem.scss'

const LectureItem = (props) => {

  const beginAt = new Date(props.lecture.get('lectureBeginAt'))
  const endAt = new Date(props.lecture.get('lectureEndAt'))

  const date = `${beginAt.getFullYear()}년 
    ${(beginAt.getMonth() + 1)}월 
    ${beginAt.getDate()}일 
    (${DateUtils.dayToKoreanWeekday(beginAt.getDay())})`
  const createdAt = `게시일 ${props.lecture.get('articleCreatedAt')}`
  const time = `${beginAt.toString().substring(15,21)} ~ ${endAt.toString().substring(15,21)}`
  

  return (
    <div className={classNames(styles.wrapper, {[styles.firstItem]: props.idx === 0})}>
      <div className={styles.schedule}>
        <span>{`[${props.lecture.get('articleGenerationId')}기]`}</span>
        <span className={styles.date}>{date}</span>
        <span className={styles.time}>{time}</span>
      </div>
        <Link to={"/lectures/" + props.lecture.get('articleId')}>
        <div className={styles.subject}>
          <span>{props.lecture.get('articleSubject')}</span>
        </div>
      </Link>
      <div className={styles.meta}>
        <div className={styles.leftMetaGroup}>
          <span className={styles.profileImg}></span>
          <span className={styles.lecturer}>{props.lecture.getIn(['lectureTeacher', 'userName'])}</span>
        </div>
        <div className={styles.rightMetaGroup}>
          <span>{props.lecture.get('articleCreatedAt')}</span>
          <span>{props.lecture.get('articleModifiedAt')}</span>
        </div>
      </div>
    </div>
  )
}

// lecture
// "articleId": 0,
// "articleWriterId": 0,
// "articleModifierId": 0,
// "articleGenerationId": 0,
// "articleSubject": "string",
// "articleContent": "string",
// "articleCreatedAt": "string",
// "articleUpdatedAt": "string",
// "articleType": "string",
// "articleStatus": "string",
// "lectureTeacherId": 0,
// "lectureBeginAt": "string",
// "lectureEndAt": "string"

export default LectureItem
