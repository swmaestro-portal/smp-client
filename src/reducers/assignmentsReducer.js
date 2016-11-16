import AT from '../actions/ActionTypes'
import Assignments from '../models/AssignmentsModel'

const initialState = {
  assignments: Assignments.getInstance()
}

export default function (state = initialState, action) {
  console.log('_assignments', state, action)

  switch (action.type) {
    
    // const _lectures = state.

    case AT.GET_ASSIGNMENTS:
      return {
        ...state,
        assignments: Assignments.setInstance(action.payload)
      }

    default:
      return state
  }
}
