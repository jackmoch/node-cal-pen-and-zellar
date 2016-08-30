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
  })
})