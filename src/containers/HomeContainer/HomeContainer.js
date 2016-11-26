import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

/**/
import styles from './HomeContainer.scss'
import BigCalendar from '../../components/BigCalendar'            
import AssignmentsBoard from '../../components/AssignmentsBoard'
import LecturesBoard from '../../components/LecturesBoard'
import { lectureActions, assignmentActions } from '../../actions'
import Spinner from '../../components/Spinner'


let events = []
class HomeContainer extends React.Component {

  constructor() {
    super()
    this.state = {
      eventsAreFetched: false
    }
  }

  componentDidMount() {
    const assignments = this.props.dispatch(assignmentActions.getAssignments())
    const lectures = this.props.dispatch(lectureActions.getLectures())

    Promise.all([assignments, lectures])
      .then(res => {
        console.log(1, res)
        let startYear = '', startMonth = '', startDay = '', endYear = '', endMonth = '', endDay = ''
        for (let i = 0; i < res[0].length; i++) {
          let event = {}
          startYear = res[0][i].assignmentEndAt.substring(0, 4)
          startMonth = res[0][i].assignmentEndAt.substring(5, 7) - 1
          startDay = res[0][i].assignmentEndAt.substring(8, 10)

          event.title = res[0][i].articleSubject
          event.start = new Date(startYear, startMonth, startDay, 0, 0, 0)
          event.end = new Date(startYear, startMonth, startDay, 0, 0, 0)
          event.type = 'assignments'
          event.articleId = res[0][i].articleId
          events.push(event)
        }

        for (let i = 0; i < res[1].length; i++) {
          let event = {}
          startYear = res[1][i].lectureBeginAt.substring(0, 4)
          startMonth = res[1][i].lectureBeginAt.substring(5, 7) - 1
          startDay = res[1][i].lectureBeginAt.substring(8, 10)

          endYear = res[1][i].lectureEndAt.substring(0, 4)
          endMonth = res[1][i].lectureEndAt.substring(5, 7) - 1
          endDay = res[1][i].lectureEndAt.substring(8, 10)

          event.title = res[1][i].articleSubject
          event.start = new Date(startYear, startMonth, startDay, 0, 0, 0)
          event.end = new Date(endYear, endMonth, endDay, 0, 0, 0)
          event.type = 'lectures'
          event.articleId = res[1][i].articleId
          events.push(event)
        }

        this.setState({
          eventsAreFetched: true
        })
      })

  }

  componentWillUnmount() {
    events = []
  }

  renderCalendar()  {
    if (this.state.eventsAreFetched === false) {
      return <Spinner/>
    } else {
      return (
        <BigCalendar
          events={events}
          defaultDate={new Date(2016, 10, 1)}
          onSelectEvent={elem => {this.props.router.push(`/${elem.type}/${elem.articleId}`)}}/>
      )
    }
  }

  render () {
    return (
      <div className={styles.wrapper}>
        {this.renderCalendar()}
        <div className={styles.boardContainer}>
          <AssignmentsBoard
            assignments={this.props.assignments}/>
          <LecturesBoard
            lectures={this.props.lectures}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state/*, props*/) => {
  return {
    assignments: state.assignmentsReducer.assignments,
    lectures: state.lecturesReducer.lectures
  }
}

HomeContainer = connect(mapStateToProps)(HomeContainer)
HomeContainer = withRouter(HomeContainer)

export default HomeContainer

