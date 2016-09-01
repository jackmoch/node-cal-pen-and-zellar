# Node-cal
A NSS group project. Team members for this group are Jack Mocherman and Walter Harms

##Purpose
Node-cal reverse engineers the [Unix shell (Bash)](https://en.wikipedia.org/wiki/Bash_(Unix_shell)) cal program. The technology being used is Node.JS v6.5.0.

##Testing
Testing was performed with Mocha.js and Chai.js.
```bash
 47  _-_-_-_-_-_-_-_-_-_-_-_-_-_-__,------,
 0   _-_-_-_-_-_-_-_-_-_-_-_-_-_-__|  /\_/\  
 0   _-_-_-_-_-_-_-_-_-_-_-_-_-_-_~|_( ^ .^)  
     _-_-_-_-_-_-_-_-_-_-_-_-_-_-_ ""  ""  

  47 passing (862ms)
```
##Coverage
Test coverage was provided by npm package [istanbul](https://www.npmjs.com/package/istanbul).
```
=============================================================================
Writing coverage object [/Users/jackmoch/workspace/group-projects/d14-calendar-project/node-cal-pen-and-zellar/coverage/coverage.json]
Writing coverage reports at [/Users/jackmoch/workspace/group-projects/d14-calendar-project/node-cal-pen-and-zellar/coverage]
=============================================================================

=============================== Coverage summary ===============================
Statements   : 95.6% ( 87/91 )
Branches     : 97.5% ( 39/40 )
Functions    : 100% ( 0/0 )
Lines        : 95.6% ( 87/91 )
================================================================================
```
Note: Statements and lines are < 100% due to the fact that the function render.renderCal() is never tested directly, however it is called 9 times in the permutations_test.js suite.
##Thanks
...to NSS Teaching Assistant Callan Morrison who provided invaluable assistance.
