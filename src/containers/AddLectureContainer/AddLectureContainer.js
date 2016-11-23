/* External Dependencies */
import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

/* Internals */
import styles from './AddLectureContainer.scss'
import { lectureActions } from '../../actions'
import AddLecture from '../../components/AddLecture'

class AddLectureContainer extends React.Component {

  constructor() {
    super()
    this.handleChangeStartDate = this.handleChangeStartDate.bind(this)
    this.handleChangeStartTime = this.handleChangeStartTime.bind(this)
    this.handleChangeEndDate = this.handleChangeEndDate.bind(this)
    this.handleChangeEndTime = this.handleChangeEndTime.bind(this)
    this.handleChangeGen = this.handleChangeGen.bind(this)
    this.handleChangeFile = this.handleChangeFile.bind(this)
    this.state = {
      startDate: moment(),
      endDate: moment(),
      startTime: '12:00',
      endTime: '12:00',
      gen: '7'
    }
  }

  handleChangeStartDate(date) {
    console.log('start date', date)
    this.setState({
      startDate: date
    })
  }

  handleChangeEndDate(date) {
    console.log('end date', date)
    this.setState({
      endDate: date
    })
  }

  handleChangeStartTime(option) {
    console.log('start time', option)
    this.setState({
      startTime: option.value
    })
  }

  handleChangeEndTime(option) {
    console.log('end time', option)
    this.setState({
      endTime: option.value
    })
  }

  handleChangeGen(option) {
    console.log('gen', option)
    this.setState({
      gen: option.value
    })
  }

  handleChangeFile(ev) {
    console.log(3, ev.target.value)
  }

  render() {
    return (
      <AddLecture
        startDate={this.state.startDate}
        endDate={this.state.endDate}
        startTime={this.state.startTime}
        endTime={this.state.endTime}
        gen={this.state.gen}
        handleChangeGen={this.handleChangeGen}
        handleChangeStartDate={this.handleChangeStartDate}
        handleChangeEndDate={this.handleChangeEndDate}
        handleChangeStartTime={this.handleChangeStartTime}
        handleChangeEndTime={this.handleChangeEndTime}
        handleChangeFile={this.handleChangeFile}/>
    )
  }

}

const mapStateToProps = (state/*, props*/) => {
  return {
    reduxState: state
  }
}

AddLectureContainer = connect(mapStateToProps)(AddLectureContainer)

export default AddLectureContainer
