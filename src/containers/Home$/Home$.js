import React from 'react'
import { connect } from 'react-redux'

/**/
import styles from './Home$.scss'
import BigCalendar from '../../components/BigCalendar'
import RecentBoard from '../../components/RecentBoard'
import MyArticleBoard from '../../components/MyArticleBoard'


var events = [
  {
    'title': 'All Day Event',
    'allDay': true,
    'start': new Date(2015, 3, 0),
    'end': new Date(2015, 3, 0)
  },
  {
    'title': 'Long Event',
    'start': new Date(2015, 3, 7),
    'end': new Date(2015, 3, 10)
  }
]

class Home$ extends React.Component {

  componentDidMount() {
    console.log('home')
  }

  render () {

    return (
      <div className={styles.wrapper}>
        <BigCalendar events={events}/>
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

const ConnectedHome$ = connect(mapStateToProps)(Home$)

export default ConnectedHome$

