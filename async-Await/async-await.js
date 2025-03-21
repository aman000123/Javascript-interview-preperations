
// What is an Async Function in JavaScript?
// We use the async function in JavaScript to write promise-based code to make it look synchronous, ensuring the execution thread is not blocked. It always returns a promise. If it returns a value that is not a promise, JavaScript wraps it in a resolved promise. 


// What is the Await Keyword in JavaScript?
// The await keyword is used inside an async function to pause the execution of the function until the promise is resolved. It makes the async function wait for the promise to resolve before continuing the execution of the function. It can only be used inside an async function.



function add() {
    return "hello normal"
}
console.log(add())//hello normal


//unlike normal function async  function always return promise

async function add1() {
    return "hello async"
}
console.log(add1())

// Promise { 'hello async' }

//Promise {<fulfilled>: 'hello async'} in browser consloe


async function add2() {
    console.log("hello add2")
    return "hello async2"

}

console.log(add2())
// hello add2
// Promise { 'hello async2' }

//Promise {<fulfilled>: 'hello async2'} in browser


async function inner() {
    return "Inner async function";
}

async function outer() {
    const result = await inner();
    console.log(result);
}

outer();//Inner async function







/////////// await key word can be put infront of any async promise based function to pause code untill that promise settled and returns its result



//await can be used only inside async function not normal function

async function greet() {
    let promise = new Promise((res, rej) => {
        setTimeout(() => { res({ name: "await - async" }) }, 5000)
    })

    console.log("pramise await", promise)//Promise {<pending>}

    let result = await promise
    console.log(result)//promise fulfilled
}

greet()//{ name: 'await - async' }

