/* External Dependencies */
import React from 'react'
import classNames from 'classnames'

/* Internal Dependencies */
import styles from './LeftBar.scss'
import MainMenu from '../MainMenu'
import Logo from '../Logo'
import UserInfo from '../UserInfo'

class LeftBar extends React.Component {

  componentWillMount() {
    console.log('LeftBar mount')
  }

  render() {
    return (
      <div
        className={classNames(styles.wrapper, this.props.className)}>
        <div className={styles.offset}></div>
        <div className={styles.content}>
          <Logo/>
          <UserInfo/>
          <MainMenu/>
          <div>List of tasks</div>
        </div>
      </div>
    )
  }

}

export default LeftBar
