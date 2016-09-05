'use strict';

const {
  centerString,
  renderYearCal
} = require('../lib/render')
const {
  trim,
  newLine
} = require('../lib/format')
const {
  getDayOfWeek
} = require('../lib/zeller')

module.exports.createYearHeader = (yearString) => {
  let yearHeader = centerString(yearString, 64, true)
  yearHeader = trim(yearHeader)
  yearHeader = newLine(newLine(yearHeader))
  return yearHeader
}

module.exports.createYearArray = (yearString) => {
  let yearArray = []
  for (let i = 0; i < 12; i++) {
    let dateObj = {
      month: i + 1,
      year: Number(yearString)
    }
    let dayOfWeek = getDayOfWeek(dateObj)
    yearArray.push(renderYearCal(dayOfWeek, dateObj))
  }
  return yearArray
}

module.exports.createMonthRow = (yearArray, firstMonth) => {
  let spacer = '  '
  let row = yearArray[firstMonth][0].concat(yearArray[firstMonth + 1][0], yearArray[firstMonth + 2][0]).join(spacer)
  row = newLine(trim([row]))
  return row
}

module.exports.createDaysRow = () => {
  return ['Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa\n']
}

module.exports.createWeekRow = (yearArray, firstMonth, weekIndex) => {
  let spacer = '  '
  let row = yearArray[firstMonth][weekIndex].concat(yearArray[firstMonth + 1][weekIndex], newLine(trim(yearArray[firstMonth + 2][weekIndex]))).join(spacer)
  return [row]
}

module.exports.createYearString = (yearString) => {
  // create the string
  let year = ''
  // create the yearHeader
  let yearHeader = module.exports.createYearHeader(yearString)
  year += yearHeader[0]

  // // invoke creatYearArray
  let yearArray = module.exports.createYearArray(yearString)
  for (let firstMonth = 0; firstMonth < 12; firstMonth += 3) {
    let monthRow = module.exports.createMonthRow(yearArray, firstMonth)
    year += monthRow[0]
    let daysRow = module.exports.createDaysRow()
    year += daysRow[0]
    for (let weekIndex = 2; weekIndex < 8; weekIndex++) {
      let weekRow = module.exports.createWeekRow(yearArray, firstMonth, weekIndex)
      year += weekRow[0]
    }
  }

  // console.log('year from inside year.js &&&&&&&&&&&&&&&&&&', year)
  return year
}





