/* External Dependencies */
import React from 'react'
import { withRouter } from 'react-router'

/* Internal Dependencies */
import styles from './AttachmentList.scss'
import AttachmentItem from './AttachmentItem'

function shouldAttachmentListMount(props) {
  return props.attachments && props.attachments.size
}

const AttachmentList = (props) => {

  if (shouldAttachmentListMount(props)) {
    return (
      <div className={styles.wrapper}>
        {props.attachments.map((elem) => (<AttachmentItem attachment={elem}/>))}
      </div>
    )
  } else {
    return null
  }

}

export default AttachmentList
