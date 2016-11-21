/* External Dependencies */
import React from 'react'
import { connect } from 'react-redux'

/* */
import styles from './New$.scss'
import { lectureActions } from '../../actions'
import New from '../../components/New'

class New$ extends React.Component {

  constructor() {
    super()
  }

  render() {
    return (
      <New>

      </New>
    )
  }

}


const mapStateToProps = (state/*, props*/) => {
  return {
    reduxState: state
  }
}

const connectedNew = connect(mapStateToProps)(New$)

export default connectedNew