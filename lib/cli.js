'use strict';

const {
  argv: [, , ...args]
} = process
const {
  dateObj
} = require('./makeDateObj')(args)
const {
  dayOfWeek
} = require('./zeller')(dateObj)
const {
  renderedCal
} = require('./render')(dayOfWeek, dateObj)