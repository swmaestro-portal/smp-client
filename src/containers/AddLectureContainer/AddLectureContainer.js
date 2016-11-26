/* External Dependencies */
import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

/* Internals */
import styles from './AddLectureContainer.scss'
import { lectureActions } from '../../actions'
import AddLecture from '../../components/AddLecture'
import { SearchAPI } from '../../apis'

class AddLectureContainer extends React.Component {

  constructor() {
    super()
    this.handleChangeStartDate = this.handleChangeStartDate.bind(this)
    this.handleChangeStartTime = this.handleChangeStartTime.bind(this)
    this.handleChangeEndDate = this.handleChangeEndDate.bind(this)
    this.handleChangeEndTime = this.handleChangeEndTime.bind(this)
    this.handleChangeGen = this.handleChangeGen.bind(this)
    this.handleChangeFile = this.handleChangeFile.bind(this)
    this.handleClickSubmit = this.handleClickSubmit.bind(this)
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
  
  handleClickSubmit() {
    const subject = document.getElementById('smp-AddLecture-subject').value
    const content = document.getElementById('smp-AddLecture-content').value
    const gen = this.state.gen
    const startYear = this.state.startDate.year()
    const startMonth = this.state.startDate.month() + 1
    const startDay = this.state.startDate.day()
    const startTime = this.state.startTime

    const endYear = this.state.endDate.year()
    const endMonth = this.state.endDate.month() + 1
    const endDay = this.state.endDate.day()
    const endTime = this.state.endTime

    Promise.all([this.requestFileUpload(), this.requestGetAuthor()])
      .then((res) => {

        this.props.dispatch(lectureActions.postLecture({
          articleGenerationId: gen,
          articleSubject: subject,
          articleContent: content,
          lectureTeacherId: res[1].length ? res[1][0].userId : '',
          lectureBeginAt: `${startYear}-${startMonth}-${startDay} ${startTime}:00`,
          lectureEndAt: `${endYear}-${endMonth}-${endDay} ${endTime}:00`,
          articleAttachmentIds: res[0] ? [res[0].attachmentId] : []
        }))
      })
  }
  
  requestGetAuthor()  {
    const author = document.getElementById('smp-AddLecture-author').value
    return SearchAPI.requestGetUser(author)
  }

  requestFileUpload() {
    let formData = new FormData()
    let files = document.getElementById('smp-AddLecture-file').files
    if (files.length) {
      formData.append('file', files[0])
      return this.props.dispatch(lectureActions.postAttachment(formData))
    } else return Promise.resolve('')
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
        handleChangeFile={this.handleChangeFile}
        handleClickSubmit={this.handleClickSubmit}/>
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
