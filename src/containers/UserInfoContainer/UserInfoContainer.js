/* External Dependencies */
import React from 'react'
import { withRouter } from 'react-router'

/* Internal Dependencies */
import styles from './UserInfo.scss'

class UserInfoContainer extends React.Component {

  constructor() {
    super()
    this.handleClickSignout = this.handleClickSignout.bind(this)
  }

  handleClickSignout() {
    window.sessionStorage.removeItem('smp-token')
    this.props.router.push('/signin');
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.avatar}>
          <i className="fa fa-user-circle" aria-hidden="true"/>
        </div>
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
