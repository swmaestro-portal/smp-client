/* Internals */

module.exports = {
  lecturesSelector: (state) => state.lecturesReducer.lectures,
  lectureSelector: (state) => state.lectureReducer.lecture,
  assignmentsSelector: (state) => state.assignmentsReducer.assignments,
  assignmentSelector: (state) => state.assignmentReducer.assignment,
  commentsSelector: (state) => state.commentsReducer.comments
}
