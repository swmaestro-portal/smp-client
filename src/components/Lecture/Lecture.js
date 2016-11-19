/* External Dependencies */
import React from 'react'
import { withRouter } from 'react-router'
import classNames from 'classnames'

/* Internal Dependencies */
import styles from './Lecture.scss'
import { DateUtils } from '../../utils'


function shouldLectureMount(props) {
  return props.lecture.get('articleId')
}

const Lecture = (props) => {
  const beginAt = new Date(props.lecture.get('lectureBeginAt'))
  const endAt = new Date(props.lecture.get('lectureEndAt'))

  const date = `${beginAt.getFullYear()}년 
    ${(beginAt.getMonth() + 1)}월 
    ${beginAt.getDate()}일 
    (${DateUtils.dayToKoreanWeekday(beginAt.getDay())})`
  const createdAt = `게시일 ${props.lecture.get('articleCreatedAt')}`
  const time = `${beginAt.toString().substring(15,21)} ~ ${endAt.toString().substring(15,21)}`


  if (shouldLectureMount(props)) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={styles.subject}>
            <span className={styles.generation}>
              {`[${props.lecture.get('articleGenerationId')}기]`}
            </span>
            <span>{props.lecture.get('articleSubject')}</span>
          </div>
          <div className={styles.teacher}>
            <span>{props.lecture.getIn(['lectureTeacher', 'userName'])}</span>
          </div>
        </div>

        <div className={styles.meta}>
          <span className={styles.day}>{date}</span>
          <span className={styles.createdAt}>{createdAt}</span>
          <div className={styles.time}>{time}</div>
        </div>

        <div className={styles.content}>
          {props.lecture.get('articleContent')}
        </div>

        <div className={styles.attachment}>
          첨부파일
        </div>
      </div>
    )
  } else return (
    <div className={classNames(styles.wrapper, styles.spinner)}>
      <i className="fa fa-circle-o-notch fa-spin"/>
    </div>
  )
}

export default Lecture
