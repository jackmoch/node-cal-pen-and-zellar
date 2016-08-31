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
      const expected = '     July 2016\n'
      assert.equal(createMainHeader(2016, 7), expected)
    })
  })

  describe('createFixedHeader', () => {

    it('should be a function', () => {
      assert.isFunction(createFixedHeader)
    })
    it('should return a string of Su to Sa', () => {
      let expected = 'Su Mo Tu We Th Fr Sa '
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
      const weeks = createWeeks(1, 8)
    })

  })
  describe('getMonthString', () => {
    it('should take a month num and return a full month string', () => {
      assert.equal(getMonthString(1), 'January')
      assert.equal(getMonthString(8), 'August')
    })
  })

})