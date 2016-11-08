/* External Dependencies */
import React from 'react'

/* Internal Dependencies */
import styles from './UserInfo.scss'

class UserInfo extends React.Component {

  componentWillMount() {
    console.log('UserInfo mount')
  }


  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.avatar}>
          <i className="fa fa-user-circle" aria-hidden="true"/>
        </div>
        <div className={styles.info}>
          <li>
            <i className="fa fa-address-card-o" aria-hidden="true"/>
          </li>

          <p>7기</p>
          <p>장준하</p>
          <p>멘티</p>
        </div>
      </div>
    )
  }

}

export default UserInfo
