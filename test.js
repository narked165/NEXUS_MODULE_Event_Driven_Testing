/*
*  TITLE:  test.js
*  DESCRIPTION:  Event Driven Testing Export module
*  Date:  September 5, 2020
*  Author: Paul H. Fabing
*  Licence: MIT
*  Website: https://foothillcomputerrepair.org
*/


//  NodeJs Require
const assert = require('assert'), path = require('path'),

    UKHAN_MODULE = path.join(`${ __dirname  }/../main.js`),

    uKhan = require(UKHAN_MODULE).apply(this)

// Main export literal
const Test = {


    //  Simple timestamp generator
    timestamp() {
      let _d = new Date()
      return _d.toLocaleString()
    },


    //  Coverage literal object
    coverage: {},

    manifest() {
        return {
            Total: Object.keys(this.coverage).length,
            conditions: Object.keys(this.coverage),
            Tests: Object.entries(this.coverage)
        }
    },



    //  Event-test ADD-EVENT/ SUBSCRIBER  method
    on(condition, Fn) {
       this.coverage[condition] = this.coverage[condition] || []
       this.coverage[condition].push(Fn)
    },




    //  A Force remove that removes the associate conditional key and all of its inherited child functions.
    removeCondition(condition) {
      this.coverage[condition]
        ? delete this.coverage[condition]
        : console.warn(`EVENT-TEST: ${ condition }, does not exist.`)
    },


    //  Event-test EMIT/ Publish method
    run(condition, params) {
        this.coverage[condition]
            ? this.coverage[condition].map(cond => {
                console.info("\x1b[33m", `\t -> TESTING:  ${ condition }`)
                let result = assert(cond.apply(this, [ params ]), condition)
                console.log("\x1b[32m", `\n\t\t ->  TEST RESULT: ${ typeof(result) === 'undefined' ? 'Pass' : 'Fail' }\n\n`)
              })
            : console.warn(`Condition: ${ condition }, is not registered in coverage.`)
    },

    //  Event-test EMIT-All/ PUBLISH-ALL method
    runCoverage() {
        console.log("\x1b[34m",`--------------------------- EVENT DRIVEN TESTING  --------------------------------\n`)
        console.log("\x1b[35m", `-------------------------------${ this.timestamp() } -------------------------------`)
        let tests = Object.keys(Test.coverage)
        tests.map(test => Test.run(test))
    }
}

//  NodeJs, CommonJs export
modules.export = Test

//  @TOTDO: EcmaScript6 export needs assert polyfill

//  Test functionality
// Test.on('Two plus Two is four', () => 2 + 2 === 4)
// Test.on('Two plus two equals five', () => 2 + 2 === 5)
// Test.removeCondition('Two plus Two is four')
// Test.runCoverage()
