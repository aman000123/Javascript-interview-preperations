

// A callback in programming refers to a function that is passed as an argument to another function and is executed after a specific task or event occurs. Callbacks are essential because they allow you to write more flexible and asynchronous code.



// Callbacks are fundamental in JavaScript and many other programming languages for handling asynchronous tasks, enabling modular code, and managing event-driven environments.



// In JavaScript, a callback is a function that is passed as an argument to another function and is executed after an asynchronous operation or when a certain condition is met.




///////////////////// An ulternative way for using callback is Promise


//the function which accept a function as an arguments function is called callback fuction

//the function which accept a function as an arguments or return a function is called higher ordered function




///////////////////////////////////////Why are callbacks needed?

// Asynchronous Operations
// Modularity and Reusability 
// Event Handling

// The callbacks are needed because javascript is an event driven language. That means instead of waiting for a response javascript will keep executing while listening for other events.

//example


function firstFunction() {
    // Simulate a code delay
    setTimeout(function () {
        console.log("First function called");
    }, 1000);
}
function secondFunction() {
    console.log("Second function called");
}
firstFunction();
secondFunction();


// Second function called
// First function called

// As observed from the output, javascript didn't wait for the response of the first function and the remaining code block got executed. So callbacks are used in a way to make sure that certain code doesn’t execute until the other code finishes execution.




//so needs of callback from above codes


////////now using callback function then js wait for first function competes then second hoga

function firstFunction(secondFunction) {
    // Simulate a code delay
    setTimeout(function () {
        console.log("First function called");
        secondFunction()
    }, 1000);
}
function secondFunction() {
    console.log("Second function called");
}
firstFunction(secondFunction);



// First function called
// Second function called


// in async behaviour function is not wait for another but here wait

// Great observation! Normally, JavaScript functions do not wait for each other unless explicitly instructed. However, in your example, firstFunction is not really waiting—it is simply executing secondFunction inside a callback after a delay.


// Why Does It Seem Like firstFunction Waits?
// JavaScript is asynchronous but non-blocking.
// setTimeout schedules the execution of its callback after 3 seconds but does not block the rest of the program.
// The function firstFunction itself finishes execution immediately after scheduling the timeout.
// secondFunction is only executed when the timer completes.



//synchronous call backs

function firstFunction(second) {
    console.log("first functions in synchronous callbacks")
    second()
}

function secondFunction() {
    console.log("second functions in synchronous callbacks")
}


firstFunction(secondFunction)

// A synchronous callback would be executed immediately, without waiting for an asynchronous operation. Example:

//synchronous callbacks  ==> callback which is execute imediately

function heigherOrderFunction(callback) {
    const name = "Aman mishra"
    callback(name)
}

function greet(name) {
    console.log("hello you are welcome " + name)

}

heigherOrderFunction(greet)//hello you are welcome Aman mishra


////////////////////basics callbacks


//////////////////synchronous callbacks

function mains(callback, name) {
    console.log("hello am callback1 " + name)
    callback()

}

function callback() {
    console.log("aman call")
}

mains(callback, "Atul")
// hello am callback1 Atul
// aman call




//////////////////synchronous callbacks


function greet(name, callback) {
    console.log(`Hello basic callback, ${name}!`);
    callback();
}

function sayGoodbye() {
    console.log('Goodbye!');
}

greet('Alice', sayGoodbye);

//greet(sayGoodbye, 'Alice');//error == callback is not a function




//////////////////synchronous callbacks

function complete(call) {
    const name = "Aman"
    call(name)
}

function main(name) {
    console.log(`hello ${name} how r u`)
}

complete(main)




//////////////////asynchronous callbacks  ==> is a callback that is often used to continue or resume code axecution after an asynchronous aperation has completed

///////////////////timer callback

/*
console.log('Start');
setTimeout(() => {
    console.log('Inside callback after 2 seconds');
}, 2000);
console.log('End');

*/



//////////////Array iteration callback

const numbers = [1, 2, 3, 4, 5];

numbers.forEach((num) => {
    console.log(num * 2);
});



// The arrow function (num) => { console.log(num * 2); } is the callback function passed to forEach, defining what should happen with each element in the array.

// Why is it a callback?
// ✅ It is passed as an argument to forEach().
// ✅ It is executed later for each element in the num array.
// ✅ It is called by the forEach method internally.


//////////////////asynchronous callbacks  ==> is a callback that is often used to continue or resume code axecution after an asynchronous aperation has completed


///Event Listener handeler call back
/*
const button = document.querySelector('button');

button.addEventListener('click', () => {
    console.log('Button clicked');
});
*/





///////////////////////Callback with Conditional Execution

function doSomething(condition, callback) {
    if (condition) {
        callback();
    } else {
        console.log('Condition not met');
    }
}


function callbackFunction() {
    console.log('Condition met!');
}

doSomething(true, callbackFunction);







/////////////////////Callback for AJAX Request (Using Fetch)


/*
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => {
        console.log('Data received:', data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });


    */











function fetchDataFromServer(callback) {
    // Simulating an asynchronous operation (like fetching data from a server)
    console.log("data fetching start now")
    setTimeout(() => {
        console.log(" before data receiving")
        const data = { id: 1, name: 'Sample Data' };
        callback(data); // Executes the callback with the fetched data
        console.log("after data receiving")
    }, 5000); // Simulating a delay of 2 seconds
}

function processData(data) {
    console.log('Processing data:', data);
}

fetchDataFromServer(processData); // Passes the processData function as a callback


//data fetching start now

//then after 5 sec all data fetching

//  before data receiving
// Processing data: { id: 1, name: 'Sample Data' }
// after data receiving




////////////////////////////////////////////////////////////////////////////

//CALLBACK HELL


// Callback hell refers to a situation where multiple nested callbacks are used in asynchronous JavaScript code, leading to code that's difficult to read, maintain, and debug.

// Simplifying Callback Hell:


// Callback hell occurs when you have many dependent tasks (like asking for ingredients or waiting for someone) nested within each other, making the code hard to follow and maintain. It's like waiting for multiple things to happen before you can move forward with your plans.

// To avoid callback hell, modern JavaScript offers solutions like Promises, async/await, or organizing code into smaller functions. These alternatives provide a cleaner and more organized way to handle asynchronous tasks without getting lost in callback nesting.

getBread((bread) => {
    getCheese(bread, (cheese) => {
        getVegetables(cheese, (vegetables) => {
            assembleSandwich(vegetables, (sandwich) => {
                // Eating the sandwich
            });
        });
    });
});

//   in this scenario:

// getBread, getCheese, and getVegetables are like tasks where you need someone else's help to get the ingredients.
// assembleSandwich is the final task of putting all the ingredients together.
// The callback structure mirrors the process of waiting for each ingredient before moving to the next step.