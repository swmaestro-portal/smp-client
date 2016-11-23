/* External Dependencies */
import React from 'react'
import { withRouter } from 'react-router'
import classNames from 'classnames'
import moment from 'moment'
// import 'react-date-picker/index.css'
// import { DateField, Calendar } from 'react-date-picker'

/* Internal Dependencies */
import styles from './AddLecture.scss'
import SelectTime from '../Select/SelectTime'
import SelectGeneration from '../Select/SelectGeneration'
import SelectDate from '../Select/SelectDate'

const AddLecture = (props) => {

  return (
    <form className={styles.wrapper}>
      <div className={styles.gen}>
        <label htmlFor="">기수</label>
        <SelectGeneration
          className={styles.gen}
          value={props.gen}
          handleChange={props.handleChangeGen}/>
      </div>
      <div className={styles.assignment}>
        <label htmlFor="">과제명</label>
        <p className={styles.subject}>
          <input type="text" placeholder="제목"/>
        </p>
      </div>
      <div className={styles.schedule}>
        <label htmlFor="">일정</label>
        <SelectDate
          className={styles.datePicker}
          dateFormat="YYYY/MM/DD"
          selected={props.startDate}
          handleChange={props.handleChangeStartDate} />
        <SelectTime
          classname={styles.startTime}
          value={props.startTime}
          handleChange={props.handleChangeStartTime}/>
        <SelectDate
          className={styles.datePicker}
          dateFormat="YYYY/MM/DD"
          selected={props.endDate}
          handleChange={props.handleChangeEndDate} />
        <SelectTime
          classname={styles.endTime}
          value={props.endTime}
          handleChange={props.handleChangeEndTime}/>
      </div>
      <div className={styles.lecturer}>
        <label htmlFor="">발의자</label>
        <input type="text" placeholder="강의자"/>
      </div>
      <div className={styles.desc}>
        <label htmlFor="">내용</label>
        <textarea className={styles.textArea}/>
      </div>
      <div className={styles.attachment}>
        <label htmlFor="">첨부파일</label>
        <input type="file" onChange={props.handleChangeFile}/>
      </div>
      <div className={styles.btnContainer}>
        <label htmlFor=""></label>
        <button type='button' className={styles.submit}>올리기</button>
        <button type='button' className={styles.cancel}>취소</button>
      </div>
    </form>
  )
}

  // "articleGenerationId": "7",
  //   "articleSubject": "Subject",
  //   "articleContent": "Content",
  //   "lectureTeacherId": "4",
  //   "lectureBeginAt": "2016-10-16 03:04:31",
  //   "lectureEndAt": "2016-10-16 03:04:31"

export default AddLecture
