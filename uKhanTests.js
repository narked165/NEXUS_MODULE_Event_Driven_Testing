const assert = require('assert'), path = require('path'),

    UKHAN_MODULE = path.join(`${ __dirname  }/../main.js`),

    uKhan = require(UKHAN_MODULE).apply(this)

const Test = {
    timestamp() {
      let _d = new Date()
      return _d.toLocaleString()
    },
    coverage: {},
    on(condition, Fn) {
       this.coverage[condition] = this.coverage[condition] || []
       this.coverage[condition].push(Fn)
    },
    run(condition, params) {
        this.coverage[condition]
            ? this.coverage[condition].map(cond => {
                console.info("\x1b[33m", `\t -> TESTING:  ${ condition }`)
                let result = assert(cond.apply(this, [ params ]), condition)
                console.log("\x1b[32m", `\n\t\t ->  TEST RESULT: ${ typeof(result) === 'undefined' ? 'Pass' : 'Fail' }\n\n`)
              })
            : console.warn(`Condition: ${ condition }, is not registered in coverage.`)
    },
    runCoverage() {
        console.log("\x1b[34m",`--------------------------- EVENT DRIVEN TESTING  --------------------------------\n`)
        console.log("\x1b[35m", `-------------------------------${ this.timestamp() } -------------------------------`)
        let tests = Object.keys(Test.coverage)
        tests.map(test => Test.run(test))
    }
}
Test.on('Two plus Two is four', () => 2 + 2 === 4)
Test.on('Two plus two equals five', () => 2 + 2 === 5)
Test.runCoverage()