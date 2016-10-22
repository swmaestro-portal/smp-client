/* External Dependencies */
import React from 'react'

/* Internal Dependencies */
import styles from './Masthead.scss'

class Masthead extends React.Component {

  componentWillMount() {
    console.log('Masthead mount')
  }


  render() {
    return (
      <div className={styles.wrapper}>
        Masthead
      </div>
    )
  }

}

export default Masthead
