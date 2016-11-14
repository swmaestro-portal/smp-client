import * as API from './lib.js'

export default {
  requestSignin: function(username, password) {
    return API.get(`auth/token?email=${username}&password=${password}`)
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

  requestGetUsers: function() {
    return API.get(`users`)
  },
}
