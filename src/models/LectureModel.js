/* */
import Immutable from 'immutable'

class LectureModel {
  
  constructor(lecture) {
    return Immutable.fromJS(lecture)
  }

}

export default LectureModel
