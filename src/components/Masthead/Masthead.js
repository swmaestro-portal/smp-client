/* External Dependencies */
import React from 'react'
import { connect } from 'react-redux'

/* Internal Dependencies */
import styles from './Masthead.scss'
import Logo from '../Logo'

class Masthead extends React.Component {

  constructor() {
    super()
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.logoStand}>
            <Logo/>
          </div>
          <div className={styles.searchBox}>
            <input
              className={styles.searchBox}
              type="text"/>
          </div>
          <div className={styles.rightBtnGroup}>
            <button>to swm</button>
          </div>
        </div>
        <div className={styles.offset}></div>
      </div>
    )
  }

}

const mapStateToProps = (state/*, props*/) => {
  return {
    foo: state.foo
  }
}

const ConnectedMasthead = connect(mapStateToProps)(Masthead)

export default ConnectedMasthead
