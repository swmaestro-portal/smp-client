import { UserAPI } from '../apis'
import createAction from './createAction'
import AT from './ActionTypes'

export default {
  signin: (user) => (dispatch, getState) => {
    return UserAPI.requestSignin(user.username, user.password)
      .then(res => dispatch(createAction(AT.SIGNIN, res))
    )
  },

  signup: (user) => (dispatch, getState) => {
    return UserAPI.requestSignup(user)
      .then(res => dispatch(createAction(AT.SIGNUP, res)))
  },

  getUsers: () => (dispatch, getState) => {
    return UserAPI.requestGetUsers()
      .then(res => dispatch(createAction(AT.GET_USERS, res)))
  },

  getUser: (id) => (dispatch, getState) => {
    return UserAPI.requestGetUser(id)
      .then(res => dispatch(createAction(AT.GET_USER, res)))
  },

  putUser: (id, user) => (dispatch, getState) => {
    return UserAPI.requestPutUser(id, user)
      .then(res => dispatch(createAction(AT.PUT_USER, res)))
  }
}
