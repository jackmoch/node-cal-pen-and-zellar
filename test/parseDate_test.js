'use strict'
const {
  assert
} = require('chai');
const {
  makeDateObj,
  validateArgs
} = require('../lib/makeDateObj.js')

describe('parseDate', () => {
  describe('makeDateObj', () => {
    it('should exist', () => {
      assert.isFunction(makeDateObj)
    })
    it('should return the date of today if passed no arguments', () => {
      const expected = {
        valid: true,
        year: 2016,
        month: 9
      }
      assert.deepEqual(makeDateObj([]), expected)
    })
    it('should return requested year when passed one argument', () => {
      const expected = {
        valid: true,
        year: 2017,
        month: 0
      }
      assert.deepEqual(makeDateObj(['2017']), expected)
    })
    it('should return requested month and year when passed two arguments', () => {
      const expected = {
        valid: true,
        year: 2017,
        month: 2
      }
      assert.deepEqual(makeDateObj(['2', '2017']), expected)
    })
  })

  describe('validateArgs', () => {

    it('should be a function', () => {
      assert.isFunction(validateArgs)
    })

    it('should return true when passed no arguments', () => {
      assert.equal(validateArgs([]), true)
    })

    it('should return true when passed just a year', () => {
      assert.equal(validateArgs(['2016']), true)
    })

    it('should return true when passed a valid month followed by a valid year', () => {
      assert.equal(validateArgs(['1', '2016']), true)
    })

    it('shoul return false if passed a year below 1753', () => {
      assert.equal(validateArgs(['1752']), false)
    })

    it('shoul return false if passed a year below 1753 and a month', () => {
      assert.equal(validateArgs(['1', '1752']), false)
    })

    it('shoul return false if passed a year above 9999', () => {
      assert.equal(validateArgs(['10000']), false)
    })

    it('shoul return false if passed a year above 9999 and a month', () => {
      assert.equal(validateArgs(['1', '10000']), false)
    })

    it('should return false if passed a month above 12', () => {
      assert.equal(validateArgs(['13', '2016']), false)
    })

    it('should return false if passed a non numeric character', () => {
      assert.equal(validateArgs(['a']), false)
    })

  })

})