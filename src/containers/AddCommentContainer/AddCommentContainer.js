/* External Dependencies */
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

/* Internals */
import styles from './AddCommentContainer.scss'
import { combinedLecturesSelector } from '../../selectors'
import AddComment from '../../components/AddComment'
import { lectureActions, commentActions } from '../../actions'

class AddCommentContainer extends React.Component {

  constructor() {
    super()
    this.handleClickSubmit = this.handleClickSubmit.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  handleClickSubmit() {
    this.submit()
  }

  handleKeyDown(event) {

  }

  submit() {
    let arg = {}
    arg.data = {}
    let commentTextArea = document.getElementById('smp-AddComment-textarea')
    if (commentTextArea.value === "") {
      window.alert('내용을 입력해주세요.')
      return;
    }
    arg.data.commentContent = commentTextArea.value
    arg.data.commentParentId = ''
    arg.articleType = this.props.articleType
    arg.articleId = this.props.articleId

    this.props.dispatch(commentActions.postComment(arg))
        .then(res => {
          this.props.dispatch(lectureActions.getComments(arg.articleId))
          commentTextArea.value = ""
        })

  }

  render() {
    return (
      <AddComment
        handleClickSubmit={this.handleClickSubmit} handleKeyDown={this.handleKeyDown}/>
    )
  }

}

const mapStateToProps = (state/*, props*/) => {
  return {
  }
}

AddCommentContainer = connect(mapStateToProps)(AddCommentContainer)
AddCommentContainer = withRouter(AddCommentContainer)

export default AddCommentContainer
