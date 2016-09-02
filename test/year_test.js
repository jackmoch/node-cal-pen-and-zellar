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
  createYearHeader
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
})