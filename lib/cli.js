'use strict';

const {
  argv: [, , ...args]
} = process
const {
  dateObj
} = require('./makeDateObj')(args)
const {
  dayOfWeek
} = require('./zeller.js')(dateObj)