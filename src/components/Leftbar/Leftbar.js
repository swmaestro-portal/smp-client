/* External Dependencies */
import React from 'react'
import classNames from 'classnames'
import { withRouter } from 'react-router'

/* Internal Dependencies */
import styles from './Leftbar.scss'
import GeneralMenu from './Menu/GeneralMenu'
import MemberMenu from './Menu/MemberMenu'
import UserInfoContainer from '../../containers/UserInfoContainer'
import NotificationsContainer from '../../containers/NotificationsContainer'

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
          <UserInfoContainer/>
          <GeneralMenu/>
          <MemberMenu/>
          <NotificationsContainer />
        </div>
      </div>
    )
  }
}

const routedLeftbar = withRouter(Leftbar)

export default routedLeftbar
