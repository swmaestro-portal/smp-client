/* External Dependencies */
import React from 'react'

/* Internal Dependencies */
import styles from './Logo.scss'

class Logo extends React.Component {

  componentWillMount() {
    console.log('Logo mount')
  }


  render() {
    return (
      <p className={styles.wrapper}/>
    )
  }

}

export default Logo
