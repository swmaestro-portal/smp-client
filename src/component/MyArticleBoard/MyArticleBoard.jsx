/* External Dependencies */
import React from 'react'

/* Internal Dependencies */
import styles from './MyArticleBoard.scss'

class MyArticleBoard extends React.Component {

  componentWillMount() {
    console.log('MyArticleBoard mount')
  }


  render() {
    return (
      <div className={styles.wrapper}>
        MyArticleBoard
      </div>
    )
  }

}

export default MyArticleBoard
