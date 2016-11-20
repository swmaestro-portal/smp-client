/* Externals */
import { createSelector } from 'reselect'

/* Internals */
import { 
  assignmentSelector,
  commentsSelector
} from './default'


export default createSelector(
  [assignmentSelector, commentsSelector],
  (assignment, comments) => {

    return assignment.set('comments', comments)
  }
)
