
// without asyncshronyous behaviour if any function is executed then that is not callbak function


// Exactly! A function is considered a callback function only when it is passed as an argument to another function and executed at a later time, typically after an asynchronous operation (like setTimeout, API calls, or event listeners).

// In your example, the second function is executed immediately inside the first function, which doesn't make it a proper callback.

// Key Characteristics of a Callback Function:
// It is passed as an argument to another function.
// It is executed later, usually after an asynchronous operation or a specific event


// Example of Not a Callback (Synchronous Execution):

function first(fun) {
    console.log("first function is executed");
    fun();  // Immediately executed
}

function second() {
    console.log("second function is executed");
}

first(second);

// Here, second is just a normal function call, not a proper callback, because it executes synchronously
// ////////////////////


function first(fun) {
    setTimeout(() => {
        console.log("first function is executed")
    }, 5000)
    fun()
}

function second() {
    console.log("second function is executed")
}

// Why is second not a proper callback?
// A callback function should execute after the asynchronous operation is completed.
// Here, fun() (which is second()) runs immediately instead of waiting for the setTimeout to complete.

first(second)

// second function is executed
// first function is executed

function first1(fun) {
    setTimeout(() => {
        console.log("first function1 is executed")
        fun()
    }, 2000)
}
function second1() {
    console.log("second function1 is executed")
}
// Now, second correctly acts as a callback since it executes after the asynchronous operation.
first1(second1)

// first function1 is executed
// second function1 is executed


// Is second1 a pure callback?
// Yes! Because: ✅ It is passed as an argument.
// ✅ It executes only after the asynchronous operation inside setTimeout.
// ✅ It does not execute immediately.

// So, second1 is a pure callback in this case. 🎯


// Conclusion:
// If the function executes immediately inside another function without waiting for an event or async process, it’s not a true callback.
// A callback should be executed later, usually after an asynchronous task.