/* */
import Immutable from 'immutable'

/* Internals */
import Comment from './CommentModel'

class CommentsModel {

  constructor() {
    console.warn('NOT INSTANTIABLE')
  }

  static setInstance(comments = null) {
    if (comments == null) {
      return Immutable.List()
    }
  
    return Immutable.List(
      comments.map(elem => new Comment(elem))
    )
  }

  static updateInstance(_comments, lectures) {
    lectures.map((lecture) => {
      if (_comments.filter((_lecture) => _lecture.get('articleId') == lecture.lectureId).size === 0) {
        // Append if not exists
        _comments = _comments.push(new Comment(lecture))
      } else {
        // Update if exists
        _comments = _comments.map((elem) => {
          return elem.articleId === lecture.articleId ?
              new Lecture(lecture)
            : elem
        })
      }
    })

    return _comments
  }

}

export default CommentsModel
