/* External Dependencies */
import React from 'react'

/* Internal Dependencies */
import styles from './RecentBoard.scss'

class RecentBoard extends React.Component {

  componentWillMount() {
    console.log('RecentBoard mount')
  }


  render() {
    return (
      <div className={styles.wrapper}>
        RecentBoard
      </div>
    )
  }

}

export default RecentBoard
