/* Externals */
import React from 'react'
import Immutable from 'immutable'

/* Internals */
import styles from './Lecture.scss'
import LectureInfo from '../LectureInfo'
import CommentContainer from '../../containers/CommentContainer'
import Spinner from '../Spinner'

function shouldLectureMount(props) {
  return props.lecture.get('articleId')
}

const Lecture = (props) => {
  if (shouldLectureMount(props)) {
    return (
      <div className={styles.wrapper}>
        <LectureInfo lecture={props.lecture} />
        <CommentContainer articleType={'lectures'} articleId={props.lecture.get('articleId')} />
      </div>
    )
  } else {
    return (
      <Spinner/>
    )
  }

}

export default Lecture
