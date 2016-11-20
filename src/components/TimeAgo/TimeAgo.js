/* External Dependencies */
import React from 'react'
import TimeAgo from 'react-timeago'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'

/* Internal Dependencies */
import koreanStrings from './language-strings/ko'

const formatter = buildFormatter(koreanStrings)

export default (_props) => {
  const props = {..._props}
  props.formatter = props.formatter ? props.formatter : formatter

  return <TimeAgo {...props} />
}
