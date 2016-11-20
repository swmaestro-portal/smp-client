import AT from '../actions/ActionTypes'
import Assignments from '../models/AssignmentsModel'

const initialState = {
  assignments: Assignments.setInstance()
}

export default function(state = initialState, action) {
  // console.log('_lectures', state, action)

  switch (action.type) {

    case AT.GET_ASSIGNMENTS:
      return {
        ...state,
        assignments: Assignments.setInstance(action.payload)
      }

    default:
      return state
  }
}
