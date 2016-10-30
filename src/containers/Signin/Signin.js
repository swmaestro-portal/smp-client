/* External Dependencies */
import React from 'react'
import { connect } from 'react-redux'

/* Internal Dependencies */
import styles from './Signin.scss'
import * as UserActionCreator from '../../actions/UserActionCreator'

class Signin extends React.Component {

  constructor() {
    super()
    this.nodes = {}
  }

  componentWillMount() {
    console.log('Signin mount')
  }

  handleClickSignin(event) {
    const userInfo = {
      username: this.nodes.username.value,
      password: this.nodes.password.value
    }
    this.props.dispatch(UserActionCreator.signin(userInfo))
  }

  render() {
    return (
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
            <button onClick={this.handleClickSignin.bind(this)}>Sign In</button>
            <button>Sign Up</button>
          </div>
        </div>
      </div>
    )
  }

}


const mapStateToProps = (state/*, props*/) => {
  return {
    reduxState: state
  }
}

const ConnectedSignin = connect(mapStateToProps)(Signin)

export default ConnectedSignin
