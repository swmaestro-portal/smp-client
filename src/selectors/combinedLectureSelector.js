/* Externals */
import { createSelector } from 'reselect'

/* Internals */
import { 
  lectureSelector,
  commentsSelector
} from './default'


export default createSelector(
  [lectureSelector, commentsSelector],
  (lecture, comments) => {

    return lecture.set('comments', comments)
  }
)
