import { CommentAPI } from '../apis'
import createAction from './createAction'
import AT from './ActionTypes'


export default {
  postComment: (arg) => (dispatch, getState) => {
    return CommentAPI.requestPostComment(arg)
      .then(res => dispatch(createAction(AT.POST_COMMENT, res)))
  }
}
