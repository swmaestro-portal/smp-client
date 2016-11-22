let formatGroupCode = (groupCode) => {
  switch (groupCode) {
    case "0":
      return '멘티'
    case "1":
      return '멘토'
    case "2":
      return '관리자'
    default:
      return ''
  }
}

let formatGenerationId = (generationId) => {
  return generationId + '기'
}

let formatGroup = (group) => {
  return formatGenerationId(group.get('generationId')) + ' ' + formatGroupCode(group.get('groupCode'))
}

let formatGroups = (groups) => {
  if (groups == null || groups.size == 0) return ''

  const sorted = groups.sort((a, b) => {
    return a.get('generationId') < b.get('generationId')
  })

  var str = formatGroup(sorted.first())
  if (groups.size > 1) {
    str = str + ' …'
  }

  return str
}

let formatGender = (str) => {
  if (str == '0') return '여'
  if (str == '1') return '남'
}

let formatSignupDate = (str) => {
  return new Date(str).toISOString().slice(0, 10)
}

let formatStatus = (str) => {
  if (str == 'A') return ''
  if (str == 'R') return '승인요청'
  if (str == 'D') return '탈퇴'
}

module.exports = {
  formatGroupCode: formatGroupCode,
  formatGenerationId: formatGenerationId,
  formatGroup: formatGroup,
  formatGroups: formatGroups,
  formatGender: formatGender,
  formatSignupDate: formatSignupDate,
  formatStatus: formatStatus
}