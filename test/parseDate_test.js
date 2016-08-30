'use strict'
const {
  assert
} = require('chai');
const {
  makeDateObj
} = require('../lib/makeDateObj.js')

describe('parseDate', () => {
  describe('makeDateObj', () => {
    it('should exist', () => {
      assert.isFunction(makeDateObj)
    })
    it('should return the date of today if passed no arguments', () => {
      const expected = {
        year: 2016,
        month: 8
      }
      assert.deepEqual(makeDateObj([]), expected)
    })
    it('should return requested year when passed one argument', () => {
      const expected = {
        year: 2017,
        month: 0
      }
      assert.deepEqual(makeDateObj(['2017']), expected)
    })
    it('should return requested month and year when passed two arguments', () => {
      const expected = {
        year: 2017,
        month: 2
      }
      assert.deepEqual(makeDateObj(['2', '2017']), expected)
    })
  })
})