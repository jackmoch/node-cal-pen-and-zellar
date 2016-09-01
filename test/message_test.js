'use strict'

const { assert } = require('chai')
const { getMessage } = require('../lib/message')

describe('message', () => {
	describe('getMessage', () => {
		it('will be a function', () => {
			assert.isFunction(getMessage)
		})
		it('will give appropriate usage message for out of bounds date', () => {
			const dateObj = { valid: false, month: 13, year: 2016}
			const expectedMessage = 'cal: 13 is neither a month number (1..12) nor a name'
				assert.equal(getMessage(dateObj), expectedMessage)
		})
	})
})



// node-cal 1752 // cal: year 1752 not in range 1753..9999
// node-cal 10000 // cal: year 10000 not in range 1753..9999
// node-cal 13 2015 // cal: month 13 not in range 1..12