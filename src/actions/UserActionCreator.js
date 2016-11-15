import { UserAPI } from '../apis'
import air from './air'
import AT from './ActionTypes'

export default {
  signin: (user) => (dispatch, getState) => {
    return UserAPI.requestSignin(user.username, user.password)
      .then(res => dispatch(air(AT.SIGNIN, res))
    )
  },

  signup: (user) => (dispatch, getState) => {
    return UserAPI.requestSignup(user)
      .then(res => dispatch(air(AT.SIGNUP, res)))
  },

  getUsers: () => (dispatch, getState) => {
    return UserAPI.requestGetUsers()
      .then(res => dispatch(air(AT.GET_USERS, res)))
  },

  getUser: (id) => (dispatch, getState) => {
    return UserAPI.requestGetUser(id)
      .then(res => dispatch(air(AT.GET_USER, res)))
  }
}
