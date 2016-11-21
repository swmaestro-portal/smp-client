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
            <span>S</span>
            <span>W </span>
            <span>M</span>
            <span>a</span>
            <span>e</span>
            <span>s</span>
            <span>t</span>
            <span>r</span>
            <span>o</span>
          </p>
        </Link>
      </div>
    )
  }

}

const routedLogo = withRouter(Logo)

export default routedLogo
