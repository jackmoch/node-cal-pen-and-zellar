'use strict';

const {
  assert
} = require('chai')
const {
  renderCal, createWeeks, createMainHeader, createFixedHeader
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

  })

  describe('createWeeks', () => {

    it('should be a function', () => {
      assert.isFunction(createWeeks)
    })

  })

})