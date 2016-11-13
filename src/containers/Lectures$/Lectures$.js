/* External Dependencies */
import React from 'react'
import { connect } from 'react-redux'

/* */
import styles from './Lectures$.scss'
import { lectureActions } from '../../actions'
import Lectures from '../../components/Lectures'

class Lectures$ extends React.Component {

  constructor() {
    super()
  }

  componentWillMount() {
    this.props.dispatch(lectureActions.getLectures())
  }

  render() {
    return (
      <Lectures lectures={this.props.lectures}/>
    )
  }

}

const mapStateToProps = (state/*, props*/) => {
  return {
    lectures: state.lecturesReducer.lectures
  }
}

const ConnectedLectures$ = connect(mapStateToProps)(Lectures$)

export default ConnectedLectures$
