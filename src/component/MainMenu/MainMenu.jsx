/* External Dependencies */
import React from 'react'

/* Internal Dependencies */
import styles from './MainMenu.scss'

class MainMenu extends React.Component {

  componentWillMount() {
    console.log('MainMenu mount')
  }


  render() {
    return (
      <div className={styles.wrapper}>
        <ul>
          <li>회원관리</li>
          <li>과제관리</li>
          <li>강의관리</li>
          <li>MyPage</li>
        </ul>
      </div>
    )
  }

}

export default MainMenu
