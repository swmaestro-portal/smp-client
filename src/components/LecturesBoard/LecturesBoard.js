/* External Dependencies */
import React from 'react'
import { browserHistory } from 'react-router'

/* Internal Dependencies */
import styles from './LecturesBoard.scss'


const LecturesBoard = (props) => {

  function renderLectures(lectures) {
    const iterMax = lectures.size > 5 ? 5 : lectures.size
    let list = []
  
    list.push(
      <div className={styles.header}>
        <span className={styles.due}>기한</span>
        <span className={styles.subject}>내용</span>
      </div>
    )

    lectures.every((lecture, idx) => {
      list.push(
        <div
          className={styles.lecture}
          onClick={()=>{browserHistory.push(`/lectures/${lecture.get('articleId')}`)}}
          key={idx}>
          <span className={styles.due}>
            {lecture.get('lectureEndAt').substring(0, 10)}
          </span>
          <span className={styles.subject}>
            {lecture.get('articleSubject')}
          </span>
        </div>
      )
      return iterMax <= iterMax
    })
    return list
  }


  return (
    <div className={styles.wrapper}>
      {renderLectures(props.lectures)}
    </div>
  )
}

export default LecturesBoard
