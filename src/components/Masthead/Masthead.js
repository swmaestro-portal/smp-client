/* External Dependencies */
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

/* Internal Dependencies */
import styles from './Masthead.scss'
import Logo from '../Logo'
import { searchActions } from '../../actions'
import Link from '../Link'
import SearchUserContainer from '../../containers/SearchUserContainer'

class Masthead extends React.Component {

  constructor() {
    super()
    this.nodes = {}
    this.handleClickSearch = this.handleClickSearch.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  handleClickSearch(event) {
    if (this.nodes.inputText.value === "") {
      window.alert('내용을 입력해주세요.')
      return;
    }

    if (event.shiftKey || event.ctrlKey) {
      window.open('/search?q=' + this.nodes.inputText.value);
      return;
    }

    this.props.dispatch(searchActions.getAll(this.nodes.inputText.value))
    this.props.router.push('/search?q=' + this.nodes.inputText.value)
  }

  handleKeyDown(event) {
    if (event.which === 13 || event.keyCode === 13) {
      this.handleClickSearch(event)
      event.preventDefault()
    }
  }
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.logoContainer}>
            <Logo/>
          </div>
          <div className={styles.searchBox} onKeyDown={this.handleKeyDown}>
            <input
              type="text"
              ref={(elem)=>{this.nodes.inputText = elem}}/>
            <span onClick={this.handleClickSearch}>
              <i className="fa fa-search" aria-hidden="true"></i>
            </span>
          </div>
          <div>
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

Masthead = withRouter(Masthead)
const ConnectedMasthead = connect(mapStateToProps)(Masthead)

export default ConnectedMasthead
