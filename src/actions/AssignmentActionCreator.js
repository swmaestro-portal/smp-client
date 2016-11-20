import { AssignmentAPI } from '../apis'
import createAction from './createAction'
import AT from './ActionTypes'

export default {
  getAssignments: () => (dispatch, getState) => {
    return AssignmentAPI.requestGetAssignments()
        .then(res => dispatch(createAction(AT.GET_ASSIGNMENTS, res)))
  },

  getAssignment: (id) => (dispatch, getState) => {
    return AssignmentAPI.requestGetAssignment(id)
        .then(res => dispatch(createAction(AT.GET_ASSIGNMENT, res)))
  },

  getComments: (id) => (dispatch, getState) => {
    return AssignmentAPI.requestGetComments(id)
        .then(res => dispatch(createAction(AT.GET_COMMENTS, res)))
  }
}
