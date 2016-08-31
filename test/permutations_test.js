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

  it('should handle two args (first test)', (cb) => {
    exec('bin/mockcal 3 2016', (err, stdout) => {
      exec('cal 3 2016', (err2, stdout2) => {
        assert.strictEqual(stdout, stdout2)
        cb()
      })
    })
  })

  it('should handle two args (first test)', (cb) => {
    exec('bin/mockcal 9 2016', (err, stdout) => {
      exec('cal 9 2016', (err2, stdout2) => {
        assert.strictEqual(stdout, stdout2)
        cb()
      })
    })
  })

  it('should handle two args (first test)', (cb) => {
    exec('bin/mockcal 2 2016', (err, stdout) => {
      exec('cal 2 2016', (err2, stdout2) => {
        assert.strictEqual(stdout, stdout2)
        cb()
      })
    })
  })

  it('should handle two args (first test)', (cb) => {
    exec('bin/mockcal 2 2017', (err, stdout) => {
      exec('cal 2 2017', (err2, stdout2) => {
        assert.strictEqual(stdout, stdout2)
        cb()
      })
    })
  })

  it('should handle two args (third test)', (cb) => {
    exec('bin/mockcal 2 2015', (err, stdout) => {
      exec('cal 2 2015', (err2, stdout2) => {
        assert.strictEqual(stdout, stdout2)
        cb()
      })
    })
  })

  it('should handle two args (third test)', (cb) => {
    exec('bin/mockcal 1 2016', (err, stdout) => {
      exec('cal 1 2016', (err2, stdout2) => {
        assert.strictEqual(stdout, stdout2)
        cb()
      })
    })
  })

  it('should handle two args (third test)', (cb) => {
    exec('bin/mockcal 4 2017', (err, stdout) => {
      exec('cal 4 2017', (err2, stdout2) => {
        assert.strictEqual(stdout, stdout2)
        cb()
      })
    })
  })

  it('should handle two args (third test)', (cb) => {
    exec('bin/mockcal 2 2100', (err, stdout) => {
      exec('cal 2 2100', (err2, stdout2) => {
        assert.strictEqual(stdout, stdout2)
        cb()
      })
    })
  })

  it('should handle two args (third test)', (cb) => {
    exec('bin/mockcal 2 2000', (err, stdout) => {
      exec('cal 2 2000', (err2, stdout2) => {
        assert.strictEqual(stdout, stdout2)
        cb()
      })
    })
  })

})