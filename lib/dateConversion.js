'use strict'

module.exports.checkForLeapYear = (year) => {
  return ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0))
}

module.exports.getMonthString = (monthNum) => {
  const month = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December'
  }

  return month[monthNum]
}

module.exports.getMonthLength = (month, year) => {
  let isLeapYear = module.exports.checkForLeapYear(year)
  let monthLengths = [
    31,
    28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
  ]
  let length = monthLengths[month - 1]
  if (month == 2 && isLeapYear) {
    return 29
  } else {
    return length
  }
}