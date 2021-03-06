import AT from '../actions/ActionTypes'
import Lectures from '../models/LecturesModel'

const initialState = {
  lectures: Lectures.setInstance()
}

export default function(state = initialState, action) {
  // console.log('_lectures', state, action)

  switch (action.type) {

    case AT.GET_LECTURES:
      return {
        ...state,
        lectures: Lectures.setInstance(action.payload)
      }

    default:
      return state
  }
}
