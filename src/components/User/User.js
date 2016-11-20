/* External Dependencies */
import React from 'react'
import { withRouter } from 'react-router'
import classNames from 'classnames'

/* Internal Dependencies */
import styles from './User.scss'
import { FormatUtils } from '../../utils'
import Link from '../Link'

const User = (props) => {
  // props.user

  if (props.user == null) return (<div></div>)

  const fields = {
    group:
      <div className={styles.group} key="group">
        <div className={styles.label}>그룹</div>
        <div className={styles.content}>
          {props.user.get('userGroups').map((group) => FormatUtils.formatGroup(group)).join('<br>')}
        </div>
      </div>,
    name:
      <div className={styles.group} key="name">
        <div className={styles.label}>이름</div>
        <div className={styles.content}>
          {props.user.get('userName')}
        </div>
      </div>,
    email:
      <div className={styles.group} key="email">
        <div className={styles.label}>이메일</div>
        <div className={styles.content}>
          {props.user.get('userEmail')}
        </div>
      </div>,
    phone:
      <div className={styles.group} key="phone">
        <div className={styles.label}>휴대폰</div>
        <div className={styles.content}>
          {props.user.get('userPhone')}
        </div>
      </div>,
    gender:
      <div className={styles.group} key="gender">
        <div className={styles.label}>성별</div>
        <div className={styles.content}>
          {FormatUtils.formatGender(props.user.get('userGender'))}
        </div>
      </div>,
    signinDate:
      <div className={styles.group} key="signinDate">
        <div className={styles.label}>가입일</div>
        <div className={styles.content}>
          {FormatUtils.formatSignupDate(props.user.get('userCreatedAt'))}
        </div>
      </div>,
    status:
      <div className={styles.group} key="status">
        <div className={styles.label}>상태</div>
        <div className={styles.content}>
          {FormatUtils.formatStatus(props.user.get('userStatus'))}
        </div>
      </div>,
    editButton:
      <Link to={`/users/${props.userID}/edit`} key="editButton">수정하기</Link>
  }

  const usingFields = [
    fields.group,
    fields.name,
    fields.email
  ]

  if (props.isAdmin) {
    usingFields.push([
      fields.phone,
      fields.gender,
      fields.signinDate,
      fields.status,
      fields.editButton
    ])
  } else if (props.isMe) {
    usingFields.push([
      fields.phone,
      fields.gender,
      fields.signinDate,
      fields.editButton
    ])
  }

  return (
    <div className={styles.wrapper}>
      {usingFields}
    </div>
  )
}

// users: Immutable.List

export default User
