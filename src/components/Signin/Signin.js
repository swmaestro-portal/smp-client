/* External Dependencies */
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router' 

/* Internal Dependencies */
import styles from './Signin.scss'
import { userActions } from '../../actions'
import WelcomeBase from '../Welcome/WelcomeBase'

function withdrawMoney(amount) {
  return {
    type: 'WITHDRAW',
    amount
  };
}

class Signin extends React.Component {

  constructor() {
    super()
    this.nodes = {}
    this.handleClickSignin = this.handleClickSignin.bind(this)
    this.handleClickSignup = this.handleClickSignup.bind(this)
  }

  handleClickSignin(event) {
    const userInfo = {
      username: this.nodes.username.value,
      password: this.nodes.password.value
    }
    this.props.dispatch(userActions.signin(userInfo))
      .then((res) => {
        window.localStorage.setItem('smp-token', res.token)
        this.props.router.push('/')
      })
      .catch(error => {
        window.alert('Login Fail. Check the credential')
      })
  }

  handleClickSignup() {
    this.props.router.push('/signup')
  }

  render() {
    return (
      <WelcomeBase>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <div className={styles.inputContainer}>
              <div>
                <label htmlFor="">email</label>
                <input
                  type="text"
                  ref={(elem)=>{this.nodes.username = elem}}/>
              </div>
              <div>
                <label htmlFor="">password</label>
                <input
                  type="password"
                  ref={(elem)=>{this.nodes.password = elem}}/>
              </div>
            </div>
            <div className={styles.buttonStand}>
              <button
                onClick={this.handleClickSignin}>
                Sign In
              </button>
              <button
                onClick={this.handleClickSignup}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </WelcomeBase>
    )
  }

}


const mapStateToProps = (state/*, props*/) => {
  return {
    reduxState: state
  }
}

Signin = withRouter(Signin)
Signin = connect(mapStateToProps)(Signin)

export default Signin
