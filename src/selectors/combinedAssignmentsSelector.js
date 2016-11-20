/* Externals */
import { createSelector } from 'reselect'

/* Internals */
import { assignmentsSelector } from './default'

export default createSelector(
  [assignmentsSelector, /*commentsSelector*/],
  (assignments, /* comments */) => {

    
    // lectures.map(lecture => {
      
    //   sth = Comment.getCommentById('')
    //   lecture.set('comment', sth)
    //
    //
    //
    //   return lecture
    // })
    // Comments.doSth()
    // comments.getByLectureId
    // console.log(1, lectures.getId)


    return assignments
  }
)
