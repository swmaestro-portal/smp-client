/* External Dependencies */
import React from 'react'
import { connect } from 'react-redux'

/* */
import styles from './UserContainer.scss'
import { userActions } from '../../actions'
import User from '../../components/User'
import Spinner from '../../components/Spinner'

class UserContainer extends React.Component {

  constructor() {
    super()
    this.state = {
      userIsFetched: false
    }
  }

  componentWillMount() {
    const id = this.props.params.userID

    this.props.dispatch(userActions.getUser(id))
      .then(() => {
        this.setState({userIsFetched: true})
      })
  }

  render() {
    if (!this.state.userIsFetched) {
      return <Spinner />
    }
    return (
      <div className={styles.wrapper}>
        <User user={this.props.user}
              userID={this.props.params.userID}
              isMe={this.props.me.get('userId') == this.props.user.get('userId')}
              isAdmin={this.props.me.get('isAdmin')}>
        </User>
      </div>
    )
  }

}

const mapStateToProps = (state/*, props*/) => {
  return {
    user: state.userReducer.user,
    me: state.meReducer.me
  }
}

UserContainer = connect(mapStateToProps)(UserContainer)

export default UserContainer
