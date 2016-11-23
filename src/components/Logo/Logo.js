/* External Dependencies */
import React from 'react'
import { withRouter, Link } from 'react-router'

/* Internal Dependencies */
import styles from './Logo.scss'

class Logo extends React.Component {

  constructor() {
    super()
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <Link to="/">
          <p className={styles.img}/>                  
        </Link>
        <Link to="/">
          <p className={styles.text}>
            <span>SW_ Maestro_</span>
          </p>
        </Link>
      </div>
    )
  }

}

const routedLogo = withRouter(Logo)

export default routedLogo
