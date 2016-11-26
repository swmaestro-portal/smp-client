import { AssignmentAPI } from '../apis'
import createAction from './createAction'
import AT from './ActionTypes'

export default {
  getAssignments: () => (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      AssignmentAPI.requestGetAssignments()
        .then(res => {
          dispatch(createAction(AT.GET_ASSIGNMENTS, res))
          resolve(res)
        })
    })
  },

  getAssignment: (id) => (dispatch, getState) => {
    return AssignmentAPI.requestGetAssignment(id)
        .then(res => dispatch(createAction(AT.GET_ASSIGNMENT, res)))
  },

  getComments: (id) => (dispatch, getState) => {
    return AssignmentAPI.requestGetComments(id)
        .then(res => dispatch(createAction(AT.GET_COMMENTS, res)))
  },

  postAttachment: (args) => (dispatch, getState) => {
      return new Promise((resolve, reject) => {
          AssignmentAPI.requestPostAttachment(args)
              .then(res => {
                  dispatch(createAction(AT.POST_ATTACHMENT, res))
                  resolve(res)
              })
      })
  },

  postAssignment: (args) => (dispatch, getState) => {
      return AssignmentAPI.requestPostAssignment(args)
          .then(res => dispatch(createAction(AT.POST_ASSIGNMENT, res)))
  }
}
