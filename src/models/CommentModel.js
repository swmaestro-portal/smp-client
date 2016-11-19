/* */
import Immutable from 'immutable'

class CommentModel {

  constructor(comment = {}) {
    return Immutable.fromJS(comment)
  }

}

export default CommentModel
