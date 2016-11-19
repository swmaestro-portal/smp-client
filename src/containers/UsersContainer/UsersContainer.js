/* External Dependencies */
import React from 'react'
import { connect } from 'react-redux'

/* Internals */
import styles from './UsersContainer.scss'
import { userActions } from '../../actions'
import Users from '../../components/Users'

class UsersContainer extends React.Component {

  constructor() {
    super()
  }

  componentWillMount() {
    this.props.dispatch(userActions.getUsers())
  }

  render() {
    return (
      <Users users={this.props.users}>
      </Users>
    )
  }

}
                                                  
const mapStateToProps = (state/*, props*/) => {
  return {
    users: state.usersReducer.users
  }
}

UsersContainer = connect(mapStateToProps)(UsersContainer)

export default UsersContainer
