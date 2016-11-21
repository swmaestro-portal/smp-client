import React from 'react'
import { connect } from 'react-redux'

/**/
import styles from './HomeContainer.scss'
import BigCalendar from '../../components/BigCalendar'
import RecentBoard from '../../components/RecentBoard'
import MyArticleBoard from '../../components/MyArticleBoard'


const events = [
  {
    'title': 'All Day Event',
    'allDay': true,
    'start': new Date(2015, 3, 0),
    'end': new Date(2015, 3, 0)
  }
]
class HomeContainer extends React.Component {

  render () {
    return (
      <div className={styles.wrapper}>
        <BigCalendar 
          events={events} 
          defaultDate={new Date(2015, 3, 1)}/>
        <RecentBoard/>
        <MyArticleBoard/>
      </div>
    )
  }
}

const mapStateToProps = (state/*, props*/) => {
  return {
    reduxState: state
  }
}

HomeContainer = connect(mapStateToProps)(HomeContainer)

export default HomeContainer

