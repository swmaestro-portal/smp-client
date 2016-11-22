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
    this.state = {
      lectureIsFetched: false
    }
  }

  componentWillMount() {
    const id = this.props.params.lectureID
    this.props.dispatch(lectureActions.getLecture(id))
      .then(() => {
        this.setState({lectureIsFetched: true})
      })

  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(11, nextProps.lecture.toJS())
    return true
  }

  render() {
    if (!this.state.lectureIsFetched) {
      return <div />
    }
    return (
      <Lecture style={styles.wrapper} lecture={this.props.lecture}>
      </Lecture>
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
