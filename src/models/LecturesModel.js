/* */
import Immutable from 'immutable'

/* Internals */
import Lecture from './LectureModel'

class LecturesModel {

  constructor() {
    console.warn('DO NOT instantiate LecturesModel')
  }

  static setInstance(lectures = null) {
    if (lectures == null) {
      return Immutable.List()
    }
  
    return Immutable.List(
      lectures.map(elem => new Lecture(elem))
    )
  }

  static updateInstance(_lectures, lectures) {
    lectures.map((lecture) => {
      if (_lectures.filter((_lecture) => _lecture.get('articleId') == lecture.lectureId).size === 0) {
        // Append if not exists
        _lectures = _lectures.push(new Lecture(lecture))
      } else {
        // Update if exists
        _lectures = _lectures.map((elem) => {
          return elem.articleId === lecture.articleId ?
              new Lecture(lecture)
            : elem
        })
      }
    })

    return _lectures
  }

}

export default LecturesModel
