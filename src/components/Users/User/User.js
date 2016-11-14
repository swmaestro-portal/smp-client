/* External Dependencies */
import React from 'react'
import { withRouter } from 'react-router'
import classNames from 'classnames'

/* Internal Dependencies */
import styles from './User.scss'
import usersStyles from '../Users.scss'
import Link from '../../Link'

const User = (props) => {
  function formatGroups(groups) {
    if (groups == null || groups.size == 0) return ''

    const sorted = groups.sort((a, b) => { return a.get('generationId') < b.get('generationId') })
    const firstGroup = sorted.first()

    var groupName = ''
    if (firstGroup.get('groupCode') == 0) groupName = '멘티'
    if (firstGroup.get('groupCode') == 1) groupName = '멘토'
    if (firstGroup.get('groupCode') == 2) groupName = '관리자'

    var str = firstGroup.get('generationId') + '기 ' + groupName
    if (groups.size > 1) {
      str = str + ' …'
    }

    return str
  }

  function formatGender(str) {
    if (str == '0') return '여'
    if (str == '1') return '남'
  }

  function formatSignupDate(str) {
    return new Date(str).toISOString().slice(0, 10)
  }

  function formatStatus(str) {
    if (str == 'A') return ''
    if (str == 'R') return '승인요청'
    if (str == 'D') return '탈퇴'
  }

  return (
    <Link to={"/users/" + props.user.get('userId')}>
      <div className={classNames(styles.wrapper, {[styles.firstItem]: props.idx === 0}, props.className)}>
        <div className={usersStyles.cellId}>{props.user.get('userId')}</div>
        <div className={usersStyles.cellName}>{props.user.get('userName')}</div>
        <div className={usersStyles.cellEmail}>{props.user.get('userEmail')}</div>
        <div className={usersStyles.cellGroup}>{formatGroups(props.user.get('userGroups'))}</div>
        <div className={usersStyles.cellPhone}>{props.user.get('userPhone')}</div>
        <div className={usersStyles.cellGender}>{formatGender(props.user.get('userGender'))}</div>
        <div className={usersStyles.cellSignupDate}>{formatSignupDate(props.user.get('userCreatedAt'))}</div>
        <div className={usersStyles.cellStatus}>{formatStatus(props.user.get('userStatus'))}</div>
      </div>
    </Link>
  )
}

export default User
