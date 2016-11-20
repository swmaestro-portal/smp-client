/* External Dependencies */
import Immutable from 'immutable'

/* Internals */
import AT from '../actions/ActionTypes'
import User from '../models/UserModel'

const initialState = {
  me: Immutable.Map()
}

export default function(state = initialState, action) {
  console.log('_me', state, action)

  switch (action.type) {

    case AT.GET_ME:
      let me = new User(action.payload)

      // Set custom properties
      me = me.set('isMentee', false)
      me = me.set('isMentor', false)
      me = me.set('isAdmin', false)

      let lastGroup = null
      let adminGroup = null

      me.get('userGroups').map((group) => {
        if (lastGroup == null || group.get('generationId') > lastGroup.get('generationId')) {
          lastGroup = group
        }

        switch (group.get('groupCode')) {
          case "0":
            me = me.set('isMentee', true)
            break;
          case "1":
            me = me.set('isMentor', true)
            break
          case "2":
            me = me.set('isAdmin', true)
            adminGroup = group
            break
        }
      })

      if (adminGroup != null) {
        me = me.set('lastGroup', adminGroup)
      } else {
        me = me.set('lastGroup', lastGroup)
      }

      return {
        ...state,
        me: me
      }

    default:
      return state
  }
}
