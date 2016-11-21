/* Externals */
import React from 'react'
import Immutable from 'immutable'

/* Internals */
import styles from './Assignment.scss'
import AssignmentInfo from '../AssignmentInfo'
import CommentList from '../CommentList'
import AddComment from '../../containers/AddCommentContainer'
import Spinner from '../Spinner'


function shouldAssignmentMount(props) {
  return props.assignment.get('articleId')
}

const Assignment = (props) => {

  if (shouldAssignmentMount(props)) {
    return (
      <div className={styles.wrapper}>
        <AssignmentInfo assignment={props.assignment} />
        <AddComment
          articleType={'assignments'}
          articleId={props.assignment.get('articleId')}/>
        <CommentList comments={props.assignment.get('comments') || Immutable.List()}/>
      </div>
    )
  } else {
    return (
      <Spinner/>
    )
  }

}

export default Assignment
