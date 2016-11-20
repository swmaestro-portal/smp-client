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
  }

  handleClickSubmit() {
    let arg = {}
    arg.data = {}
    arg.data.commentContent = document.getElementById('smp-AddComment-textarea').value
    arg.data.commentParentId = ''
    arg.articleType = this.props.articleType
    arg.articleId = this.props.articleId
    
    this.props.dispatch(commentActions.postComment(arg))
      .then(res => {
        this.props.dispatch(lectureActions.getComments(arg.articleId))

      })
  }

  render() {
    return (
      <AddComment
        handleClickSubmit={this.handleClickSubmit}/>
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
