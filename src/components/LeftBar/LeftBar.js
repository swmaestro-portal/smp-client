/* External Dependencies */
import React from 'react'
import classNames from 'classnames'
import { withRouter } from 'react-router'

/* Internal Dependencies */
import styles from './Leftbar.scss'
import GeneralMenu from './Menu/GeneralMenu'
import MemberMenu from './Menu/MemberMenu'
import UserInfo from '../UserInfo'
import Notifications from '../Notifications'

class Leftbar extends React.Component {

  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    this.props.router.push('/signup')
  }

  render() {
    return (
      <div
        className={classNames(styles.wrapper, this.props.className)}>
        <div className={styles.content}>
          <UserInfo/>
          <GeneralMenu/>
          <MemberMenu/>
          <Notifications/>
        </div>
      </div>
    )
  }
}

const routedLeftbar = withRouter(Leftbar)

export default routedLeftbar
