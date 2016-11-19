/* External Dependencies */
import React from 'react'
import { connect } from 'react-redux'

/* */
import styles from './UserEditContainer.scss'
import { userActions } from '../../actions'
import UserEdit from '../../components/UserEdit'

class UserEditContainer extends React.Component {

  constructor() {
    super()
  }

  componentWillMount() {
    const id = this.props.params.userID
    this.props.dispatch(userActions.getUser(id))
  }

  handleClickUserEdit(event) {
    const inputs = document.querySelectorAll('#useredit-form input, #useredit-form select')
    let arr = [], ret = {}

    arr.forEach.call(inputs, function(elem) {
      ret[elem.name] = elem.value
    })

    // TODO: then -> Feedback, refresh page
    this.props.dispatch(userActions.putUser(this.props.params.userID, ret))
      .then(this.props.router.push(`/users/${this.props.params.userID}/edit`))
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <UserEdit user={this.props.user} handleClickUserEdit={this.handleClickUserEdit.bind(this)}>
        </UserEdit>
      </div>
    )
  }

}

const getTargetUser = (users, id) => {
  return users.filter((user) => { return user.get('userId') == id }).first()
}

const mapStateToProps = (state, props) => {
  return {
    user: getTargetUser(state.usersReducer.users, props.params.userID)
  }
}

UserEditContainer = connect(mapStateToProps)(UserEditContainer)

export default UserEditContainer
