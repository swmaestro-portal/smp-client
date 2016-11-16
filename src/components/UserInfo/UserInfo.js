/* External Dependencies */
import React from 'react'
import { withRouter } from 'react-router'

/* Internal Dependencies */
import styles from './UserInfo.scss'

class UserInfo extends React.Component {

  constructor() {
    super()
    this.handleClickSignout = this.handleClickSignout.bind(this)
  }

  componentWillMount() {
    console.log('UserInfo mount')
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
          <p>7기</p>
          <p>장준하</p>
          <p>멘티</p>
        </div>
        <button 
          className=""
          onClick={this.handleClickSignout}>
          logout
        </button>
      </div>
    )
  }

}

const routedUserInfo = withRouter(UserInfo)

export default routedUserInfo
