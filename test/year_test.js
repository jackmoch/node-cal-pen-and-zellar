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
  createYearArray,
  createYearRow,
  createMonthRow,
  createDaysRow,
  createWeekRow
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

  describe('createYearRow', () => {
  	it('should be a function', () => {
  		assert.isFunction(createYearRow)
  	})
  	it('should produce an array of 3 months', () => {
  		const yearRow = createYearRow(0)
  		assert.equal(yearRow.length, 3)
  	})
  	it('should have the correct month headers', () => {
  		const yearRow = createYearRow(0)
  		const januaryHeader = yearRow[0][0]
  		const expected = '      January       '
  		assert.equal(januaryHeader, expected)
  	})
  })

  describe('createMonthRow', () => {
  	it('should concat the monthHeaders into one array', () => {
  		const yearRow = createYearRow(0)
  		const expected = ['      January               February               March\n']
  		const monthRow = createMonthRow(yearRow)
  		assert.deepEqual(monthRow, expected)
  	})
  })

  describe('createDaysRow', () => {
  	it('should concat the days headers into one array', () => {
  		const yearRow = createYearRow(0)
  		const expected = ['Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa\n']
  		const daysRows = createDaysRow(yearRow)
  		assert.deepEqual(daysRows, expected)
  	})
  })

  describe('createWeekRow', () => {
  	it('should concat the first weeks of three months into one array', () => {
  		const yearRow = createYearRow(0)
  		const expected = ['               1  2      1  2  3  4  5  6         1  2  3  4  5\n']
  		const weekRow = createWeekRow(yearRow)
  		assert.deepEqual(weekRow, expected)
  	})
  	it('should concat the secondWeek weeks of three months into one array', () => {
  		const yearRow = createYearRow(0)
  		const expected = [' 3  4  5  6  7  8  9   7  8  9 10 11 12 13   6  7  8  9 10 11 12\n']
  		const weekRow = createWeekRow(yearRow)
  		assert.deepEqual(weekRow, expected)
  	})
  	it('should concat the last weeks of three months into one array', () => {
  		const yearRow = createYearRow(0)
  		const expected = ['31                                          \n']
  		const weekRow = createWeekRow(yearRow)
  		assert.deepEqual(weekRow, expected)
  	})
  })
})