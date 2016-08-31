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
  getMonthLength
} = require('../lib/render')

describe('render', () => {
  describe('renderCal', () => {

    it('should be a function', () => {
      assert.isFunction(renderCal)
    })

  })

  describe('createMainHeader', () => {
    it('should be a function', () => {
      assert.isFunction(createMainHeader)
    })
    it('should take a month and year and return month year header', () => {
      const expected = '     July 2016'
      assert.equal(createMainHeader(2016, 7), expected)
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
    it('should return an array with length an interval of 7', () => {
      let expected = '    1  2  3  4  5  6\n'
         expected += ' 7  8  9 10 11 12 13\n'
         expected += '14 15 16 17 18 19 20\n'
         expected += '21 22 23 24 25 26 27\n'
         expected += '28 29 30 31\n'

      const weeks = createWeeks(1, 8)
      console.log('weeks in progress', weeks)
      assert.equal(weeks, expected)
    })

  })
  describe('getMonthString', () => {
    it('should take a month num and return a full month string', () => {
      assert.equal(getMonthString(1), 'January')
      assert.equal(getMonthString(8), 'August')
    })
  })

})