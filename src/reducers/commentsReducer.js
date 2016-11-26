import AT from '../actions/ActionTypes'
import Comments from '../models/CommentsModel'

const initialState = {
  comments: Comments.setInstance()
}

export default function(state = initialState, action) {
  // console.log('_comments', state, action)

  switch (action.type) {

    case AT.GET_COMMENTS:
      return {
        ...state,
        comments: Comments.setInstance(action.payload)
      }

    default:
      return state
  }
}
