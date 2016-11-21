/* External Dependencies */
import React from 'react'
import { connect } from 'react-redux'

/* Internals */
import styles from './SearchContainer.scss'
import { searchActions } from '../../actions'
import { combinedAssignmentsSelector } from '../../selectors'
import AssignmentList from '../../components/AssignmentList'
import LectureList from '../../components/LectureList'
import Users from '../../components/Users'

class SearchContainer extends React.Component {

  constructor() {
    super()
  }

  render() {
    return (
        <div className={styles.wrapper}>
          <Users users={this.props.users}/>
          <AssignmentList assignments={this.props.assignments}/>
          <LectureList lectures={this.props.lectures}/>
        </div>
    )
  }

}

const mapStateToProps = (state/*, props*/) => {
  console.log(1,state)
  return {
    users: state.searchReducer.users,
    assignments: state.searchReducer.assignments,
    lectures: state.searchReducer.lectures,
  }
}

SearchContainer = connect(mapStateToProps)(SearchContainer)

export default SearchContainer
