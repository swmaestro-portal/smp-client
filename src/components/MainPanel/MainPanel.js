/* External Dependencies */
import React from 'react'
import classNames from 'classnames'

/* Internal Dependencies */
import styles from './MainPanel.scss'
import RecentBoard from '../RecentBoard'
import MyArticleBoard from '../MyArticleBoard'
import BigCalendar from '../BigCalendar'


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

class MainPanel extends React.Component {

  render() {
    return (
      <div
        className={classNames(styles.wrapper, this.props.className)}>
        <div className={styles.header}>
         <span>
           header
         </span>
        </div>
        <div className={styles.content}>
          <BigCalendar events={events}/>
          
          <div className={styles.boardGroup}>
            <RecentBoard/>
            <MyArticleBoard/>
          </div>
        </div>

      </div>
    )
  }

}

export default MainPanel
