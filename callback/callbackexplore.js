function firstFunction(second) {
    // console.log(typeof (second))===>function
    setTimeout(() => {
        console.log("first functions")

        second()
    }, 1000)
    console.log("this is not waiting")
}

function secondFunction() {
    console.log("second functions")
}


firstFunction(secondFunction)

console.log("end of scripts")


// this is not waiting==><-- This runs immediately, proving that JS doesn't wait!
// end of scripts===><-- This runs immediately, proving that JS doesn't wait!
// first functions
// second functions


// Good question! It may look like secondFunction is "waiting" for firstFunction to finish, but that's not actually what's happening. Let’s break it down in detail.


// Why is this still asynchronous?

// In JavaScript, when we use setTimeout, we are not making firstFunction pause execution. Instead, we are scheduling the callback function (() => { console.log("first functions"); second(); }) to run later, after 1 second.

// Here’s the execution flow:

// firstFunction(secondFunction) is called.

// Inside firstFunction:
// setTimeout is called.
// The timer starts counting in the background.
// Meanwhile, JavaScript does not wait and continues execution.
// Since there's no more code after setTimeout, JavaScript moves on.
// After 1 second, the callback inside setTimeout executes:
// "first functions" is logged.
// secondFunction() is called.
// "second functions" is logged.




function firstFunction(second) {//in this code, secondFunction is passed as a callback to firstFunction.
    setTimeout(() => {
        console.log("first functions")
    }, 1000)
    second()
    console.log("this is not waiting")
}

function secondFunction() {
    console.log("second functions")
}


firstFunction(secondFunction)
console.log("end of scripts")

// second functions
// this is not waiting
// end of scripts
// first functions


// Key Takeaways
// ✅ JavaScript does not wait for setTimeout to finish.
// ✅ The asynchronous operation (setTimeout) is deferred, allowing the rest of the code to execute first.
// ✅ secondFunction runs before "first functions", proving that JavaScript does not block execution.


// So, in simpler terms:

// secondFunction is the actual function you want to use as a callback.
// second is just the name (or identifier) for that callback function within firstFunction.
// In short, second is the callback because it's the function that gets passed and executed inside firstFunction.