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

}

module.exports.createMainHeader = (year, month) => {

}

module.exports.createFixedHeader = () => {
	return 'Su Mo Tu We Th Fr Sa '
}

module.exports.createWeeks = (dayOfWeek, month) => {

}