/* External Dependencies */
import React from 'react'
import { connect } from 'react-redux'

/* */
import styles from './UserContainer.scss'
import { userActions } from '../../actions'
import User from '../../components/User'

class UserContainer extends React.Component {

  constructor() {
    super()
  }

  componentWillMount() {
    const id = this.props.params.userID
    this.props.dispatch(userActions.getUser(id))
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <User user={this.props.user} userID={this.props.params.userID}>
        </User>
      </div>
    )
  }

}

const mapStateToProps = (state/*, props*/) => {
  return {
    user: state.userReducer.user
  }
}

UserContainer = connect(mapStateToProps)(UserContainer)

export default UserContainer
