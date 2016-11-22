/* External Dependencies */
import React from 'react'
import { withRouter } from 'react-router'
import classNames from 'classnames'

/* Internal Dependencies */
import styles from './SearchedList.scss'
import SearchedItem from './SearchedItem'
import { formatGroups } from '../../utils/FormatUtils'
import Spinner from '../Spinner'

const SearchedList = (props) => {

  if (!(props.users && props.users.size) &&
      !(props.lectures && props.lectures.size) &&
      !(props.assignments && props.assignments.size)) {
    return (
        <div>검색 결과 없음</div>
    )
  }
  return (

    <div className={styles.wrapper}>
      {(props.users && props.users.size) ?
      <div className={styles.users}>
        <div className={styles.label}>
          유저
        </div>
        <div className={classNames(styles.row, styles.header)}>
          <div className={styles.cellFirst}>이름</div>
          <div className={styles.cellSecond}>이메일</div>
          <div className={styles.cellThird}>그룹</div>
        </div>
        {props.users.map((elem, i) => (
            <SearchedItem key={i} idx={i}
                          link={"/users/" + elem.get('userId')}
                          firstColumn={elem.get('userName')}
                          secondColumn={elem.get('userEmail')}
                          thirdColumn={formatGroups(elem.get('userGroups'))}
                          className={styles.row}/>))}
      </div> : null}

      {(props.assignments && props.assignments.size) ?
          <div className={styles.assignments}>
            <div className={styles.label}>
              강의
            </div>
            <div className={classNames(styles.row, styles.header)}>
              <div className={styles.cellFirst}>출제자</div>
              <div className={styles.cellSecond}>과제제목</div>
              <div className={styles.cellThird}>기수</div>
            </div>
            {props.assignments.map((elem, i) => (
                <SearchedItem key={i} idx={i}
                              link={"/assignments/" + elem.get('articleId')}
                              firstColumn={elem.getIn('articleWriter', 'userName')}
                              secondColumn={elem.get('articleSubject')}
                              thirdColumn={elem.get('articleGenerationId')}
                              className={styles.row}/>))}
          </div> : null}

      {(props.lectures && props.lectures.size) ?
          <div className={styles.lectures}>
            <div className={styles.label}>
              강의
            </div>
            <div className={classNames(styles.row, styles.header)}>
              <div className={styles.cellFirst}>강의자</div>
              <div className={styles.cellSecond}>강의제목</div>
              <div className={styles.cellThird}>기수</div>
            </div>
            {props.lectures.map((elem, i) => (
                <SearchedItem key={i} idx={i}
                              link={"/lectures/" + elem.get('articleId')}
                              firstColumn={elem.getIn('lectureTeacher', 'userName')}
                              secondColumn={elem.get('articleSubject')}
                              thirdColumn={elem.get('articleGenerationId')}
                              className={styles.row}/>))}
          </div> : null}

    </div>
  )

}

export default SearchedList
