/* External Dependencies */
import React from 'react'
import Select from 'react-select'
import classNames from 'classnames'

/* Internal Dependencies */
import styles from './SelectGeneration.scss'

const options = [
  { value: '7', label: '7기' },
  { value: '6', label: '6기' },
  { value: '5', label: '5기' },
  { value: '4', label: '4기' },
  { value: '3', label: '3기' },
  { value: '2', label: '2기' },
  { value: '1', label: '1기' },
]

const SelectGeneration = (props) => {
  // console.log(1,props.className)

  return (
    <div className={classNames(styles.wrapper, props.className)}>
      <Select
        className={styles.select}
        name="smp-select-gen"
        value={props.value}
        options={options}
        clearable={false}
        searchable={false}
        onChange={props.handleChange}
      />
    </div>
  )
}

export default SelectGeneration
