'use strict'

const { assert } = require('chai')
const { 
	trim,
	newLine
} = require('../lib/format')

describe('format', () => {
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