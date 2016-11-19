import AT from '../actions/ActionTypes'
import Lecture from '../models/LectureModel'

const initialState = {
  lecture: new Lecture()
}

export default function(state = initialState, action) {
  console.log('_lecture', state, action)
  
  switch (action.type) {
    
    case AT.GET_LECTURE:
      return {
        ...state,
        lecture: new Lecture(action.payload)
      }
    
    default:
      return state
  }
}
