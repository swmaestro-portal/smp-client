import AT from '../actions/ActionTypes'
import Assignment from '../models/AssignmentModel'

const initialState = {
  assignment: new Assignment()
}

export default function(state = initialState, action) {
  // console.log('_assignment', state, action)
  
  switch (action.type) {
    
    case AT.GET_ASSIGNMENT:
      return {
        ...state,
        assignment: new Assignment(action.payload)
      }
    
    default:
      return state
  }
}
