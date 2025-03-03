//--------------------------------- 1. Promise.race()

// Returns the result of the first settled (fulfilled or rejected) promise.
// If the first resolved promise is successful, it returns the value.
// If the first settled promise is rejected, it returns the rejection reason.

const p1 = new Promise((resolve) => setTimeout(() => resolve("Promise 1"), 3000));
const p2 = new Promise((resolve) => setTimeout(() => resolve("Promise 2"), 2000));
const p3 = new Promise((resolve, reject) => setTimeout(() => reject("Promise 3 failed"), 1000));

Promise.race([p1, p2, p3])
    .then((result) => console.log("Winner:", result))
    .catch((error) => console.log("Error:", error));

// 🔹 Output: "Error: Promise 3 failed" (since p3 rejects first in 1 second).



//---------------------------------- 2. Promise.all()
// Resolves only if all promises succeed.
// If any promise fails, it immediately rejects with that error.

const p1 = new Promise((resolve) => setTimeout(() => resolve("Task 1"), 1000));
const p2 = new Promise((resolve) => setTimeout(() => resolve("Task 2"), 2000));
const p3 = new Promise((_, reject) => setTimeout(() => reject("Task 3 failed"), 1500));

Promise.all([p1, p2, p3])
    .then((results) => console.log("All results:", results))
    .catch((error) => console.log("Error:", error));

// 🔹 Output: "Error: Task 3 failed" (since p3 failed, the entire Promise.all rejects).




// ----------------------------------3. Promise.allSettled()
// Waits for all promises to settle (either resolve or reject).
// Returns an array of objects with { status, value/reason }.

const p1 = new Promise((resolve) => setTimeout(() => resolve("Success 1"), 1000));
const p2 = new Promise((_, reject) => setTimeout(() => reject("Failure 2"), 2000));

Promise.allSettled([p1, p2])
    .then((results) => console.log("Results:", results));
// 🔹 Output:

[
    { status: "fulfilled", value: "Success 1" },
    { status: "rejected", reason: "Failure 2" }
]
// ✅ Useful when you need results from all promises, even if some fail.



// -------------------------------4. Promise.any() (Bonus)
// Resolves as soon as any promise succeeds.
// If all fail, it returns an AggregateError.

const p1 = new Promise((_, reject) => setTimeout(() => reject("Fail 1"), 1000));
const p2 = new Promise((resolve) => setTimeout(() => resolve("Success 2"), 2000));
const p3 = new Promise((_, reject) => setTimeout(() => reject("Fail 3"), 3000));

Promise.any([p1, p2, p3])
    .then((result) => console.log("First Success:", result))
    .catch((error) => console.log("All failed:", error));
// 🔹 Output: "First Success: Success 2" (as p2 is the first to resolve).
// 🔸 If all fail, it throws an AggregateError listing all failures.


// Yes, Promise.any() only returns the first successfully resolved promise. If all promises are rejected, it throws an AggregateError, which contains all the rejection reasons.

// When to Use Promise.any()
// Fetching data from multiple sources (use the fastest success).
// Running multiple tasks and taking the first successful one.
// Ignoring failures if at least one request succeeds.




// Method	Description
// all(iterable)	Waits for all promises to be resolved or any one to be rejected
// allSettled(iterable)	Waits until all promises are either resolved or rejected
// any(iterable)	Returns the promise value as soon as any one of the promises is fulfilled
// race(iterable)	Wait until any of the promises is resolved or rejected



const task1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("task1 promise")
    }, 1500)
})


const task2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("task2 promise")
    }, 2000)
})


const task3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("task3 promise")
    }, 1000)
})


Promise.any([task1, task2, task3])
    .then((res) => console.log(res))
    .catch((error) => { console.log(error) })


// [AggregateError: All promises were rejected] {
//     [errors]: [ 'task1 promise', 'task2 promise', 'task3 promise' ]
//   }
