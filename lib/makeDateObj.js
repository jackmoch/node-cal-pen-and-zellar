'use strict';

module.exports.makeDateObj = (args) => {
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