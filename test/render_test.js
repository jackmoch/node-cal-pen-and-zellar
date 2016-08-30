'use strict';

const {
  assert
} = require('chai')
const {
  renderCal, createWeeks, createMainHeader, createFixedHeader, getMonthString
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

  describe('createWeeks', () => {

    it('should be a function', () => {
      assert.isFunction(createWeeks)
    })

  })
  describe('getMonthString', () => {
    it('should take a month num and return a full month string', () => {
      assert.equal(getMonthString(1), 'January')
      assert.equal(getMonthString(8), 'August')
    })
  })

})