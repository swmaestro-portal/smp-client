/* External Dependencies */
import React from 'react'
import classNames from 'classnames'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'

/* Internal Dependencies */
import styles from './Notifications.scss'


class Notifications extends React.Component {

  constructor() {
    super()
  }
  
  componentWillMount() {
    // this.props.dispatch()
  }

  render() {
    // console.log(1, this.props.reduxState, notificationsApi)
    return (
      <div className={styles.wrapper}>
        <ul>
          <li>
            <i className="fa fa-bell" aria-hidden="true"/>
            <span>foo로 부터 댓글이 달렸습니다</span>
          </li>
          <li>
            <i className="fa fa-bell" aria-hidden="true"/>
            <span>foo로 부터 댓글이 달렸습니다</span>
          </li>
          <li>
            <i className="fa fa-bell" aria-hidden="true"/>
            <span>foo로 부터 댓글이 달렸습니다</span>
          </li>
        </ul>
      </div>
    )
  }
}


const mapStateToProps = (state/*, props*/) => {
  return {
    reduxState: state
  }
}

const routedNotifications = withRouter(Notifications)
const connectedNotifications = connect(mapStateToProps)(routedNotifications)

// export default routedNotifications
export default connectedNotifications
