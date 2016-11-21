/* External Dependencies */
import React from 'react'
import { connect } from 'react-redux'
import Immutable from 'immutable'

/* Internals */
import styles from './AssignmentContainer.scss'
import { assignmentActions } from '../../actions'
import Assignment from '../../components/Assignment'
import { combinedAssignmentSelector } from '../../selectors'
import { HashLinkUtils } from '../../utils'

class AssignmentContainer extends React.Component {

  constructor() {
    super()
  }

  componentWillMount() {
    const id = this.props.params.assignmentID
    this.props.dispatch(assignmentActions.getComments(id))
      .then(HashLinkUtils.hashLinkScroll)
    this.props.dispatch(assignmentActions.getAssignment(id))

  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(11, nextProps.assignment.toJS())
    return true
  }

  render() {
    console.log(1, this.props.assignment.toJS())
    return (
        <Assignment assignment={this.props.assignment}/>
    )
  }

}

const mapStateToProps = (state, props) => {
  return {
    assignment: combinedAssignmentSelector(state),
  }
}

AssignmentContainer = connect(mapStateToProps)(AssignmentContainer)

export default AssignmentContainer
