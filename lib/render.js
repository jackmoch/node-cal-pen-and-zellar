'use strict';

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

module.exports.renderCal = (dayOfWeek, dateObj) => {
  let cal = module.exports.createMainHeader(dateObj.year, dateObj.month) + '\n'
  cal += module.exports.createFixedHeader() + '\n'
  cal += module.exports.createWeeks(dayOfWeek, dateObj.month, dateObj.year)
  return cal
}

module.exports.createMainHeader = (year, month) => {
  const leadingSpacesByMonth = {
    1: '    ',
    2: '   ',
    3: '     ',
    4: '     ',
    5: '      ',
    6: '     ',
    7: '     ',
    8: '    ',
    9: '   ',
    10: '    ',
    11: '   ',
    12: '   '
  }
  const monthString = module.exports.getMonthString(month)
  return `${leadingSpacesByMonth[month]}${monthString} ${year}`
}

module.exports.createFixedHeader = () => {
  return 'Su Mo Tu We Th Fr Sa'
}

module.exports.createWeeks = (dayOfWeek, month, year) => {

  let weeks = []

  for (let x = 0; x < dayOfWeek; x++) {
    weeks.push('  ')
  }

  let monthLength = module.exports.getMonthLength(month, year)
  for (let x = 0; x < monthLength; x++) {
    let day = x < 9 ? ` ${x+1}` : `${x+1}`
    weeks.push(day)
  }

  let lastIndex = weeks.length - 1
  let weekCounter = 1
  let modWeeks = weeks.map((day, index) => {
    let space
    if ((index + 1) % 7 === 0 || index === lastIndex) {
      space = '\n'
      weekCounter++
    } else {
      space = ' '
    }
    return day + space
  })

  modWeeks = modWeeks.join('')

  for (weekCounter; weekCounter < 7; weekCounter++) {
    modWeeks += '\n'
  }

  return modWeeks

}

// function getFebLength(year) {
//   if (year % 400 === 0) {
//     return 29
//   } else if (year % 4 === 0) {
//     if (year % 100 === 0) {
//       return 28
//     } else {
//       return 29
//     }
//   } else {
//     return 28
//   }
// }

module.exports.checkForLeapYear = (year) => {
  return ((year % 4 === 0 && year % 100 != 0) || (year % 400 === 0))
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