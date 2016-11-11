/* External Dependencies */
import React from 'react'
import { connect } from 'react-redux'

/* Internal Dependencies */
import styles from './GeneralMenu.scss'
import * as LectureActionCreator from '../../actions/LectureActionCreator'

class GeneralMenu extends React.Component {

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

          <li className={styles.item}>
            <i className="fa fa-barcode" aria-hidden="true"/>
            <span>SW Maestro</span>
          </li>
          <li className={styles.item}>
            <i className="fa fa-user-o" aria-hidden="true"/>
            <span>공지사항</span>
          </li>
          <li className={styles.item}>
            <i className="fa fa-rocket" aria-hidden="true"/>
            <span>지원</span>
          </li>
          <li className={styles.item}>
            <i className="fa fa-address-card-o" aria-hidden="true"/>
            <span>사람들</span>
          </li>
        </ul>
      </div>
    )
  }

}

const ConnectedGeneralMenu = connect()(GeneralMenu)

export default ConnectedGeneralMenu
