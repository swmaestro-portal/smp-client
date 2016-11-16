import { LectureAPI } from '../apis'
import air from './air'
import AT from './ActionTypes'


export default {
  getLectures: () => (dispatch, getState) => {
    return LectureAPI.requestGetLectures()
      .then(res => dispatch(air(AT.GET_LECTURES, res)))
  },

  getLecture: (id) => (dispatch, getState) => {
    return LectureAPI.requestGetLecture(id)
      .then(res => dispatch(air(AT.GET_LECTURE, res)))
  }
}
