/* External Dependencies */
import React from 'react'
import classNames from 'classnames'

/* Internal Dependencies */
import styles from './MainPanel.scss'

const MainPanel = (props) => {
  return (
    <div className={classNames(styles.wrapper, props.className)}>
      <div className={styles.header}>
         <span>
           header
         </span>
      </div>
      <div className={styles.content}>
        {props.children}
      </div>
    </div>
  )
}

export default MainPanel
