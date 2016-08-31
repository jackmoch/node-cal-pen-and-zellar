'use strict';

const {
  assert
} = require('chai')
const {
  exec
} = require('child_process')

describe('testing mockcal', () => {
  it('testing output', () => {
    exec('bin/mockcal', (err, stdout) => {
      console.log('stdout from testing mockcal', stdout)
    })
  })
})

describe('cli', () => {
  it('should handle no args', (cb) => {
    exec('bin/mockcal', (err, stdout) => {
      exec('cal', (err2, stdout2) => {
        console.log('stdOut', stdout)
        assert.strictEqual(stdout, stdout2)
        cb()
      })
    })
  })
})