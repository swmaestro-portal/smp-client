/* External Dependencies */
import React from 'react'
import classNames from 'classnames'
import { withRouter } from 'react-router'

/* Internal Dependencies */
import styles from './LeftBar.scss'
import MainMenu from '../MainMenu'
import Logo from '../Logo/Logo'
import UserInfo from '../UserInfo'

class LeftBar extends React.Component {

  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  componentWillMount() {
    console.log('LeftBar mount')
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
          <div>
            List of tasks
            <button
              onClick={this.handleClick}>
              button
            </button>
          </div>
        </div>
      </div>
    )
  }
}

const routedLeftbar = withRouter(LeftBar)

export default routedLeftbar
