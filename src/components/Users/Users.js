/* External Dependencies */
import React from 'react'
import { withRouter } from 'react-router'
import classNames from 'classnames'

/* Internal Dependencies */
import styles from './Users.scss'
import User from './User'

const Users = (props) => {
  const users = []
  props.users.map((elem, i) => users.push(<User key={i} idx={i} user={elem} className={styles.row} isAdmin={props.isAdmin} />))

  return (
    <div className={styles.wrapper}>
      <div className={classNames(styles.row, styles.header)}>
        <div className={styles.cellId} hidden={!props.isAdmin}>번호</div>
        <div className={styles.cellGroup}>그룹</div>
        <div className={styles.cellName}>이름</div>
        <div className={styles.cellEmail}>이메일</div>
        <div className={styles.cellPhone} hidden={!props.isAdmin}>전화번호</div>
        <div className={styles.cellGender} hidden={!props.isAdmin}>성별</div>
        <div className={styles.cellSignupDate} hidden={!props.isAdmin}>가입일</div>
        <div className={styles.cellStatus} hidden={!props.isAdmin}>상태</div>
      </div>
      {users}
    </div>
  )
}

// users: Immutable.List

export default Users
