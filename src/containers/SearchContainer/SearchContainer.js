/* External Dependencies */
import React from 'react'
import { connect } from 'react-redux'

/* Internals */
import styles from './SearchContainer.scss'
import { searchActions } from '../../actions'
import { combinedAssignmentsSelector } from '../../selectors'
import SearchedList from '../../components/SearchedList'

class SearchContainer extends React.Component {

  constructor() {
    super()
  }


  render() {
    return (
        <div className={styles.wrapper}>
          <SearchedList users={this.props.users} lectures={this.props.lectures}
          assignments={this.props.assignments}/>
        </div>
    )
  }

}

const mapStateToProps = (state/*, props*/) => {
  return {
    users: state.searchReducer.users,
    assignments: state.searchReducer.assignments,
    lectures: state.searchReducer.lectures,
  }
}

SearchContainer = connect(mapStateToProps)(SearchContainer)

export default SearchContainer
