'use strict';

const {
  assert
} = require('chai')
const {
  renderCal,
  renderCalString,
  createWeeks,
  createMainHeader,
  createFixedHeader,
  getMonthString,
  getMonthLength,
  checkForLeapYear,
  trim,
  trimWeeks,
  newLine
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
      assert.deepEqual(renderCal(1,{ year: 2016, month: 8}), expected)
    })

  })

    describe('renderCalString', () => {

    it('should be a function', () => {
      assert.isFunction(renderCal)
    })
    it('should render out a string', () => {
      const expected = '    August 2016\n' +
                       'Su Mo Tu We Th Fr Sa\n' +
                       '    1  2  3  4  5  6\n' +
                       ' 7  8  9 10 11 12 13\n' +
                       '14 15 16 17 18 19 20\n' +
                       '21 22 23 24 25 26 27\n' +
                       '28 29 30 31\n' +
                       '\n'
      assert.deepEqual(renderCalString(renderCal(1,{ year: 2016, month: 8})), expected)
    })

  })

  describe('createMainHeader', () => {
    it('should be a function', () => {
      assert.isFunction(createMainHeader)
    })
    it('should take a month and year and return month year header', () => {
      const expected = ['    August 2016     ']
      assert.deepEqual(createMainHeader(2016, 8), expected)
    })
  })

  describe('createFixedHeader', () => {

    it('should be a function', () => {
      assert.isFunction(createFixedHeader)
    })
    it('should return a string of Su to Sa', () => {
      let expected = ['Su Mo Tu We Th Fr Sa']
      assert.deepEqual(createFixedHeader(), expected)
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
    it('should return an array of 6 arrays', () => {
      const expected = [
        ['    1  2  3  4  5  6'],
        [' 7  8  9 10 11 12 13'],
        ['14 15 16 17 18 19 20'],
        ['21 22 23 24 25 26 27'],
        ['28 29 30 31         '],
        ['                    ']
      ]
      assert.deepEqual(createWeeks(1,8), expected)
    })
    it('should return an array of 6 trimmed array', () => {
      const expected = [
        ['    1  2  3  4  5  6'],
        [' 7  8  9 10 11 12 13'],
        ['14 15 16 17 18 19 20'],
        ['21 22 23 24 25 26 27'],
        ['28 29 30 31'],
        ['']
      ]
      const month = trimWeeks(createWeeks(1,8))
      assert.deepEqual(month, expected)
    })

  describe('newLine', () => {
    it('should be a function', () => {
      assert.isFunction(newLine)
    })
    it('will add "\\n" to the end of an array', () => {
      const array = ['    1  2  3  4  5  6']
      const expected = ['    1  2  3  4  5  6\n']
      assert.deepEqual(newLine(array), expected)
    })
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
      const testString = ['25 26 27 28 29      ']
      const expected = ['25 26 27 28 29']
      assert.deepEqual(trim(testString), expected)
    })
    it('it should trim a main header', () => {
      const mainHeader = ['    August 2016     ']
      const expected = ['    August 2016']
      assert.deepEqual(trim(mainHeader), expected)
    })
  })

})