/* */
import Immutable from 'immutable'

/* */
import Assignment from './AssignmentModel'

class AssignmentsModel {
  
  constructor() {

  }
  
  static setInstance(assignments) {
    if (assignments == null) {
      return Immutable.List()
    }
  
    return Immutable.List(
      assignments.map(assignment => new Assignment(assignment))
    )
  }
  

}

export default AssignmentsModel
