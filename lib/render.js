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
  const monthYearString = `${module.exports.getMonthString(month)} ${year}`
  const NUM_LEADING_SPACES = Math.floor((20 - monthYearString.length)/2)
  const NUM_FILLING_SPACES = 20 - NUM_LEADING_SPACES - monthYearString.length
  const leadingSpaces = Array(NUM_LEADING_SPACES).fill(' ').join('')
  const fillingSpaces = Array(NUM_FILLING_SPACES).fill(' ').join('')

  return `${leadingSpaces}${monthYearString}${fillingSpaces}`
}

module.exports.createFixedHeader = () => {
  return 'Su Mo Tu We Th Fr Sa'
}

module.exports.createWeeks = (dayOfWeek, month, year) => {

  let weeks = []
  let grids = 42
  const PADDING = ' '
  const EMPTY_GRID = '  '
  const monthLength = module.exports.getMonthLength(month, year)

  let weekString = ''

  for (let x = 0; x < dayOfWeek; x++) {
    weekString += `${EMPTY_GRID}${PADDING}`
    grids--
  }

  for (let x = 1; x < monthLength + 1; x++) {
    let day = x < 10 ? ` ${x}` : `${x}`
    if ((grids - 1)%7 === 0) {
      weekString += `${day}`
    } else {
      weekString += `${day}${PADDING}`
    }

    if (weekString.length === 20) {
      let week = []
      week.push(weekString)
      weeks.push(week)
      weekString = ''
    } 
    grids--
  }

  const GRIDS = grids
  for (let x = 0; x < GRIDS; x++) {
    if ((grids-1)%7 === 0) {
      weekString += `${EMPTY_GRID}`
    } else {
      weekString += `${EMPTY_GRID}${PADDING}`
    }
    if (weekString.length === 20 || grids === 0) {
      let week = []
      week.push(weekString)
      weeks.push(week)
      weekString = ''
    }
    grids--
  }


  return weeks

}

module.exports.trimWeeks = (array) => {
  let trimWeek = array.map(week => module.exports.trim(week))
  return trimWeek
}

module.exports.trim = (array) => {
  let trim = []
  let string = array[0]
  string = string.trimRight()
  trim.push(string)
  return trim 
}

module.exports.newLine = (array) => {
  let newLine = []
  let string = array[0]
  string += '\n'
  newLine.push(string)
  return newLine
}

module.exports.checkForLeapYear = (year) => {
  return ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0))
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