import * as LectureAPI from '../apis/LectureApi'
import ATG from './ActionTypeGenerator'

export function getLectures() {

  return {
    types: ATG('GET_LECTURES'),
    promise: () => {

      return LectureAPI.getLectures()
    }
  }
}
