'use strict';

const {
  centerString,
  trim,
  newLine
} = require('../lib/render')

module.exports.createYearHeader = (yearString) => {
  let yearHeader = centerString(yearString, 64, true)
  yearHeader = trim(yearHeader)
  return yearHeader = newLine(newLine(yearHeader))
}