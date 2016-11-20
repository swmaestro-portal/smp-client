
let formatGroup = (group) => {
  var groupName = ''
  if (group.get('groupCode') == 0) groupName = '멘티'
  if (group.get('groupCode') == 1) groupName = '멘토'
  if (group.get('groupCode') == 2) groupName = '관리자'

  return group.get('generationId') + '기 ' + groupName
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

  formatGroup: formatGroup,
  formatGroups: formatGroups,
  formatGender: formatGender,
  formatSignupDate: formatSignupDate,
  formatStatus: formatStatus
}