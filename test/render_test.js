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

})