/* Internals */

module.exports = {
  lecturesSelector: (state) => state.lecturesReducer.lectures,
  lectureSelector: (state) => state.lectureReducer.lecture,
  commentsSelector: (state) => state.commentsReducer.comments
}
