'use strict';

const {
  centerString,
  trim,
  newLine,
  renderYearCal
} = require('../lib/render')
const {
  getDayOfWeek
} = require('../lib/zeller')

module.exports.createYearHeader = (yearString) => {
  let yearHeader = centerString(yearString, 64, true)
  yearHeader = trim(yearHeader)
  return yearHeader = newLine(newLine(yearHeader))
}

module.exports.createYearArray = (yearString) => {
  let yearArray = []
  for (let i = 0; i < 12; i++) {
    let dateObj = {
      month: i + 1,
      year: yearString
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