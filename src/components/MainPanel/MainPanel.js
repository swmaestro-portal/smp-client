/* External Dependencies */
import React from 'react'
import classNames from 'classnames'

/* Internal Dependencies */
import styles from './MainPanel.scss'
import Masthead from '../Masthead/Masthead'
import RecentBoard from '../RecentBoard'
import MyArticleBoard from '../MyArticleBoard'


class MainPanel extends React.Component {

  render() {
    return (
      <div
        className={classNames(styles.wrapper, this.props.className)}>
        <div className={styles.boardList}>
          <RecentBoard/>
          <MyArticleBoard/>
        </div>

      </div>
    )
  }

}

export default MainPanel
