
// Description


// An async function declaration creates an AsyncFunction object. Each time when an async function is called, it returns a new Promise which will be resolved with the value returned by the async function, or rejected with an exception uncaught within the async function.

// Async functions can contain zero or more await expressions.

/* async function demo() {
    const p = await promise
    console.log(p)
    const p1 = await promise2
    console.log(p1)
    console.log("after getting response")
}*/



//  Await expressions make promise-returning functions behave as though they're synchronous by suspending execution until the returned promise is fulfilled or rejected. The resolved value of the promise is treated as the return value of the await expression. Use of async and await enables the use of ordinary try / catch blocks around asynchronous code.



// Note: The await keyword is only valid inside async functions within regular JavaScript code. If you use it outside of an async function's body, you will get a SyntaxError.

// await can be used on its own with JavaScript modules.

// Note: The purpose of async/await is to simplify the syntax necessary to consume promise-based APIs. The behavior of async/await is similar to combining generators and promises.



// Async functions always return a promise. If the return value of an async function is not explicitly a promise, it will be implicitly wrapped in a promise.


const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promises resolve")
    }, 2000)
})
console.log("start")

async function demo() {
    const p = await promise
    console.log(p)
    console.log("after getting response")
}

console.log("end")

demo()

// start
// end
// promises resolve
// after getting response

// Key Point:
// await makes JavaScript wait until the promise is resolved before continuing execution of the function.
// However, this waiting only applies to the async function where await is used. Other code outside this function will continue running normally.


// The Await Keyword
// The await keyword basically makes JavaScript wait until the Promise object is resolved or rejected. Instead of having to use the callback pattern inside the then() method, you can assign the fulfilled promise into a variable like this:


const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
const json = await response.json();
console.log(json)


// The Async Keyword
// To create an asynchronous function, you need to add the async keyword before your function name. Take a look at line 1 in the example below:

async function runProcess() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const json = await response.json();
    console.log(json)
}

runProcess();


// How to Handle Errors in Async/Await
// To handle an error that might occur from the async/await syntax, you can use the try/catch block to catch any rejection from your promise.

// See the example below:

async function runProcess() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.log(error);
    }
}

runProcess();


// Why Use the async / await Syntax ?

//     The async / await syntax enables you to handle promises without using.then() and.catch() method chaining, which also removes the need for nested callbacks.

// This benefit is significant when you have a complex process after the promise is settled.

// Going back to our example above, suppose you have a conditional statement inside the.then() method as follows:

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => {
        if (json.userId == 1) {
            json.completed == false;
        } else {
            json.completed == true;
        }
    })
    .catch(error => console.log(error));

// Here, you can see that the callback function that accepts the json data has an if/else block inside it.

// This code is hard to reason with and modify when compared to the async/await version as follows:

(async function () {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const json = await response.json();
        if (json.userId == 1) {
            json.completed == false;
        } else {
            json.completed == true;
        }
        console.log(json);
    } catch (error) {
        console.log(error);
    }
})();


// By using the async/await syntax, you reduce the need for method chaining and nested callbacks. This impact the readability of your code, especially when you have nested code like if/else and a for loop block.






//------------------------------------->>>>>>>>>>>>> Benefits of Using async Function
// The async function syntax is more readable than using a promise chain or a callback function.
// The code is more readable than using a callback or a promise.
// Error handling is simpler.
// Debugging is easier.


// Note: These two keywords async/await were introduced in the newer version of JavaScript (ES8). Some older browsers may not support the use of async/await. To learn more, visit JavaScript async/await browser support.