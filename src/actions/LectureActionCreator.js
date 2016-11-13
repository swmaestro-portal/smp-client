import { LectureAPI } from '../apis'
import air from './air'
import AT from './ActionTypes'


export default {
  getLectures: (user) => (dispatch, getState) => {
    LectureAPI.requestGetLectures()
      .then(res => air(AT.GET_LECTURES, res))
  }
}
