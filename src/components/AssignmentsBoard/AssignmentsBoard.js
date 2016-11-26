/* External Dependencies */
import React from 'react'
import { browserHistory } from 'react-router'

/* Internal Dependencies */
import styles from './AssignmentsBoard.scss'


const AssignmentsBoard = (props) => {

  function renderArticles(articles) {
    const iterMax = articles.size > 5 ? 5 : articles.size
    let list = []

    list.push(
      <div className={styles.header}>
        <span className={styles.due}>기한</span>
        <span className={styles.subject}>내용</span>
      </div>
    )

    articles.every((article, idx) => {
      list.push(
        <div
          className={styles.article}
          onClick={()=>{browserHistory.push(`/assignments/${article.get('articleId')}`)}}
          key={idx}>
          <span className={styles.due}>
            {article.get('assignmentEndAt').substring(0, 10)}
          </span>
          <span className={styles.subject}>
            {article.get('articleSubject')}
          </span>
        </div>
      )
      return iterMax <= iterMax
    })
    return list
  }


  return (
    <div className={styles.wrapper}>
      {renderArticles(props.assignments)}
    </div>
  )
}

export default AssignmentsBoard
