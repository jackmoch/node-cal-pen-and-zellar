'use strict';

const {
  argv: [, , ...args]
} = process
const parseArgs = require('./makeDateObj')
const { createYearString } = require('./year')
const dateObj = parseArgs.makeDateObj(args)
if (dateObj.valid === true) {
  if (dateObj.month === 0) {
    let yearString = createYearString(`${dateObj.year}`)
    process.stdout.write(yearString)
  } else {
    const {
      getDayOfWeek
    } = require('./zeller')
    const dayOfWeek = getDayOfWeek(dateObj)
    const {
      renderCal, renderCalString
    } = require('./render')
    const renderedCal = renderCal(dayOfWeek, dateObj)
    const calString = renderCalString(renderedCal)
    process.stdout.write(calString)
  } 
} else {
  const message = require('./message')
  process.stdout.write(message(dateObj))
}