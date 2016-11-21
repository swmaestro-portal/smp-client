/* External Dependencies */
import React from 'react'
import { withRouter } from 'react-router'
import classNames from 'classnames'

/* Internal Dependencies */
import styles from './AttachmentItem.scss'

const AttachmentItem = (props) => {
  function handleClickAttachment(event) {
    //TODO
    console.log("fileURL",props.attachment.get('attachmentUrl'))
  }
  return (
    <div className={styles.wrapper} onClick={handleClickAttachment}>
      {props.attachment.get('attachmentName')}
    </div>
  )
}

export default AttachmentItem