/* External Dependencies */
import React from 'react'
import { connect } from 'react-redux'

/* */
import styles from './Assignments$.scss'
import { assignmentActions } from '../../actions'
import Assignments from '../../components/Assignments'

class Assignments$ extends React.Component {

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

const ConnectedAssignments$ = connect(mapStateToProps)(Assignments$)

export default ConnectedAssignments$
