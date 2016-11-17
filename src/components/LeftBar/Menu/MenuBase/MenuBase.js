/* External Dependencies */
import React from 'react'
import { connect } from 'react-redux'

/* Internal Dependencies */
import styles from './MenuBase.scss'

class MenuBase extends React.Component {

  constructor() {
    super()
  }

  render() {
    return (
      <div className={styles.wrapper}>
        {this.props.children}
      </div>
    )
  }

}

export default MenuBase
