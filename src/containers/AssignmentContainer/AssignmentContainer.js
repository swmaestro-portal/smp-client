/* External Dependencies */
import React from 'react'
import { connect } from 'react-redux'
import Immutable from 'immutable'

/* Internals */
import styles from './AssignmentContainer.scss'
import { assignmentActions } from '../../actions'
import Assignment from '../../components/Assignment'
import { combinedAssignmentSelector } from '../../selectors'

class AssignmentContainer extends React.Component {

  constructor() {
    super()
    this.state = {
      assignmentIsFetched: false
    }
  }

  componentWillMount() {
    const id = this.props.params.assignmentID
    this.props.dispatch(assignmentActions.getAssignment(id))
      .then(() => {
        this.setState({assignmentIsFetched: true})
      })

  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(11, nextProps.assignment.toJS())
    return true
  }

  render() {
    if (!this.state.assignmentIsFetched) {
      return <div />
    }
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
