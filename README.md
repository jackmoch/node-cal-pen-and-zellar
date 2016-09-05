# Mock-cal
A NSS group project. Team members for this group are Jack Mocherman and Dave Harms

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
Year usage is `mockcal 2016` which produces a whole year:
```bash
                             2016

      January               February               March
Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa
                1  2      1  2  3  4  5  6         1  2  3  4  5
 3  4  5  6  7  8  9   7  8  9 10 11 12 13   6  7  8  9 10 11 12
10 11 12 13 14 15 16  14 15 16 17 18 19 20  13 14 15 16 17 18 19
17 18 19 20 21 22 23  21 22 23 24 25 26 27  20 21 22 23 24 25 26
24 25 26 27 28 29 30  28 29                 27 28 29 30 31
31                                          
       April                  May                   June
Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa
                1  2   1  2  3  4  5  6  7            1  2  3  4
 3  4  5  6  7  8  9   8  9 10 11 12 13 14   5  6  7  8  9 10 11
10 11 12 13 14 15 16  15 16 17 18 19 20 21  12 13 14 15 16 17 18
17 18 19 20 21 22 23  22 23 24 25 26 27 28  19 20 21 22 23 24 25
24 25 26 27 28 29 30  29 30 31              26 27 28 29 30
                                            
        July                 August              September
Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa
                1  2      1  2  3  4  5  6               1  2  3
 3  4  5  6  7  8  9   7  8  9 10 11 12 13   4  5  6  7  8  9 10
10 11 12 13 14 15 16  14 15 16 17 18 19 20  11 12 13 14 15 16 17
17 18 19 20 21 22 23  21 22 23 24 25 26 27  18 19 20 21 22 23 24
24 25 26 27 28 29 30  28 29 30 31           25 26 27 28 29 30
31                                          
      October               November              December
Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa
                   1         1  2  3  4  5               1  2  3
 2  3  4  5  6  7  8   6  7  8  9 10 11 12   4  5  6  7  8  9 10
 9 10 11 12 13 14 15  13 14 15 16 17 18 19  11 12 13 14 15 16 17
16 17 18 19 20 21 22  20 21 22 23 24 25 26  18 19 20 21 22 23 24
23 24 25 26 27 28 29  27 28 29 30           25 26 27 28 29 30 31
30 31
```
This was validated with the following test:
```javascript
it('should produce a calender with just a year as arg', (cb) => {
  exec('bin/mockcal 2016', (err, stdout) => {
    exec('cal 2016', (err2, stdout2) => {
      assert.strictEqual(stdout, stdout2)
      cb()
    })
  })
})
```
##Testing 
Testing was performed with Mocha.js and Chai.js.
```bash
 90  -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_,------,
 0   -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_|   /\_/\ 
 0   -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-^|__( ^ .^) 
     -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-  ""  "" 

  90 passing (2s)
```
##Coverage
Test coverage was provided by npm package [istanbul](https://www.npmjs.com/package/istanbul).
```
=============================================================================
Writing coverage object [/Users/dave/workspace/node-milestone-2/node-cal-pen-and-zellar/coverage/coverage.json]
Writing coverage reports at [/Users/dave/workspace/node-milestone-2/node-cal-pen-and-zellar/coverage]
=============================================================================

=============================== Coverage summary ===============================
Statements   : 100% ( 193/193 )
Branches     : 100% ( 52/52 )
Functions    : 100% ( 1/1 )
Lines        : 100% ( 192/192 )
================================================================================

```
Note: Statements and lines are < 100% due to the fact that the function render.renderCal() is never tested directly, however it is called 9 times in the permutations_test.js suite.
##Thanks
...to NSS Teaching Assistant Callan Morrison who provided invaluable assistance.
