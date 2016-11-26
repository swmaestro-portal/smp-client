import * as API from './lib.js'

export default {
  requestSignin: (username, password) => {
    return API.getToken(username, password)
  },

  requestSignup: (user) => {
    const data = {
      "userEmail": user.email,
      "userName": user.name,
      "userPassword": user.pw,
      "userGender": user.gender === 'male' ? 1 : 0,
      "userPhone": user.tel
    }
    console.log(1, data)

    return API.post(`users`, data)
  },

  requestGetMe: () => {
    return API.get(`users/me`)
  },

  requestGetUsers: () => {
    return API.get(`users`)
  },

  requestGetUser: (id) => {
    return API.get(`users/${id}`)
  },

  requestPutUser: (id, user) => {
    const data = {
      "userName": user.name,
      "userGender": user.gender,
      "userPhone": user.phone,
      "userStatus": user.status,
    }

    if (user.password.length > 0) {
      data["userPassword"] = user.password
    }

    return API.put(`users/${id}`, data)
  }
}
