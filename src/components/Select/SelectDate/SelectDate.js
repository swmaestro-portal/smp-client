/* External Dependencies */
import React from 'react'
import Select from 'react-select'
import DatePicker from 'react-datepicker'
import classNames from 'classnames'

/* Internal Dependencies */
import styles from './SelectDate.scss'

const SelectDate = (props) => {
  // console.log(1, props.className)
  
  return (
    <div className={classNames(styles.wrapper, props.className)}>
      <DatePicker
        className={styles.datePicker}
        dateFormat="YYYY/MM/DD"
        selected={props.selected}
        onChange={props.handleChange} />
    </div>
  )
}

export default SelectDate

