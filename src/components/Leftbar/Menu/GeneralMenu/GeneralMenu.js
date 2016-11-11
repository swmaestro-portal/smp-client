/* External Dependencies */
import React from 'react'
import { connect } from 'react-redux'

/* Internal Dependencies */
import styles from './GeneralMenu.scss'
import MenuBase from '../MenuBase'

class GeneralMenu extends React.Component {

  constructor() {
    super()
  }

  render() {
    return (
      <MenuBase>
        <ul>
          <li>
            <i className="fa fa-barcode" aria-hidden="true"/>
            <span>SW Maestro</span>
          </li>
          <li>
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
      </MenuBase>
    )
  }

}

const ConnectedGeneralMenu = connect()(GeneralMenu)

export default ConnectedGeneralMenu
