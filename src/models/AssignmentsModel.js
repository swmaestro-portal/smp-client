/* */
import Immutable from 'immutable'

/* */
import Assignment from './AssignmentModel'

let _assignments = Immutable.List()

class AssignmentsModel {
  
  constructor() {

  }
  
  static setInstance(assignment) {
    assignment.map((elem) => {
      _assignments = _assignments.push(new Assignment(elem))
    })
    return _assignments
  }
  
  static getInstance() {
    return _assignments
  }

}

export default AssignmentsModel
