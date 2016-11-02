/* External Dependencies */
import React from 'react'
import { connect } from 'react-redux'

/* Internal Dependencies */
import styles from './MainMenu.scss'
import * as LectureActionCreator from '../../actions/LectureActionCreator'

class MainMenu extends React.Component {

  constructor() {
    super()
    this.handleClickLectures = this.handleClickLectures.bind(this)
  }

  handleClickLectures(event) {
    this.props.dispatch(LectureActionCreator.getLectures())
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <ul>
          <li>회원관리</li>
          <li>과제관리</li>
          <li className="">
            <span onClick={this.handleClickLectures}>
              강의관리
            </span>
          </li>
          <li>MyPage</li>
        </ul>
      </div>
    )
  }

}

const ConnectedMainMenu = connect()(MainMenu)

export default ConnectedMainMenu
