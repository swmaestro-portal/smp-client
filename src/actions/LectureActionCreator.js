import { LectureAPI } from '../apis'
import createAction from './createAction'
import AT from './ActionTypes'

export default {

  getLectures: () => (dispatch, getState) => {
    return LectureAPI.requestGetLectures()
      .then(res => dispatch(createAction(AT.GET_LECTURES, res)))
  },

  getLecture: (id) => (dispatch, getState) => {
    return LectureAPI.requestGetLecture(id)
      .then(res => dispatch(createAction(AT.GET_LECTURE, res)))
  },
  
  getComments: (id) => (dispatch, getState) => {
    return LectureAPI.requestGetComments(id)
      .then(res => dispatch(createAction(AT.GET_COMMENTS, res)))
  },
  
  postAttachment: (args) => (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      LectureAPI.requestPostAttachment(args)
        .then(res => {
          dispatch(createAction(AT.POST_ATTACHMENT, res))
          resolve(res)
        })
    })
  },
  
  postLecture: (args) => (dispatch, getState) => {
    return LectureAPI.requestPostLecture(args)
      .then(res => dispatch(createAction(AT.POST_LECTURE, res)))
  }

}
