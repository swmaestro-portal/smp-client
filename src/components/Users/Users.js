/* External Dependencies */
import React from 'react'
import { withRouter } from 'react-router'
import classNames from 'classnames'

/* Internal Dependencies */
import styles from './Users.scss'
import User from './User'

const Users = (props) => {
  const users = []
  props.users.map((elem, i) => users.push(<User key={i} idx={i} user={elem} className={styles.row} />))

  return (
    <div className={styles.wrapper}>
      <div className={classNames(styles.row, styles.header)}>
        <div className={styles.cellId}>번호</div>
        <div className={styles.cellName}>이름</div>
        <div className={styles.cellEmail}>이메일</div>
        <div className={styles.cellGroup}>그룹</div>
        <div className={styles.cellPhone}>전화번호</div>
        <div className={styles.cellGender}>성별</div>
        <div className={styles.cellSignupDate}>가입일</div>
        <div className={styles.cellStatus}>상태</div>
      </div>
      {users}
    </div>
  )
}

// users: Immutable.List

export default Users
