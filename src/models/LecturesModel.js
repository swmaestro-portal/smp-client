/* */
import Immutable from 'immutable'

/* */
import Lecture from './LectureModel'

let _lectures = Immutable.List()

class LecturesModel {
  
  constructor() {

  }
  
  static setInstance(lectures) {
    lectures.map((elem) => {
      _lectures = _lectures.push(new Lecture(elem))
    })
    return _lectures
  }
  
  static getInstance() {
    return _lectures
  }

}

export default LecturesModel
