/* External Dependencies */
import React from 'react'
import { connect } from 'react-redux'

/* */
import styles from './LectureContainer.scss'
import { lectureActions } from '../../actions'
import Lecture from '../../components/Lecture'

class LectureContainer extends React.Component {

  constructor() {
    super()
  }

  componentWillMount() {
    const id = this.props.params.lectureID
    this.props.dispatch(lectureActions.getLecture(id))
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <Lecture lecture={this.props.lecture} />
      </div>
    )
  }

}

const getTargetLecture = (lectures, id) => {
  return lectures.filter((lecture) => { return lecture.get('articleId') == id }).first()
}

const mapStateToProps = (state, props) => {
  return {
    lecture: getTargetLecture(state.lecturesReducer.lectures, props.params.lectureID)
  }
}

LectureContainer = connect(mapStateToProps)(LectureContainer)

export default LectureContainer
