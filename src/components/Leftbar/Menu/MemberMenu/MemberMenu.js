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
          <Link to="/assignments">
            <li>
              <i className="fa fa-book" aria-hidden="true"/>
              <span>과제</span>
            </li>
          </Link>
          <Link to="/lectures">
            <li>
              <i className="fa fa-calendar" aria-hidden="true"/>
              <span>강의</span>
            </li>
          </Link>
          <Link to="/me">
            <li>
              <i className="fa fa-user-o" aria-hidden="true"/>
              <span>MyPage</span>
            </li>
          </Link>
        </ul>
      </MenuBase>
    )
  }

}

const ConnectedMemberMenu = connect()(MemberMenu)

export default ConnectedMemberMenu
