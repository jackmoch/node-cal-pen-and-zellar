'use strict'

const {
  assert
} = require('chai')
const {
  centerString,
  trim,
  newLine
} = require('../lib/render')
const {
  createYearHeader,
  createYearArray
} = require('../lib/year')

describe('year', () => {
  describe('createYearHeader', () => {
    it('should be a function', () => {
      assert.isFunction(createYearHeader)
    })
    it('should write out a header witih the year', () => {
      const expected = ['                             2016                               ']
      assert.deepEqual(centerString('2016', 64, true), expected)
    })
    it('should produce a trimmed year string inside an array', () => {
      const expected = ['                             2016']
      const yearArray = ['                             2016                               ']
      assert.deepEqual(trim(yearArray), expected)
    })
    it('should produce a string inside an array with \\n appended to end after passing an array', () => {
      const expected = ['                             2016\n']
      const yearArrayTrimmed = ['                             2016']
      assert.deepEqual(newLine(yearArrayTrimmed), expected)
    })
    it('should produce an array with trimmed string with a new line', () => {
      const expected = ['                             2016\n\n']
      assert.deepEqual(createYearHeader('2016'), expected)
    })
  })


  describe('createYearArray', () => {
    it('should be a function', () => {
      assert.isFunction(createYearArray)
    })
    it('should be an array of length 12', () => {
      const yearArray = createYearArray('2016')
      assert.equal(yearArray.length, 12)
    })
    it('should provide months with 6 arrays', () => {
      const yearArray = createYearArray('2016')
      assert.equal(yearArray[11].length, 8)
    })
    it('should contain a proper month header for the year calender', () => {
      const yearArray = createYearArray('2016')
      const monthHeader = yearArray[0][0]
      assert.equal(monthHeader, '      January       ')
    })
    it('should contain a proper 2nd week from the month of July', () => {
      const yearArray = createYearArray('2016')
      const secondWeek = yearArray[6][3]
      assert.deepEqual(secondWeek, [' 3  4  5  6  7  8  9'])
    })
  })
})