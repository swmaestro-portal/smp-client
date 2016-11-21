/* External Dependencies */
import React from 'react'
import { connect } from 'react-redux'

/* Internals */
import styles from './AssignmentsContainer.scss'
import { assignmentActions } from '../../actions'
import { combinedAssignmentsSelector } from '../../selectors'
import AssignmentList from '../../components/AssignmentList'

class SearchContainer extends React.Component {

  constructor() {
    super()
  }

  componentWillMount() {
    this.props.dispatch(assignmentActions.getAssignments())
  }

  render() {
    return (
        <AssignmentList assignments={this.props.assignments}/>
    )
  }

}

const mapStateToProps = (state/*, props*/) => {
  return {
    assignments: combinedAssignmentsSelector(state)
  }
}

SearchContainer = connect(mapStateToProps)(SearchContainer)

export default SearchContainer
