/* External Dependencies */
import React from 'react'
import { withRouter } from 'react-router'
import classNames from 'classnames'

/* Internal Dependencies */
import styles from './UserEdit.scss'
import { FormatUtils } from '../../utils'

const UserEdit = (props) => {
  // props.user

  if (props.user == null) return (<div></div>)

  return (
    <div className={styles.wrapper}>
      <form id="useredit-form">
        <div className={styles.group}>
          <div className={styles.label}>그룹</div>
          <div className={styles.content}>
            TODO:
          </div>
        </div>
        <div className={styles.group}>
          <div className={styles.label}>이름</div>
          <div className={styles.content}>
            <input type="text" name="name" defaultValue={props.user.get('userName')} />
          </div>
        </div>
        <div className={styles.group}>
          <div className={styles.label}>이메일</div>
          <div className={styles.content}>
            <p>{props.user.get('userEmail')}</p>
          </div>
        </div>
        <div className={styles.group}>
          <div className={styles.label}>비밀번호</div>
          <div className={styles.content}>
            <input type="password" name="password" defaultValue="" placeholder="(변경하지 않음)" />
          </div>
        </div>
        <div className={styles.group}>
          <div className={styles.label}>휴대폰</div>
          <div className={styles.content}>
            <input type="text" name="phone" defaultValue={props.user.get('userPhone')} />
          </div>
        </div>
        <div className={styles.group}>
          <div className={styles.label}>성별</div>
          <div className={styles.content}>
            <input type="radio" name="gender" id="gender-0" value="0" defaultChecked={props.user.get('userGender') == 0} />
            <label htmlFor="gender-0">여성</label>
            <input type="radio" name="gender" id="gender-1" value="1" defaultChecked={props.user.get('userGender') == 1} />
            <label htmlFor="gender-1">남성</label>
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
            <select name="status" id="status" defaultValue={props.user.get('userStatus')}>
              <option value="A">정상</option>
              <option value="R">가입요청</option>
              <option value="D">탈퇴</option>
            </select>
          </div>
        </div>

        <button type="button" onClick={props.handleClickUserEdit}>수정</button>
      </form>
    </div>
  )
}

// users: Immutable.List

export default UserEdit
