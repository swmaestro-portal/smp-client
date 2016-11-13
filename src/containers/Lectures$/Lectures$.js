/* External Dependencies */
import React from 'react'
import { connect } from 'react-redux'

/* */
import styles from './Lectures$.scss'
import { lectureActions } from '../../actions'

class Lectures$ extends React.Component {

  constructor() {
    super()
  }

  componentWillMount() {
    this.props.dispatch(lectureActions.getLectures())
  }

  componentDidMount() {
    console.log(2)
  }

  render() {
    return (
      <div className={styles.wrapper}>
        Lectures
      </div>
    )
  }

}

const mapStateToProps = (state/*, props*/) => {
  return {
    
    reduxState: state
  }
}

const ConnectedLectures$ = connect()(Lectures$)

export default ConnectedLectures$
