# Mock-cal
A NSS group project. Team members for this group are Jack Mocherman and Walter Harms

##Purpose
Mock-cal reverse engineers the [Unix shell (Bash)](https://en.wikipedia.org/wiki/Bash_(Unix_shell)) cal program. The technology being used is Node.JS v6.5.0.

##Usage
Bash cal usage: `cal 9 2016` or `cal` produces:
```bash
   September 2016
Su Mo Tu We Th Fr Sa
             1  2  3
 4  5  6  7  8  9 10
11 12 13 14 15 16 17
18 19 20 21 22 23 24
25 26 27 28 29 30
```
Likewise, `mockcal 9 2016` or `mockcal` alsoe produces:
```bash
   September 2016
Su Mo Tu We Th Fr Sa
             1  2  3
 4  5  6  7  8  9 10
11 12 13 14 15 16 17
18 19 20 21 22 23 24
25 26 27 28 29 30
```
This is validated with the following test
```javascript
it('should handle two args (third test)', (cb) => {
  exec('bin/mockcal 9 2016', (err, stdout) => {
    exec('cal 9 2016', (err2, stdout2) => {
      assert.strictEqual(stdout, stdout2)
      cb()
    })
  })
})
```
##Testing
Testing was performed with Mocha.js and Chai.js.
```bash
 87  _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-__,------,
 0   _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-__|  /\_/\  
 0   _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_~|_( ^ .^)  
     _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_ ""  ""  

  87 passing (2s)
```
##Coverage
Test coverage was provided by npm package [istanbul](https://www.npmjs.com/package/istanbul).
```
=============================================================================
Writing coverage object [/Users/dave/workspace/node-milestone-2/node-cal-pen-and-zellar/coverage/coverage.json]
Writing coverage reports at [/Users/dave/workspace/node-milestone-2/node-cal-pen-and-zellar/coverage]
=============================================================================

=============================== Coverage summary ===============================
Statements   : 91.71% ( 177/193 )
Branches     : 96.3% ( 52/54 )
Functions    : 100% ( 1/1 )
Lines        : 92.15% ( 176/191 )
================================================================================

```
Note: Statements and lines are < 100% due to the fact that the function render.renderCal() is never tested directly, however it is called 9 times in the permutations_test.js suite.
##Thanks
...to NSS Teaching Assistant Callan Morrison who provided invaluable assistance.
