/* External Dependencies */
import React from 'react'
import {browserHistory} from 'react-router'

/* */
import styles from './AddComment.scss'

const AddComment = (props) => {
  return (
    <div className={styles.wrapper}>
      <textarea id="smp-AddComment-textarea" className={styles.textarea} onKeyDown={props.handleKeyDown}/>
      <button onClick={props.handleClickSubmit}>쓰기</button>
    </div>
  )
}

export default AddComment
