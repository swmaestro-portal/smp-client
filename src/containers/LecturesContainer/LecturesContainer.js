/* External Dependencies */
import React from 'react'
import { connect } from 'react-redux'

/* Internals */
import styles from './LecturesContainer.scss'
import { lectureActions } from '../../actions'
import { combinedLecturesSelector } from '../../selectors'
import LectureList from '../../components/LectureList'

class LecturesContainer extends React.Component {

  constructor() {
    super()
  }

  componentWillMount() {
    this.props.dispatch(lectureActions.getLectures())
  }

  render() {
    return (
      <LectureList lectures={this.props.lectures}/>
    )
  }

}

const mapStateToProps = (state/*, props*/) => {
  return {
    lectures: combinedLecturesSelector(state)
  }
}

LecturesContainer = connect(mapStateToProps)(LecturesContainer)

export default LecturesContainer
