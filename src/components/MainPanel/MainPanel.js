/* External Dependencies */
import React from 'react'
import classNames from 'classnames'

/* Internal Dependencies */
import styles from './MainPanel.scss'
import RecentBoard from '../RecentBoard'
import MyArticleBoard from '../MyArticleBoard'
import BigCalendar from '../BigCalendar'


class MainPanel extends React.Component {

  componentDidMount() {
    console.log('main panel', this.props.children)
  }

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

          {this.props.children}

        </div>

      </div>
    )
  }

}

export default MainPanel


// <BigCalendar events={events}/>
//
//   <div className={styles.boardGroup}>
// <RecentBoard/>
// <MyArticleBoard/>
// </div>
