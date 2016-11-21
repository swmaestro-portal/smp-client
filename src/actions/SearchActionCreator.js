import { SearchAPI } from '../apis'
import createAction from './createAction'
import AT from './ActionTypes'

export default {
  getAll: (query) => (dispatch, getState) => {
    return SearchAPI.requestGetAll(query)
      .then(res => dispatch(createAction(AT.GET_SEARCH, res)))
  },
}
