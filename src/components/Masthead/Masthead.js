/* External Dependencies */
import React from 'react'
import { connect } from 'react-redux'

/* Internal Dependencies */
import styles from './Masthead.scss'
import Logo from '../Logo'


class Masthead extends React.Component {

  constructor() {
    super()
    this.handleClickSearch = this.handleClickSearch.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  handleClickSearch(event) {
    console.log(1,"hihi")
    // return;
    // const userInfo = {
    //   username: this.nodes.username.value,
    //   password: this.nodes.password.value
    // }
    // this.props.dispatch(userActions.signin(userInfo))
    //   .then((res) => {
    //     window.sessionStorage.setItem('smp-token', res.token)
    //     this.props.router.push('/search')
    //   })
    //   .catch(error => {
    //     window.alert('Login Fail. Check the credential')
    //   })
  }

  handleKeyDown(event) {
    if (event.which === 13 || event.keyCode === 13) {
      this.handleClickSearch()
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
            <input type="text"/>
            <span onClick={this.handleClickSearch}>
              <i className="fa fa-search" aria-hidden="true"></i>
            </span>
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
