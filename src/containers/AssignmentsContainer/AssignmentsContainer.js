/* External Dependencies */
import React from 'react'
import { connect } from 'react-redux'

/* */
import styles from './AssignmentsContainer.scss'
import { assignmentActions } from '../../actions'
import Assignments from '../../components/Assignments'

class AssignmentsContainer extends React.Component {

  constructor() {
    super()
  }

  componentWillMount() {
    this.props.dispatch(assignmentActions.getLectures())
  }

  render() {
    return (
      <Assignments assignments={this.props.assignments}/>
    )
  }

}

const mapStateToProps = (state/*, props*/) => {
  return {
    assignments: state.assignmentsReducer.assignments
  }
}

AssignmentsContainer = connect(mapStateToProps)(AssignmentsContainer)

export default AssignmentsContainer
