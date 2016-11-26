/* External Dependencies */
import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { withRouter } from 'react-router'

/* Internals */
import styles from './AddAssignmentContainer.scss'
import { assignmentActions } from '../../actions'
import AddAssignment from '../../components/AddAssignment'
import { SearchAPI } from '../../apis'

class AddAssignmentContainer extends React.Component {

  constructor() {
    super()
    this.handleChangeEndDate = this.handleChangeEndDate.bind(this)
    this.handleChangeEndTime = this.handleChangeEndTime.bind(this)
    this.handleChangeGen = this.handleChangeGen.bind(this)
    this.handleChangeFile = this.handleChangeFile.bind(this)
    this.handleClickSubmit = this.handleClickSubmit.bind(this)
    this.state = {
      endDate: moment(),
      endTime: '12:00',
      gen: '7'
    }
  }

  handleChangeEndDate(date) {
    console.log('end date', date)
    this.setState({
      endDate: date
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
    const subject = document.getElementById('smp-AddAssignment-subject').value
    const content = document.getElementById('smp-AddAssignment-content').value
    const gen = this.state.gen

    const endYear = this.state.endDate.year()
    const endMonth = this.state.endDate.month() + 1
    const endDay = this.state.endDate.day()
    const endTime = this.state.endTime

    Promise.all([this.requestFileUpload()])
        .then((res) => {

            this.props.dispatch(assignmentActions.postAssignment({
                articleGenerationId: gen,
                articleSubject: subject,
                articleContent: content,
                assignmentEndAt: `${endYear}-${endMonth}-${endDay} ${endTime}:00`,
                articleAttachmentIds: res[0] ? [res[0].attachmentId] : []
            }))
              .then(res => {
                this.props.router.push('/assignments')
              })
        })
  }

  requestFileUpload() {
    let formData = new FormData()
    let files = document.getElementById('smp-AddAssignment-file').files
    if (files.length) {
      formData.append('file', files[0])
      return this.props.dispatch(assignmentActions.postAttachment(formData))
    } else return Promise.resolve('')
  }

  render() {
    return (
      <AddAssignment
        endDate={this.state.endDate}
        endTime={this.state.endTime}
        gen={this.state.gen}
        handleChangeGen={this.handleChangeGen}
        handleChangeEndDate={this.handleChangeEndDate}
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

AddAssignmentContainer = connect(mapStateToProps)(AddAssignmentContainer)
AddAssignmentContainer = withRouter(AddAssignmentContainer)

export default AddAssignmentContainer
