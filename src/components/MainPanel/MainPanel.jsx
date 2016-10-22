/* External Dependencies */
import React from 'react'

/* Internal Dependencies */
import styles from './MainPanel.scss'
import Masthead from '../Masthead'
import RecentBoard from '../RecentBoard'
import MyArticleBoard from '../MyArticleBoard'


class MainPanel extends React.Component {

  componentWillMount() {
    console.log('MainPanel mount')
  }


  render() {
    return (
      <div className={styles.wrapper}>
        <Masthead/>
        <div className={styles.boardList}>
          <RecentBoard/>
          <MyArticleBoard/>
        </div>

      </div>
    )
  }

}

export default MainPanel
