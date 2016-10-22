export function getTime(delay) {
  return {
    types: ['GET_TIME_REQUEST', 'GET_TIME_SUCCESS', 'GET_TIME_FAILURE'],
    promise: () => {
      
      return new Promise((resolve, reject) => {
        // todo: api call
          resolve({
            time: `power`
          })
        }
      )
    }
  }
}
