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

  return (
    <div className={styles.wrapper}>
      <div className={styles.group}>
        <div className={styles.label}>그룹</div>
        <div className={styles.content}>
          {props.user.get('userGroups').map((group) => FormatUtils.formatGroup(group)).join('<br>')}
        </div>
      </div>
      <div className={styles.group}>
        <div className={styles.label}>이름</div>
        <div className={styles.content}>
          {props.user.get('userName')}
        </div>
      </div>
      <div className={styles.group}>
        <div className={styles.label}>이메일</div>
        <div className={styles.content}>
          {props.user.get('userEmail')}
        </div>
      </div>
      <div className={styles.group}>
        <div className={styles.label}>휴대폰</div>
        <div className={styles.content}>
          {props.user.get('userPhone')}
        </div>
      </div>
      <div className={styles.group}>
        <div className={styles.label}>성별</div>
        <div className={styles.content}>
          {FormatUtils.formatGender(props.user.get('userGender'))}
        </div>
      </div>
      <div className={styles.group}>
        <div className={styles.label}>가입일</div>
        <div className={styles.content}>
          {FormatUtils.formatSignupDate(props.user.get('userCreatedAt'))}
        </div>
      </div>
      <div className={styles.group}>
        <div className={styles.label}>상태</div>
        <div className={styles.content}>
          {FormatUtils.formatStatus(props.user.get('userStatus'))}
        </div>
      </div>

      <Link to={`/users/${props.userID}/edit`}>수정하기</Link>
    </div>
  )
}

// users: Immutable.List

export default User
