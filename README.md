# NEXUS_MODULE_Event_Driven_Testing
A vanilla JavaScript/ nodeJs  "Event Driven" single line Unit Testing Module, which emulates Mocha.  * No package management; No third-party dependencies.
# VanillaJs Event-Driven Testing
![Event-Driven-Testing](https://nexusone.sfo2.digitaloceanspaces.com/NEXUS-VanillaJs-NEXUS-gadgetJs_v1.0.0/EventDrivenTesting.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=BYMY2DJBUWDCH4G7FJJD%2F20200905%2Fsfo2%2Fs3%2Faws4_request&X-Amz-Date=20200905T230401Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=7119f9cd7b223df56478c861e49468cb36080d6920156dd45c27c7624b628a32)
**Website:**
[Foothill Computer Repair/ Event-Driven-Testing](https://foothillcomputerrepair.org/vanillajs/event-testing/index.html)

CDN:  
[Event-Driven-Testing-JavaScript-File](https://nexusone.sfo2.digitaloceanspaces.com/NEXUS-VanillaJs-NEXUS-gadgetJs_v1.0.0/uKhanTests.js?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=BYMY2DJBUWDCH4G7FJJD/20200905/sfo2/s3/aws4_request&X-Amz-Date=20200905T230514Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=9c33506a247b69ccdeb1b70ce275ed3312a051cec074a566ab6888e42f6708f6)
**Description:**
The Scope of this project is to demonstrate the raw power and flexibility of VanillaJs, both in nodeJs and on the web.  This stand-alone module, is the first of many.  While, I will not claim it to be a one-stop shop for end-to-end testing, its simplicity, ease of use and low processing cost make it ideal for rapid testing of any type.  

**API**
This API demonstrates the single line interface, used for all tests.
No need to describe a condition.  Simply, write your condition as an event directive, then callback your expression.

CODE:

 1.   Test.on('Two plus two is equal to four', () => 2 + 2 === 4

2.	    Test.on('Two plus two is equal to five', () => 2 + 2 === 5

*RESULT:*

        --------------------------- EVENT DRIVEN TESTING  --------------------------------
    
     -------------------------------9/5/2020, 3:14:49 PM -------------------------------
     	 -> TESTING:  Two plus Two is four
     
    		 ->  TEST RESULT: Pass
    
    
     	 -> TESTING:  Two plus two equals five
    Waiting for the debugger to disconnect...
    assert.js:385
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
    }
That's it.  Happy Coding.
