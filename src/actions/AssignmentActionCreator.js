import { AssignmentAPI } from '../apis'
import createAction from './createAction'
import AT from './ActionTypes'


export default {
  getLectures: (user) => (dispatch, getState) => {
    return AssignmentAPI.requestGetAssignments()
      .then(res => dispatch(createAction(AT.GET_ASSIGNMENTS, res)))
  }
}
