/* Externals */
import React from 'react'
import Immutable from 'immutable'

/* Internals */
import styles from './Lecture.scss'
import LectureInfo from '../LectureInfo'
import CommentList from '../CommentList'
import AddComment from '../../containers/AddCommentContainer'
import Spinner from '../Spinner'


function shouldLectureMount(props) {
  return props.lecture.get('articleId')
}

const Lecture = (props) => {

  if (shouldLectureMount(props)) {
    return (
      <div className={styles.wrapper}>
        <LectureInfo lecture={props.lecture} />
        <AddComment
          articleType={'lectures'}
          articleId={props.lecture.get('articleId')}/>
        <CommentList comments={props.lecture.get('comments') || Immutable.List()}/>
      </div>
    )
  } else {
    return (
      <Spinner/>
    )
  }

}

export default Lecture
