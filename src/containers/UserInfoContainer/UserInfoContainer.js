/* External Dependencies */
import React from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'

/* Internal Dependencies */
import styles from './UserInfoContainer.scss'
import Avatar from '../../components/Avatar'
import { formatGenerationId, formatGroupCode } from '../../utils/FormatUtils'

class UserInfoContainer extends React.Component {

  constructor() {
    super()
    this.handleClickSignout = this.handleClickSignout.bind(this)
  }

  handleClickSignout() {
    window.localStorage.removeItem('smp-token')
    this.props.router.push('/signin');
  }

  render() {
    const lastGroup = this.props.me.get('lastGroup')

    const groupInfo = formatGroupCode(lastGroup.get('groupCode'))
    let generationInfo = formatGenerationId(lastGroup.get('generationId')) + ' '

    console.log(9000000, lastGroup)
    if (lastGroup.get('groupCode') == 2) {
      generationInfo = ''
    }

    return (
      <div className={styles.wrapper}>
        <Avatar/>
        <div className={styles.info}>
          <p>
            <span>{generationInfo}</span>
            <span>{this.props.me.get('userName')}</span>
          </p>
          <p>
            <span>{groupInfo}</span>
          </p>
        </div>
        <button onClick={this.handleClickSignout}>
          logout
        </button>
      </div>
    )
  }

}

const mapStateToProps = (state/*, props*/) => {
  return {
    me: state.meReducer.me
  }
}

UserInfoContainer = withRouter(UserInfoContainer)
UserInfoContainer = connect(mapStateToProps)(UserInfoContainer)

export default UserInfoContainer
