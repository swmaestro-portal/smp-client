/* External Dependencies */
import React from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router'

/* Internal Dependencies */
import styles from './MemberMenu.scss'
import MenuBase from '../MenuBase'
import Link from '../../../Link'

class MemberMenu extends React.Component {

  constructor() {    
    super()
  }

  render() {
    return (
      <MenuBase>
        <ul>
          <li>
            <Link to="/lectures">
              <i className="fa fa-book" aria-hidden="true"/>
              <span>과제</span>
            </Link>
          </li>
          <li>
            <i className="fa fa-calendar" aria-hidden="true"/>
            <span>강의</span>
          </li>
          <li>
            <i className="fa fa-user-o" aria-hidden="true"/>
            <span>MyPage</span>
          </li>
        </ul>
      </MenuBase>
    )
  }

}

const ConnectedMemberMenu = connect()(MemberMenu)

export default ConnectedMemberMenu
