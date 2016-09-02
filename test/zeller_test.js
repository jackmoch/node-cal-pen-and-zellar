'use strict';
const {
  assert
} = require('chai')
const {
  getDayOfWeek, modifiedMonth, modifiedYear
} = require('../lib/zeller')

describe('zeller', () => {

  describe('modifiedMonth', () => {

    it('should be a function', () => {
      assert.isFunction(modifiedMonth)
    })

    it('should handle Jan', () => {
      assert.strictEqual(modifiedMonth(1), 13)
    })

    it('should handle Feb', () => {
      assert.strictEqual(modifiedMonth(2), 14)
    })

    it('should handle other months', () => {
      assert.strictEqual(modifiedMonth(3), 3)
    })
  })

  describe('modifiedYear', () => {

    it('should be a function', () => {
      assert.isFunction(modifiedYear)
    })

    it('should handle Jan', () => {
      assert.strictEqual(modifiedYear(2000, 1), 1999)
    })

    it('should handle Feb', () => {
      assert.strictEqual(modifiedYear(2000, 2), 1999)
    })

    it('should handle other months', () => {
      assert.strictEqual(modifiedYear(2000, 3), 2000)
    })
  })
  describe('getDayOfWeek', () => {

    it('should be a function', () => {
      assert.isFunction(getDayOfWeek)
    })

    it('should return correct day of week', () => {
      const dateObj = {
        year: 1992,
        month: 4
      }
      assert.equal(getDayOfWeek(dateObj), 3)
    })
    it('should return correct day of week', () => {
      const dateObj = {
        year: 2019,
        month: 1
      }
      assert.equal(getDayOfWeek(dateObj), 2)
    })
    it('should return correct day of week', () => {
      const dateObj = {
        year: 2013,
        month: 9
      }
      assert.equal(getDayOfWeek(dateObj), 0)
    })
    it('should return correct day of week', () => {
      const dateObj = {
        year: 2007,
        month: 6
      }
      assert.equal(getDayOfWeek(dateObj), 5)
    })
    it('should return correct day of week for March 2016', () => {
      const dateObj = {
        year: 2016,
        month: 3
      }
      assert.equal(getDayOfWeek(dateObj), 2)
    })
  })
})