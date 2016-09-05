'use strict'

module.exports.trimWeeks = (array) => {
  let trimWeek = array.map(week => module.exports.trim(week))
  return trimWeek
}

module.exports.trim = (array) => {
  let trim = []
  let string = array[0]
  string = string.trimRight()
  trim.push(string)
  return trim
}

// module.exports.newLineWeeks = (array) => {
//   let newLineWeek = array.map(week => module.exports.newLine(week))
//   return newLineWeek
// }

module.exports.newLine = (array) => {
  let newLine = []
  let string = array[0]
  string += '\n'
  newLine.push(string)
  return newLine
}