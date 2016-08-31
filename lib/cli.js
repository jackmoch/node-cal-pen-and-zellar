'use strict';

const {
  argv: [, , ...args]
} = process
// console.log('argv', args)

// const {
//   dateObj
// } = require('./makeDateObj')(args)
// console.log('dateObj', dateObj)
const testicle = require('./makeDateObj')
const dateObj = testicle.makeDateObj(args)
// console.log('dateObj', dateObj)

// getting days of week with zeller.js

const { getDayOfWeek } = require('./zeller')
const dayOfWeek = getDayOfWeek(dateObj)
// console.log('dayOfWeek', dayOfWeek)

const { renderCal } = require('./render')
const renderedCal = renderCal(dayOfWeek, dateObj)

console.log(renderedCal)
// const {
//   dayOfWeek
// } = require('./zeller')(dateObj)
// console.log('dayOfWeek', dayOfWeek)

// const {
//   renderedCal
// } = require('./render')(dayOfWeek, dateObj)
// console.log('renderedCal', renderedCal)