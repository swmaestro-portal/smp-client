/* */
import Immutable from 'immutable'

/* */
import Lecture from './LectureModel'

class LecturesModel {

  constructor() {
    console.warn('DO NOT instantiate LecturesModel')
  }

  static setInstance(lectures=null) {
    if (lectures == null) {
      return Immutable.List()
    }

    return Immutable.List(
      lectures.map(elem => { return Lecture.setInstance(elem) })
    )
  }

  static updateInstance(lectures, newLectures) {
    newLectures.map((lecture) => {
      if (lectures.filter((existsLecture) => { return existsLecture.get('articleId') == lecture.lectureId }).size == 0) {
        // Append if not exists
        lectures = lectures.push(Lecture.setInstance(lecture))
      } else {
        // Update if exists
        lectures = lectures.map((existsLecture) => {
          return existsLecture.articleId == lecture.articleId ? Lecture.updateInstance(existsLecture, lecture) : existsLecture
        })
      }
    })

    return lectures
  }

}

export default LecturesModel
