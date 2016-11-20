/* External Dependencies */
import React from 'react'
import { withRouter } from 'react-router'

/* Internal Dependencies */
import styles from './UserInfoContainer.scss'
import Avatar from '../../components/Avatar'

class UserInfoContainer extends React.Component {

  constructor() {
    super()
    this.handleClickSignout = this.handleClickSignout.bind(this)
  }

  handleClickSignout() {
    window.localStorage.removeItem('smp-token')
    this.props.router.push('/signin');
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <Avatar/>
        <div className={styles.info}>
          <p>
            <span>7기</span>
            <span>장준하</span>
          </p>
          <p>
            <span>멘티</span>
          </p>
        </div>
        <button onClick={this.handleClickSignout}>
          logout
        </button>
      </div>
    )
  }

}

UserInfoContainer = withRouter(UserInfoContainer)

export default UserInfoContainer
