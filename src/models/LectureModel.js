/* */
import Immutable from 'immutable'

class LectureModel {

  constructor(lecture) {
    return Immutable.fromJS(lecture)
  }

  // static setInstance(lecture) {
  //   return Immutable.fromJS(lecture)
  // }

  // static updateInstance(lecture, newLecture) {
  //   for (var key in newLecture) {
  //     lecture = lecture.set(key, newLecture['key'])
  //   }
  //
  //   return lecture
  // }

}

export default LectureModel
