/* External Dependencies */
import React from 'react'
import { withRouter } from 'react-router'
import classNames from 'classnames'

/* Internal Dependencies */
import styles from './AttachmentItem.scss'

const AttachmentItem = (props) => {

  return (
    <a href={"https://api.swmaestro.net/attachments/" + props.attachment.get('attachmentId')} target="_blank">
      <div className={styles.wrapper}>
        {props.attachment.get('attachmentName')}
      </div>
    </a>
  )
}

export default AttachmentItem