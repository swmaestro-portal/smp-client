/* */
import React from 'react'
import { connect } from 'react-redux'
import BigCalendarComponent from 'react-big-calendar'
import moment from 'moment';

/* Internal Dependencies */
import styles from './BigCalendar.scss'

BigCalendarComponent.momentLocalizer(moment);

class BigCalendar extends React.Component {

  render () {
    return (
      <div className={styles.wrapper}>
        <BigCalendarComponent
          {...this.props}
          events={this.props.events}
          defaultDate={this.props.defaultDate}/>
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

