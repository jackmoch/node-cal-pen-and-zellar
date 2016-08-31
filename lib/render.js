'use strict';

module.exports.getMonthString = (monthNum) => {
  const month = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December'
  }

  return month[monthNum]
}

module.exports.renderCal = (dayOfWeek, dateObj) => {
	let cal = module.exports.createMainHeader(dateObj.year, dateObj.month) + '\n'
	cal += module.exports.createFixedHeader() + '\n'
	cal += module.exports.createWeeks(dayOfWeek, dateObj.month, dateObj.year)
	return cal
}

module.exports.createMainHeader = (year, month) => {
  const leadingSpacesByMonth = {
    1: '    ',
    2: '   ',
    3: '     ',
    4: '     ',
    5: '      ',
    6: '     ',
    7: '     ',
    8: '    ',
    9: '   ',
    10: '    ',
    11: '   ',
    12: '   '
  }
  const monthString = module.exports.getMonthString(month)
  return `${leadingSpacesByMonth[month]}${monthString} ${year}`
}

module.exports.createFixedHeader = () => {
  return 'Su Mo Tu We Th Fr Sa'
}

module.exports.createWeeks = (dayOfWeek, month, year) => {

	let weeks = []

	for (let x = 0; x < dayOfWeek; x++) {
		weeks.push('  ')
	}

	let monthLength = module.exports.getMonthLength(month, year)
	for (let x = 0; x < monthLength; x++) {
		let day = x < 9 ? ` ${x+1}` : `${x+1}`
		weeks.push(day)
	}

	let lastIndex = weeks.length - 1
	let modWeeks = weeks.map( (day, index) => {
		let space = (index+1)%7 === 0 ? '\n' : ' '
		if (index === lastIndex) space = '\n'
		return day+space
	})

	return modWeeks.join('')

}

function getFebLength(year) {
  if (year % 400 === 0) {
    return 29
  } else if (year % 4 === 0) {
    if (year % 100 === 0) {
      return 28
    } else {
      return 29
    }
  }
}

module.exports.getMonthLength = (month, year) => {
  let monthLengths = [
    31,
    28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
  ]
  let length = monthLengths[month - 1]
  if (month !== 2) {
    return length
  } else {
    return getFebLength(year)
  }
}

// module.exports.createWeeks = (dayOfWeek, month, year) => {

//   let monthLength = module.exports.getMonthLength(month, year),
//     // leadingSpaces = '',
//     charCounter = dayOfWeek * 3,
//     weekString = ''

//   for (let i = 0; i < dayOfWeek; i++)(
//     weekString += '   '
//   )

//   for (let i = 1; i < monthLength + 1; i++) {
//     let currentDay = i < 10 ? ' ' + i + ' ' : i + ' '
//     // let currentDay = i < 10 ? ` ${i} ` : `${i} `
//     charCounter = charCounter + 3
//     if (charCounter === 21) {
//       currentDay = currentDay + '\n'
//       charCounter = 0
//     }
//     if (i - 1 === monthLength) {
//       for (let i = 0; i < charCounter - 20; i++) {
//         currentDay += ' '
//       }
//     }
//     weekString += currentDay
//   }

//   return weekString + '\n'

// }