import { CommentAPI } from '../apis'
import createAction from './createAction'
import AT from './ActionTypes'


export default {
  getComments: (type, id) => (dispatch, getState) => {
    return CommentAPI.requestGetComments(type, id)
      .then(res => dispatch(createAction(AT.GET_COMMENTS, res)))
  },

  postComment: (arg) => (dispatch, getState) => {
    return CommentAPI.requestPostComment(arg)
      .then(res => dispatch(createAction(AT.POST_COMMENT, res)))
  },

  putComment: (id, comment) => (dispatch, getState) => {
    return CommentAPI.requestPutComment(id, comment)
  }
}
