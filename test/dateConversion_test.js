'use strict'

const { assert } = require('chai')
const { 
	getMonthLength,
	getMonthString,
	checkForLeapYear
} = require('../lib/dateConversion')

describe('dateConversion', () => {
	describe('getMonthLength', () => {
    it('it should return the correct amount of days in a month', () => {
      assert.equal(getMonthLength(8, 2016), 31)
      assert.equal(getMonthLength(2, 2016), 29)
      assert.equal(getMonthLength(2, 2000), 29)
      assert.equal(getMonthLength(2, 2400), 29)
      assert.equal(getMonthLength(2, 2100), 28)
      assert.equal(getMonthLength(2, 1800), 28)
      assert.equal(getMonthLength(2, 1900), 28)
    })
  })

  describe('getMonthString', () => {
    it('should take a month num and return a full month string', () => {
      assert.equal(getMonthString(1), 'January')
      assert.equal(getMonthString(8), 'August')
    })
  })

  describe('checkForLeapYear', () => {
    it('should return true or false based on if it is a leap year', () => {
      assert.equal(checkForLeapYear(2300), false)
      assert.equal(checkForLeapYear(1980), true)
      assert.equal(checkForLeapYear(1984), true)
    })
  })
})