'use strict'

const {
  assert
} = require('chai')
const {
  centerString,
} = require('../lib/render')
const {
  trim,
  newLine
} = require('../lib/format')
const {
  createYearHeader,
  createYearArray,
  createMonthRow,
  createDaysRow,
  createWeekRow,
  createYearString
} = require('../lib/year')
const {
  exec
} = require('child_process')

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

  describe('createMonthRow', () => {
    it('should be a function', () => {
      assert.isFunction(createMonthRow)
    })
    it('should create single array of month headers string', () => {
      const yearArray = createYearArray('2016')
      const yearRow = createMonthRow(yearArray, 0)
      assert.equal(yearRow.length, 1)
    })
    it('should concat the monthHeaders into one array', () => {
      const yearArray = createYearArray('2016')
      const expected = ['      January               February               March\n']
      const monthRow = createMonthRow(yearArray, 0)
      assert.deepEqual(monthRow, expected)
    })
    it('should concat the monthHeaders into one array', () => {
      const yearArray = createYearArray('2016')
      const expected = ['       April                  May                   June\n']
      const monthRow = createMonthRow(yearArray, 3)
      assert.deepEqual(monthRow, expected)
    })
  })

  describe('createDaysRow', () => {
    it('should be a function', () => {
      assert.isFunction(createDaysRow)
    })
    it('should concat the days headers into one array', () => {
      const yearArray = createYearArray('2016')
      const expected = ['Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa\n']
      assert.deepEqual(createDaysRow(), expected)
    })
  })

  describe('createWeekRow', () => {
    it('should be a function', () => {
      assert.isFunction(createWeekRow)
    })
    it('should concat the first weeks of three months into one array', () => {
      const yearArray = createYearArray('2016')
      const expected = ['                1  2      1  2  3  4  5  6         1  2  3  4  5\n']
      const weekRow = createWeekRow(yearArray, 0, 2)
      assert.deepEqual(weekRow, expected)
    })
    it('should concat the secondWeek weeks of three months into one array', () => {
      const yearArray = createYearArray('2016')
      const expected = [' 3  4  5  6  7  8  9   7  8  9 10 11 12 13   6  7  8  9 10 11 12\n']
      const weekRow = createWeekRow(yearArray, 0, 3)
      assert.deepEqual(weekRow, expected)
    })
    it('should concat the last weeks of three months into one array', () => {
      const yearArray = createYearArray('2016')
      const expected = ['31                                          \n']
      const weekRow = createWeekRow(yearArray, 0, 7)
      assert.deepEqual(weekRow, expected)
    })
  })
  describe('year string', () => {
    it('should be a function', () => {
      assert.isFunction(createYearString)
    })
    it('should produce a string', () => {
      const yearString = createYearString('2016')
      assert.equal((yearString.length > 0), true)
    })
    // it.skip('it should replicate bash command "cal"', () => {
    //   let expected
    //   exec('cal 2016', (err, stdout) => {
    //     expected = stdout
    //     done()
    //   })
    //   const yearString = createYearString('2016')
    //   assert.strictEqual(yearString, expected)
    // })
  })
})