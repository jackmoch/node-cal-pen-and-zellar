'use strict'

module.exports.getMessage = function({year, month}) {
	let message
	if (year > 9999 || year < 1753) {
		message = `node-cal: year ${year} not in range 1753..9999`
	} else {
		message = `node-cal: ${month} is neither a month number (1..12) nor a name`
	}
	return message
}




