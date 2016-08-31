'use strict';

const {
  assert
} = require('chai')
const {
  exec
} = require('child_process')

describe('cli', () => {
  it('should handle no args', (cb) => {
    exec('bin/mockcal', (err, stdout) => {
      exec('cal', (err2, stdout2) => {
        assert.strictEqual(stdout, stdout2)
        cb()
      })
    })
  })
})