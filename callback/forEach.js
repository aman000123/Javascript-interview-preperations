

//////////////Array iteration callback

const numbers = [1, 2, 3, 4, 5];

numbers.forEach((num) => {
    console.log(num * 2);
});


/////or


// (num) => {
//     console.log(num * 2);
// }

// -----this is call back functions

function numbers(n) {
    console.log(n * n)
}

num.forEach(numbers)



// The arrow function (num) => { console.log(num * 2); } is the callback function passed to forEach, defining what should happen with each element in the array.


// Why is it a callback?
// ✅ It is passed as an argument to forEach().
// ✅ It is executed later for each element in the num array.
// ✅ It is called by the forEach method internally.



//------------------------------------------------------->why it execute later 


// Step 1: Understanding forEach()
// forEach() is a higher-order function in JavaScript that takes a callback function as an argument and applies it to each element of an array one by one.


array.forEach(callbackFunction);

// callbackFunction is executed for each element in the array.
// The function does not run immediately when forEach() is called. Instead, it is invoked by forEach() during iteration.


// Step 2: Why Does the Callback Execute Later?
// When you call num.forEach((n) => { console.log(n * n); }), JavaScript does not execute the function (n) => { console.log(n * n) } immediately.
// Instead, JavaScript passes this function to forEach, and forEach then calls it later for each element one by one.



let num = [1, 2, 3, 4];

console.log("Before forEach");

num.forEach((n) => {
    console.log("Processing:", n);
    console.log(n * n);
});

console.log("After forEach");

// Before forEach  <-- This executes immediately
// Processing: 1
// 1
// Processing: 2
// 4
// Processing: 3
// 9
// Processing: 4
// 16
// After forEach  <-- This runs after forEach finishes

// Key Takeaways:-------------------------------------------------------

// The function (n) => { console.log(n * n) } is not executed immediately when you pass it to forEach().
// forEach() iterates over the array and calls the function one by one for each element.
// JavaScript waits until forEach() processes the next item before executing the function again.
// So, the function executes later, but it's still synchronous—it doesn't wait like setTimeout, but it runs only when forEach() processes an element.

// Would you like a deeper explanation with async examples?