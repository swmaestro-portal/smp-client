/* External Dependencies */
import React from 'react'
import { connect } from 'react-redux'

/* Internals */
import styles from './UsersContainer.scss'
import { userActions } from '../../actions'
import Users from '../../components/Users'
import Spinner from '../../components/Spinner'

class UsersContainer extends React.Component {

  constructor() {
    super()
    this.state = {
      usersIsFetched: false
    }
  }

  componentWillMount() {
    this.props.dispatch(userActions.getUsers())
      .then(() => {
        this.setState({usersIsFetched: true})
      })
  }

  render() {
    if (!this.state.usersIsFetched) {
      return <Spinner />
    }

    return (
      <Users users={this.props.users} isAdmin={this.props.me.get('isAdmin')}>
      </Users>
    )
  }

}
                                                  
const mapStateToProps = (state/*, props*/) => {
  return {
    users: state.usersReducer.users,
    me: state.meReducer.me
  }
}

UsersContainer = connect(mapStateToProps)(UsersContainer)

export default UsersContainer
