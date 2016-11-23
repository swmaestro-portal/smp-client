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
          <div className={styles.logoContainer}>
            <Logo/>
          </div>
          <div className={styles.searchBox}>
            <input
              type="text"/>
          </div>
          <div className={styles.rightBtnGroup}>
            <ul>
              <li className={styles.fb}>
                <a href="https://www.facebook.com/groups/199546453425248/">
                  <i className="fa fa-facebook-official" aria-hidden="true"/>
                </a>
              </li>
              <li className={styles.swm}>
                <a href="http://swmaestro.kr/">
                <i className="fa fa-barcode" aria-hidden="true"/>
                </a>
              </li>
              <li>
                <a href="http://www.msip.go.kr/">
                  <p className={styles.ministry}/>
                </a>
              </li>
            </ul>
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
