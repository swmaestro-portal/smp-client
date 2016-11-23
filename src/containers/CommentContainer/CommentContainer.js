/* External Dependencies */
import React from 'react'
import { connect } from 'react-redux'
import Immutable from 'immutable'

/* Internals */
import styles from './CommentContainer.scss'
import { commentsSelector } from '../../selectors/default'
import { commentActions } from '../../actions'
import CommentList from '../../components/CommentList'
import AddComment from '../AddCommentContainer'
import { HashLinkUtils } from '../../utils'

class CommentContainer extends React.Component {

  constructor() {
    super()

    this.state = {
      commentsIsFetched: false
    }

    this.handleEditComment = this.handleEditComment.bind(this)
  }

  componentWillMount() {
    const type = this.props.articleType
    const id = this.props.articleId

    this.props.dispatch(commentActions.getComments(type, id))
      .then(() => { this.setState({commentsIsFetched: true}) })
      .then(HashLinkUtils.hashLinkScroll)
  }

  handleEditComment(commentId, comment) {
    this.props.dispatch(commentActions.putComment(commentId, comment))
      .then(() => {
        alert('Edited!')
      })
  }

  render() {
    if (!this.state.commentsIsFetched) return <div />
    return (
      <div>
        <AddComment
          articleType={this.props.articleType}
          articleId={this.props.articleId}/>
        <CommentList comments={this.props.comments || Immutable.List()} handleEditComment={this.handleEditComment} me={this.props.me} />
      </div>
    )
  }

}

const mapStateToProps = (state, props) => {
  return {
    comments: commentsSelector(state),
    me: state.meReducer.me
  }
}

CommentContainer = connect(mapStateToProps)(CommentContainer)

export default CommentContainer
