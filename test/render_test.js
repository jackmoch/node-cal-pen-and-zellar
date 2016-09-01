'use strict';

const {
  assert
} = require('chai')
const {
  renderCal,
  createWeeks,
  createMainHeader,
  createFixedHeader,
  getMonthString,
  getMonthLength,
  checkForLeapYear,
  trim
} = require('../lib/render')

describe('render', () => {
  describe('renderCal', () => {

    it('should be a function', () => {
      assert.isFunction(renderCal)
    })
    it('should render out an array of 8 arrays', () => {
      const expected = [
        ['    August 2016\n'],
        ['Su Mo Tu We Th Fr Sa\n'],
        ['    1  2  3  4  5  6\n'],
        [' 7  8  9 10 11 12 13\n'],
        ['14 15 16 17 18 19 20\n'],
        ['21 22 23 24 25 26 27\n'],
        ['28 29 30 31\n'],
        ['\n']
      ]
      assert.equal(renderCal(1,{ year: 2016, month: 8}), expected)
    })

  })

  describe('createMainHeader', () => {
    it('should be a function', () => {
      assert.isFunction(createMainHeader)
    })
    it('should take a month and year and return month year header', () => {
      const expected = '    August 2016     '
      assert.equal(createMainHeader(2016, 8), expected)
    })
  })

  describe('createFixedHeader', () => {

    it('should be a function', () => {
      assert.isFunction(createFixedHeader)
    })
    it('should return a string of Su to Sa', () => {
      let expected = 'Su Mo Tu We Th Fr Sa'
      assert.equal(createFixedHeader(), expected)
    })

  })
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

  describe('createWeeks', () => {

    it('should be a function', () => {
      assert.isFunction(createWeeks)
    })
    // it('should return a string with new line after each week', () => {
    //   let expected = '    1  2  3  4  5  6\n'
    //   expected += ' 7  8  9 10 11 12 13\n'
    //   expected += '14 15 16 17 18 19 20\n'
    //   expected += '21 22 23 24 25 26 27\n'
    //   expected += '28 29 30 31\n\n'

    //   const weeks = createWeeks(1, 8)
    //   console.log('weeks in progress', weeks)
    //   assert.equal(weeks, expected)
    // })
    // 
    it('should return an array of 6 arrays', () => {
      const expected = [
        ['    1  2  3  4  5  6'],
        [' 7  8  9 10 11 12 13'],
        ['14 15 16 17 18 19 20'],
        ['21 22 23 24 25 26 27'],
        ['28 29 30 31         '],
        ['                    ']
      ]
      assert.equal(createWeeks(1,8), expected)
    })
    it('should return an array of 6 trimmed array', () => {
      const expected = [
      ]
      const month = trim(createWeeks(1,8))
      assert.equal(month, expected)
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

  describe('trim', () => {
    it('it should remove spaces to the right of string', () => {
      const testString = '25 26 27 28 29      '
      const expected = '25 26 27 28 29'
      assert.equal(trim(testString), expected)
    })
  })

})