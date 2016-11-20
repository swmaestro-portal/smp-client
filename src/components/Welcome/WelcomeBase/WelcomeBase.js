/* External Dependencies */
import React from 'react'
import { withRouter } from 'react-router'

/* Internal Dependencies */
import styles from './WelcomeBase.scss'

class WelcomeBase extends React.Component {

  constructor() {
    super()
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.logoStand}>
          <img src="http://cdn.swmaestro.net/images/swmaestro-logo-140.png"/>
        </div>
        {this.props.children}
      </div>
    )
  }

}

const routedWelcomeBase = withRouter(WelcomeBase)

export default routedWelcomeBase
