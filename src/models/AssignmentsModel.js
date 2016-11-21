/* */
import Immutable from 'immutable'

/* Internals */
import Assignment from './AssignmentModel'

class AssignmentsModel {

  constructor() {
    console.warn('NOT INSTANTIABLE')
  }

  static setInstance(assignments = null) {
    if (assignments == null) {
      return Immutable.List()
    }

    return Immutable.List(
        assignments.map(elem => new Assignment(elem))
    )
  }

  static updateInstance(_assignments, assignments) {
    assignments.map((assignment) => {
      if (_assignments.filter((_assignment) => _assignment.get('articleId') == assignment.assignmentId).size === 0) {
        // Append if not exists
        _assignments = _assignments.push(new Assignment(assignment))
      } else {
        // Update if exists
        _assignments = _assignments.map((elem) => {
          return elem.articleId === assignment.articleId ?
              new Assignment(assignment)
              : elem
        })
      }
    })

    return _assignments
  }

}

export default AssignmentsModel
