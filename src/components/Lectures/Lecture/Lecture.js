/* External Dependencies */
import React from 'react'
import { withRouter } from 'react-router'
import classNames from 'classnames'
import Link from '../../Link'
import Utils from '../../../utils'

/* Internal Dependencies */
import styles from './Lecture.scss'

const Lecture = (props) => {

  var beginAt = new Date(props.lecture.get('lectureBeginAt'))
  var endAt = new Date(props.lecture.get('lectureEndAt'))

  return (
    <div className={classNames(styles.wrapper, {[styles.firstItem]: props.idx === 0})}>
      <div className={styles.schedule}>
        <span>{`[${props.lecture.get('articleGenerationId')}기]`}</span>
        <span className={styles.date}>{
          beginAt.getFullYear() + "년 " +
          (beginAt.getMonth() + 1) + "월 " +
          beginAt.getDate() + "일(" +
          Utils.dateUtils.dayToKoreanWeekday(beginAt.getDay()) + ")"
        }</span>
        <span className={styles.time}>{
          "[" +
          beginAt.toString().substring(16,21) + " ~ " +
          endAt.toString().substring(16,21) + "]"
        }</span>
      </div>
        <Link to={"/lectures/" + props.lecture.get('articleId')}>
        <div className={styles.subject}>
          <span>{props.lecture.get('articleSubject')}</span>
        </div>
      </Link>
      <div className={styles.meta}>
        <div className={styles.leftMetaGroup}>
          <span className={styles.profileImg}></span>
          <span className={styles.lecturer}>박정규 멘토</span>
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

export default Lecture
