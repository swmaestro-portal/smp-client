
export default {

  dayToKoreanWeekday: function(day) {
    var koreanWeekday = null
    switch(day) {
      case 0:
        koreanWeekday = '일'
        break
      case 1:
        koreanWeekday = '월'
        break
      case 2:
        koreanWeekday = '화'
        break
      case 3:
        koreanWeekday = '수'
        break
      case 4:
        koreanWeekday = '목'
        break
      case 5:
        koreanWeekday = '금'
        break
      case 6:
        koreanWeekday = '토'
        break
    }
    return koreanWeekday
  }

}
