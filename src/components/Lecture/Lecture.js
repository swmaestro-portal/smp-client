/* External Dependencies */
import React from 'react'
import { withRouter } from 'react-router'
import classNames from 'classnames'

/* Internal Dependencies */
import styles from './Lecture.scss'
import Utils from '../../utils'

const Lecture = (props) => {
  // props.lecture
  if (props.lecture == null) {
    return (
      <div className = {styles.wrapper}>
      </div>
    )
  }
  var beginAt = new Date(props.lecture.get('lectureBeginAt'))
  var endAt = new Date(props.lecture.get('lectureEndAt'))

  return (
    <div className={styles.wrapper}>
      <div className={styles.head}>
        <span className={styles.subject}>
          <span className={styles.generation}>{`[${props.lecture.get('articleGenerationId')}기]`}</span>
          {props.lecture.get('articleSubject')}
        </span>

        <span className={styles.teacher}>
          {props.lecture.get('lectureTeacher')}
        </span>
      </div>
      <div className={styles.meta}>
        <span className={styles.day}>
          {
            beginAt.getFullYear() + "년" +
            (beginAt.getMonth() + 1) + "월" +
            beginAt.getDate() + "일(" +
            Utils.dateUtils.dayToKoreanWeekday(beginAt.getDay()) + ")"
          }
        </span>
        <span className={styles.createdAt}>
          {
            "게시일 " +
            props.lecture.get('articleCreatedAt')
          }
        </span>

      </div>
      <div className={styles.time}>
        {
          beginAt.toString().substring(15,21) + " ~ " +
          endAt.toString().substring(15,21)
        }
      </div>
      <div className={styles.content}>

        {props.lecture.get('articleContent')}
      </div>

      <div className={styles.attachment}>
        첨부파일

      </div>
    </div>
  )
}

// "articleId": 1042,
//   "articleWriter": {
//   "userId": 11,
//     "userName": "SampleMentor"
// },
// "articleModifier": {
//   "userId": 11,
//     "userName": "SampleMentor"
// },
// "articleGenerationId": 7,
//   "articleSubject": "Lecture From Mentor 222",
//   "articleContent": "Modified by Writer oneself",
//   "articleCreatedAt": "2016-11-06 14:11:24",
//   "articleUpdatedAt": "2016-11-06 14:18:26",
//   "articleType": "L",
//   "articleStatus": "A",
//   "lectureTeacher": {
//   "userId": 11,
//     "userName": "SampleMentor"
// },
// "lectureBeginAt": "2016-11-18 12:04:31",
//   "lectureEndAt": "2016-11-18 12:04:31"

// lectures: Immutable.List

export default Lecture
