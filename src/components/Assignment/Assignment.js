/* Externals */
import React from 'react'
import Immutable from 'immutable'

/* Internals */
import styles from './Assignment.scss'
import AssignmentInfo from '../AssignmentInfo'
import CommentContainer from '../../containers/CommentContainer'
import Spinner from '../Spinner'


function shouldAssignmentMount(props) {
  return props.assignment.get('articleId')
}

const Assignment = (props) => {
  if (shouldAssignmentMount(props)) {
    return (
      <div className={styles.wrapper}>
        <AssignmentInfo assignment={props.assignment} />
        <CommentContainer articleType={'assignments'} articleId={props.assignment.get('articleId')} />
      </div>
    )
  } else {
    return (
      <Spinner/>
    )
  }

}

export default Assignment
