/* External Dependencies */
import React from 'react'
import { withRouter } from 'react-router'
import classNames from 'classnames'

/* Internal Dependencies */
import styles from './LectureInfo.scss'
import { DateUtils } from '../../utils'
import Avatar from '../Avatar'
import AttachmentList from '../AttachmentList'


const LectureInfo = (props) => {

  const beginAt = new Date(props.lecture.get('lectureBeginAt'))
  const endAt = new Date(props.lecture.get('lectureEndAt'))

  const date = `${beginAt.getFullYear()}년 
    ${(beginAt.getMonth() + 1)}월 
    ${beginAt.getDate()}일 
    (${DateUtils.dayToKoreanWeekday(beginAt.getDay())})`
  const time = `${beginAt.toString().substring(15,21)} ~ ${endAt.toString().substring(15,21)}`
  const generation = `${props.lecture.get('articleGenerationId')}기 | `

  console.log(99,props.lecture.get('attachmentList'))
  return (
    <div className={styles.wrapper}>
      <div className={styles.subject}>
        <span className={styles.label}>강의명</span>
        <span className={styles.content}>{props.lecture.get('articleSubject')}</span>
      </div>
      <div className={styles.teacher}>
        <span className={styles.label}>강의자</span>
        <Avatar className={styles.avatar}/>
        <span className={styles.content}>{props.lecture.getIn(['lectureTeacher', 'userName'])}</span>
      </div>
      <div className={styles.date}>
        <span className={styles.label}>일시</span>
        <span className={styles.content}>
          <span className={classNames(styles.content, styles.day)}>{date}</span>
          <span className={classNames(styles.content, styles.time)}>{time}</span>
        </span>
      </div>
      <div className={styles.content}>
        <span className={styles.label}>내용</span>
        <span className={styles.content}>{props.lecture.get('articleContent')}</span>
      </div>
      <div className={styles.attahment}>
        <span className={styles.label}>첨부파일</span>
        <span className={styles.content}>
          <AttachmentList attachments={props.lecture.get('attachmentList')}/>
        </span>
      </div>
      <p className={styles.horizontalLine}/>
      <div className={styles.createdAt}>
        <span>{`${props.lecture.get('articleCreatedAt')} 작성`}</span>
      </div>
    </div>
  )

}

export default LectureInfo
