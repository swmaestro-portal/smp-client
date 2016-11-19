import AT from '../actions/ActionTypes'
import Comments from '../models/CommentsModel'

const initialState = {
  comments: Comments.setInstance()
}

export default function(state = initialState, action) {
  console.log('_comments', state, action)

  switch (action.type) {

    case AT.GET_COMMENTS:
      return {
        ...state,
        comments: Comments.setInstance(action.payload)
      }

    case AT.GET_LECTURE:
      return {
        ...state,
        comments: Comments.updateInstance(state.comments, [action.payload])
      }

    default:
      return state
  }
}
