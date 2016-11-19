/* External Dependencies */
import React from 'react'
import { withRouter } from 'react-router'
import classNames from 'classnames'
import 'react-date-picker/index.css'
import { DateField, Calendar } from 'react-date-picker'

/* Internal Dependencies */
import styles from './New.scss'
import Utils from '../../utils'

const New = () => {


  return (

    <div className={styles.wrapper}>
      <form id="new-form" className={styles.form}>
        <div className={styles.subjectArea}>
          <span>
            <select name="기수">
              <option value="7">7기</option>
              <option value="6">6기</option>
              <option value="5">5기</option>
            </select>

          </span>
          <span className={styles.subject}>
            <input type="text" placeholder="제목">

            </input>

          </span>
        </div>
        <div className={styles.information}>

          <label>
            강의 시간
          </label>
          <DateField
              forceValidDate
              defaultValue={"2016-05-30 09:23 AM"}
              dateFormat="YYYY-MM-DD hh:mm a"
          />

          <DateField
              forceValidDate
              defaultValue={"09:23 AM"}
              dateFormat="hh:mm a"
          />

          <span className={styles.teacher}>

            <time>
              </time>
            <input type="text" placeholder="강의자">

            </input>


          </span>

        </div>
        <div className={styles.content}>
          <textarea className={styles.textArea}>

          </textarea>

        </div>

      </form>
    </div>
  )
}

  // "articleGenerationId": "7",
  //   "articleSubject": "Subject",
  //   "articleContent": "Content",
  //   "lectureTeacherId": "4",
  //   "lectureBeginAt": "2016-10-16 03:04:31",
  //   "lectureEndAt": "2016-10-16 03:04:31"

export default New
