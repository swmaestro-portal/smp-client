/* Internals */

module.exports = {
  lecturesSelector: (state) => state.lecturesReducer.lectures,
  assignmentsSelector: (state) => state.assignmentsReducer.assignments

}
