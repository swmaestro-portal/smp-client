/* External Dependencies */
import React from 'react'
import { connect } from 'react-redux'
import Immutable from 'immutable'

/* Internals */
import styles from './LectureContainer.scss'
import { lectureActions } from '../../actions'
import Lecture from '../../components/Lecture'
import { combinedLectureSelector } from '../../selectors'

class LectureContainer extends React.Component {

  constructor() {
    super()
  }

  componentWillMount() {
    const id = this.props.params.lectureID
    this.props.dispatch(lectureActions.getComments(id))
    this.props.dispatch(lectureActions.getLecture(id))

  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(11, nextProps.lecture.toJS())
    return true
  }

  render() {
    console.log(1, this.props.lecture.toJS())
    return (
      <Lecture lecture={this.props.lecture}/>
    )
  }

}

const mapStateToProps = (state, props) => {
  return {
    lecture: combinedLectureSelector(state),
  }
}

LectureContainer = connect(mapStateToProps)(LectureContainer)

export default LectureContainer
