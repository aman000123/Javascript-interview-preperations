
// In JavaScript, a promise is a good way to handle asynchronous operations. It is used to find out if the asynchronous operation is successfully completed or not.

// A promise may have one of three states.

// Pending
// Fulfilled
// Rejected


// A promise starts in a pending state. That means the process is not complete. If the operation is successful, the process ends in a fulfilled state. And, if an error occurs, the process ends in a rejected state.


// For example, when you request data from the server by using a promise, it will be in a pending state. When the data arrives successfully, it will be in a fulfilled state. If an error occurs, then it will be in a rejected state.

// catch()	Appends the rejection handler callback
// then()	Appends the resolved handler callback
// finally()	Appends a handler to the promise


// Create a Promise
// To create a promise object, we use the Promise() constructor.

let promise = new Promise(function (resolve, reject) {
    //do something
});

// The Promise() constructor takes a function as an argument. The function also accepts two functions resolve() and reject().

// If the promise returns successfully, the resolve() function is called. And, if an error occurs, the reject() function is called.


// JavaScript Promise Chaining
// In JavaScript, a promise can be chained. It means you can call multiple promises one after another
// Promises are useful when you have to handle more than one asynchronous task, one after another. For that, we use promise chaining


// You can perform an operation after a promise is resolved using methods then(), catch() and finally().

// JavaScript then() method

// The then() method is used with the callback when the promise is successfully fulfilled or resolved.



// returns a promise

let countValue = new Promise(function (resolve, reject) {
    resolve("Promise resolved");
});

// executes when promise is resolved successfully

countValue
    .then(function successValue(result) {
        console.log(result);
    })

    .then(function successValue1() {
        console.log("You can call multiple functions this way.");
    });


//     In the above program, the then() method is used to chain the functions to the promise. The then() method is called when the promise is resolved successfully.

// You can chain multiple then() methods with the promise.



// JavaScript catch() method
// The catch() method is used with the callback when the promise is rejected or if an error occurs. For example,

// returns a promise
let countValues = new Promise(function (resolve, reject) {
    reject('Promise rejected');
});

// executes when promise is resolved successfully
countValues.then(
    function successValue(result) {
        console.log(result);
    },
)

    // executes if there is an error
    .catch(
        function errorValue(result) {
            console.log(result);
        }
    );


// In the above program, the promise is rejected. And the catch() method is used with a promise to handle the error.


  finally() //method
// The finally() method is used with the callback when the promise is either resolved successfully or rejected. For example,



// all(iterable)==========>	Waits for all promises to be resolved or any one to be rejected
// allSettled(iterable)=============>	Waits until all promises are either resolved or rejected
// any(iterable)===========>	Returns the promise value as soon as any one of the promises is fulfilled
// race(iterable)===============>	Wait until any of the promises is resolved or rejected




// You can also use the finally() method with promises. The finally() method gets executed when the promise is either resolved successfully or rejected



// =============================>JavaScript Promise Versus Callback

// Promises are similar to callback functions in a sense that they both can be used to handle asynchronous tasks.

// JavaScript callback functions can also be used to perform synchronous tasks.

// Their differences can be summarized in the following points:


// JavaScript Promise

// 1-The syntax is user-friendly and easy to read.
//2- Error handling is easier to manage.

// Example:



api().then(function (result) {
    return api2();
}).then(function (result2) {
    return api3();
}).then(function (result3) {
    // do work
}).catch(function (error) {
    //handle any error that may occur before this point 
});


// JavaScript Callback
// 1-The syntax is difficult to understand.
// 2-Error handling may be hard to manage.

// Example:

api(function (result) {
    api2(function (result2) {
        api3(function (result3) {
            // do work
            if (error) {
                // do something
            }
            else {
                // do something
            }
        });
    });
});