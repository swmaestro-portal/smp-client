import AT from '../actions/ActionTypes'
import Users from '../models/UsersModel'

const initialState = {
  users: Users.setInstance()
}

export default function (state = initialState, action) {
  // console.log('_users', state, action)

  switch (action.type) {

    case AT.GET_USERS:
      return {
        ...state,
        users: Users.setInstance(action.payload)
      }

    default:
      return state
  }
}
