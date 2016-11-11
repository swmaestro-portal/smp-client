/* External Dependencies */
import React from 'react'
import classNames from 'classnames'
import { withRouter } from 'react-router'

/* Internal Dependencies */
import styles from './LeftBar.scss'
import MainMenu from '../MainMenu'
import UserInfo from '../UserInfo'
import Notifications from '../Notifications'

class LeftBar extends React.Component {

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
          <MainMenu/>
          <Notifications/>
        </div>
      </div>
    )
  }
}

const routedLeftbar = withRouter(LeftBar)

export default routedLeftbar
