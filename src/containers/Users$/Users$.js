/* External Dependencies */
import React from 'react'
import { connect } from 'react-redux'

/* */
import styles from './Users$.scss'
import { userActions } from '../../actions'
import Users from '../../components/Users'

class Users$ extends React.Component {

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

const ConnectedUsers$ = connect(mapStateToProps)(Users$)

export default ConnectedUsers$
