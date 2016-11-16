/* */
import Immutable from 'immutable'

class LectureModel {

  constructor() {
    console.warn('DO NOT instantiate LectureModel')
  }

  static setInstance(lecture=null) {
    if (lecture == null) {
      return Immutable.Map()
    }

    return Immutable.fromJS(lecture)
  }

  static updateInstance(lecture, newLecture) {
    for (var key in newLecture) {
      lecture = lecture.set(key, newLecture['key'])
    }

    return lecture
  }

}

export default LectureModel
