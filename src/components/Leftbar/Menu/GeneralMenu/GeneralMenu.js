/* External Dependencies */
import React from 'react'
import { connect } from 'react-redux'

/* Internal Dependencies */
import styles from './GeneralMenu.scss'
import MenuBase from '../MenuBase'
import Link from '../../../Link'

class GeneralMenu extends React.Component {

  constructor() {
    super()
  }

  render() {
    return (
      <MenuBase>
        <ul>
          <a href="http://swmaestro.kr/">
            <li>
              <i className="fa fa-barcode" aria-hidden="true"/>
              <span>SW Maestro</span>
            </li>
          </a>
          <a href="http://swmaestro.kr/web/board/notice/list.do">
            <li>
              <i className="fa fa-user-o" aria-hidden="true"/>
              <span>공지사항</span>
            </li>
          </a>
          <a href="http://swmaestro.kr/web/web/recruitment/applicationGuide.do">
            <li className={styles.item}>
              <i className="fa fa-rocket" aria-hidden="true"/>
              <span>지원</span>
            </li>
          </a>
          <Link to="/users">
            <li className={styles.item}>
              <i className="fa fa-address-card-o" aria-hidden="true"/>
              <span>사람들</span>
            </li>
          </Link>
        </ul>
      </MenuBase>
    )
  }

}

const ConnectedGeneralMenu = connect()(GeneralMenu)

export default ConnectedGeneralMenu
