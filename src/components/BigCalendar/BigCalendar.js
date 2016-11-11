/* */
import React from 'react'
import { connect } from 'react-redux'
import BigCalendarComponent from 'react-big-calendar'
import moment from 'moment';

/* Internal Dependencies */
import styles from './BigCalendar.scss'
require('../../style/react-big-calendar/react-big-calendar.css')

BigCalendarComponent.setLocalizer(
  BigCalendarComponent.momentLocalizer(moment)
);

class BigCalendar extends React.Component {

  render () {
    return (
      <div className={styles.wrapper}>
        <BigCalendarComponent
          events={this.props.events}
          startAccessor='startDate'
          endAccessor='endDate'/>
      </div>
    )
  }
}

const mapStateToProps = (state/*, props*/) => {
  return {
    reduxState: state
  }
}

const ConnectedBigCalendar = connect(mapStateToProps)(BigCalendar)

export default ConnectedBigCalendar

