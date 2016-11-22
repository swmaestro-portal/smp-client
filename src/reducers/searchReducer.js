import AT from '../actions/ActionTypes'
import Assignments from '../models/AssignmentsModel'
import Users from '../models/UsersModel'
import Lectures from '../models/LecturesModel'

const initialState = {
  assignments: Assignments.setInstance(),
  lectures: Lectures.setInstance(),
  users: Users.setInstance()
}

export default function(state = initialState, action) {
  console.log('_search', state, action)

  switch (action.type) {

    case AT.GET_SEARCH:
      return {
        ...state,
        users: Users.setInstance(action.payload.users),
        lectures: Lectures.setInstance(action.payload.lectures),
        assignments: Assignments.setInstance(action.payload.assignments)
      }

    default:
      return state
  }
}
