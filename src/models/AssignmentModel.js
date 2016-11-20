/* */
import Immutable from 'immutable'

class AssignmentModel {

  constructor(assignment = {}) {
    return Immutable.fromJS(assignment)
  }

}

export default AssignmentModel
