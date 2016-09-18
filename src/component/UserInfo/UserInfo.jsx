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
        <p>7기</p>
        <p>장준하</p>
        <p>멘티</p>
      </div>
    )
  }

}

export default UserInfo
