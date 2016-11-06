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
      <div className={styles.wrapper}>
        <p className={styles.img}/>
        <p className={styles.text}>SW Maestro</p>
      </div>
    )
  }

}

export default Logo
