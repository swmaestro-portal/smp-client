import { AssignmentAPI } from '../apis'
import air from './air'
import AT from './ActionTypes'


export default {
  getLectures: (user) => (dispatch, getState) => {
    return AssignmentAPI.requestGetAssignments()
      .then(res => dispatch(air(AT.GET_ASSIGNMENTS, res)))
  }
}
