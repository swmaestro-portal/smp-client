/* External Dependencies */
import React from 'react'
import { connect } from 'react-redux'

/* */
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
    this.props.dispatch(lectureActions.getLecture(id))
      .then(() => {this.props.dispatch(lectureActions.getComments(id))})
    
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <Lecture lecture={this.props.lecture} />
      </div>
    )
  }

}

const mapStateToProps = (state, props) => {
  return {
    lecture: combinedLectureSelector(state)
  }
}

LectureContainer = connect(mapStateToProps)(LectureContainer)

export default LectureContainer
