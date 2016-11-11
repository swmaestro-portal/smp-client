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
              type="text"/>
          </div>
          <div className={styles.rightBtnGroup}>
            <ul>
              <li>
                <a href="https://www.facebook.com/groups/199546453425248/">
                  <i className="fa fa-facebook-official" aria-hidden="true"/>
                </a>
              </li>
              <li>
                <a href="http://swmaestro.kr/">
                <i className="fa fa-barcode" aria-hidden="true"/>
                </a>
              </li>
              <li>
                <p className={styles.ministry}/>
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
