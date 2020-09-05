# NEXUS_MODULE_Event_Driven_Testing

A vanilla JavaScript/ nodeJs  "Event Driven" single line Unit Testing Module, which emulates Mocha.  * No package management; No third-party dependencies.

The API is simple.  Write a test as a nodeJs Event.

  `Test.on('Two plus Two equals four' () => 2 + 2 === 4)  // true`
  
  `Test.on('Two plus two equals five', () => 2 + 2 === 5) //  false`
  
  `Test.runCoverage() // run all tests.`
  
  `// OUTPUT:`
  
 `--------------------------- EVENT DRIVEN TESTING  --------------------------------`

 `----------------------------9/5/2020, 3:14:49 PM -------------------------------`


` 	 -> TESTING:  Two plus Two is four`
 
`		 ->  TEST RESULT: Pass`


` 	 -> TESTING:  Two plus two equals five `
`Waiting for the debugger to disconnect...`
`assert.js:385
    throw err;
    ^

AssertionError [ERR_ASSERTION]: Two plus two equals five
    at /home/paul/dev/uKhan/Tests/uKhanTests.js:21:30
    at Array.map (<anonymous>)
    at Object.run (/home/paul/dev/uKhan/Tests/uKhanTests.js:19:40)
    at /home/paul/dev/uKhan/Tests/uKhanTests.js:30:32
    at Array.map (<anonymous>)
    at Object.runCoverage (/home/paul/dev/uKhan/Tests/uKhanTests.js:30:15)
    at Object.<anonymous> (/home/paul/dev/uKhan/Tests/uKhanTests.js:35:6)
    at Module._compile (internal/modules/cjs/loader.js:1256:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1277:10)
    at Module.load (internal/modules/cjs/loader.js:1105:32) {
  generatedMessage: false,
  code: 'ERR_ASSERTION',
  actual: false,
  expected: true,
  operator: '=='
}`
