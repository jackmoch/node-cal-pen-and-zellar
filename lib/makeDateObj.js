'use strict';

module.exports.makeDateObj = (args) => {
  let isValid = module.exports.validateArgs(args)

  let dateObj = {}
  let currentDate = new Date()
  let year = currentDate.toString().split(' ')[3]
  let month = currentDate.toString().split(' ')[1]
  switch (args.length) {
    case 1:
      dateObj.year = Number(args[0])
      dateObj.month = 0
      break
    case 2:
      dateObj.year = Number(args[1])
      dateObj.month = Number(args[0])
      break
    default:
      dateObj.year = Number(year)
      dateObj.month = monthToInt(month)
  }
  return dateObj
}

let monthToInt = (monthString) => {
  let monthArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  return monthArray.indexOf(monthString) + 1
}

module.exports.validateArgs = (args) => {
  if (args.length === 0) {
    return true
  } else if (args.length === 1) {
    return checkForYear(args)
  } else if (args.length === 2) {
    return checkForMonth(args)
  }
}

let checkForYear = (args) => {
  if (args.length === 1) {
    return args[0] > 1752 && args[0] < 9999 ? true : false
  } else {
    return args[1] > 1752 && args[1] < 9999 ? true : false
  }
}

let checkForMonth = (args) => {
  if (args[0] < 0 || args[0] > 12) {
    return false
  } else {
    return checkForYear(args)
  }
}