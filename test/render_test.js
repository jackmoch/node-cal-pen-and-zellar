'use strict';

const {
  assert
} = require('chai')
const {
  renderCal,
  renderCalString,
  createWeeks,
  centerString,
  createFixedHeader,
  trim,
  trimWeeks,
  newLine
} = require('../lib/render')
const {
  checkForLeapYear,
  getMonthLength,
  getMonthString
} = require('../lib/dateConversion')

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
      assert.deepEqual(renderCal(1, {
        year: 2016,
        month: 8
      }), expected)
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
      assert.deepEqual(renderCalString(renderCal(1, {
        year: 2016,
        month: 8
      })), expected)
    })

  })

  describe('centerString', () => {
    it('should be a function', () => {
      assert.isFunction(centerString)
    })
    it('should take a month and year and return month year header', () => {
      const expected = ['    August 2016     ']
      assert.deepEqual(centerString('August 2016', 20), expected)
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
      assert.deepEqual(createWeeks(1, 8), expected)
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
      const month = trimWeeks(createWeeks(1, 8))
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