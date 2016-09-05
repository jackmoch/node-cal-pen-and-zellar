'use strict';

const {
  trim,
  newLine,
} = require('./format')

const { 
  getMonthString,
  getMonthLength
} = require('./dateConversion')

module.exports.renderCal = (dayOfWeek, dateObj) => {
  let monthString = getMonthString(dateObj.month) + ` ${dateObj.year}`
  let mainHeader = module.exports.centerString(monthString, 20, false)
  let fixedHeader = module.exports.createFixedHeader()
  let weeks = module.exports.createWeeks(dayOfWeek, dateObj.month, dateObj.year)
  let cal = []
  cal.push(newLine(trim(mainHeader)))
  cal.push(newLine(trim(fixedHeader)))
  weeks.forEach(week => {
    cal.push(newLine(trim(week)))
  })
  return cal
}

module.exports.renderYearCal = (dayOfWeek, dateObj) => {
  let monthString = getMonthString(dateObj.month)
  let mainHeader = module.exports.centerString(monthString, 20, false)
  let fixedHeader = module.exports.createFixedHeader()
  let weeks = module.exports.createWeeks(dayOfWeek, dateObj.month, dateObj.year)
  let cal = []
  cal.push(mainHeader)
  cal.push(fixedHeader)
  weeks.forEach(week => {
    cal.push(week)
  })
  return cal
}

module.exports.renderCalString = (array) => {
  let string = ''
  array.forEach((segment) => {
    string += segment[0]
  })
  return string
}

module.exports.centerString = (string, totalSpaces, yearCal) => {
  let NUM_LEADING_SPACES = Math.floor((Number(totalSpaces) - string.length) / 2)
  if (yearCal) {
    NUM_LEADING_SPACES--
  }
  const NUM_FILLING_SPACES = Number(totalSpaces) - NUM_LEADING_SPACES - string.length
  const leadingSpaces = Array(NUM_LEADING_SPACES).fill(' ').join('')
  const fillingSpaces = Array(NUM_FILLING_SPACES).fill(' ').join('')

  return [`${leadingSpaces}${string}${fillingSpaces}`]
}

module.exports.createFixedHeader = () => {
  return ['Su Mo Tu We Th Fr Sa']
}

module.exports.createWeeks = (dayOfWeek, month, year) => {

  let weeks = []
  let grids = 42
  const PADDING = ' '
  const EMPTY_GRID = '  '
  const monthLength = getMonthLength(month, year)

  let weekString = ''

  for (let x = 0; x < dayOfWeek; x++) {
    weekString += `${EMPTY_GRID}${PADDING}`
    grids--
  }

  for (let x = 1; x < monthLength + 1; x++) {
    let day = x < 10 ? ` ${x}` : `${x}`
    if ((grids - 1) % 7 === 0) {
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
    if ((grids - 1) % 7 === 0) {
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