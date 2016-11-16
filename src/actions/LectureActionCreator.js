import { LectureAPI } from '../apis'
import air from './air'
import AT from './ActionTypes'


export default {
  getLectures: (user) => (dispatch, getState) => {
    return LectureAPI.requestGetLectures()
      .then(res => dispatch(air(AT.GET_LECTURES, res)))
  }
}
