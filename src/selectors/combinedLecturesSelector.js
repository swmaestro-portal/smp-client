/* Externals */
import { createSelector } from 'reselect'

/* Internals */
import { lecturesSelector } from './default'

export default createSelector(
  [lecturesSelector, /*commentsSelector*/],
  (lectures, /* comments */) => {

    
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


    return lectures
  }
)
