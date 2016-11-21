/* External Dependencies */
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

/* Internal Dependencies */
import styles from './Signup.scss'
import WelcomeBase from '../Welcome/WelcomeBase'
import { userActions } from '../../actions'

/*이메일,비밀번호,비밀번호확(Re-enter),성명,전화번호,성별,기수,타입*/
class Signup extends React.Component {

  constructor() {
    super()
    this.handleClickSignup = this.handleClickSignup.bind(this)
  }

  handleClickSignup(event) {
    const inputs = document.querySelectorAll('#signup-form input, #signup-form select')
    let arr = [], ret = {}

    arr.forEach.call(inputs, function(elem) {
      ret[elem.name] = elem.value
    })

    console.log(2, ret)
    this.props.dispatch(userActions.signup(ret))
      .then(this.props.router.push('/signin'))
  }

  render() {
    return (
      <WelcomeBase>
        <div className={styles.wrapper}>
          <form id="signup-form" className={styles.content}>
            <div className={styles.inputContainer}>
              <div>
                <span>email</span>
                <input type="text" name="email"/>
              </div>
              <div>
                <span>password</span>
                <input type="password" name="pw"/>
              </div>
              <div>
                <span>re-enter password</span>
                <input type="password" name="rePw"/>
              </div>
              <div>
                <span>name</span>
                <input type="text" name="name"/>
              </div>
              <div>
                <span>tel</span>
                <input type="tel" name="tel"/>
              </div>
              <div>
                <span>남</span>
                <input type="radio" name="gender" value="male"/>
                <span>여</span>
                <input type="radio" name="gender" value="female"/>
              </div>
            </div>
            <div className={styles.buttonContainer}>
              <button
                type="button"
                onClick={this.handleClickSignup}>
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </WelcomeBase>

    )
  }

}

const routedSignup = withRouter(Signup)
const ConnectedSignup = connect()(routedSignup)

export default ConnectedSignup


// <div>
// <span>generation</span>
// <select name="generation">
//   <option value="7">7기</option>
// </select>
// <span>멘토</span>
// <input type="radio" name="grade" value="mentor"/>
//   <span>멘티</span>
//   <input type="radio" name="grade" value="mentee"/>
//   </div>
