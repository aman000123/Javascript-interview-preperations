
console.log(null + 2)//2
console.log(undefined + 2)//NaN

// When null used in arithmetic operations, its value evaluates to 0.
// But when undefined used in arithmetic operation, its value evaluates to NaN (not a number)



//kuch bhi define nahi karne pr var bn jata hai apne aap
function getAge() {
    age = 21;
    console.log(age);
}

getAge()



age = 12;
console.log(age)//12 automatic var se declare ho gaya


//'use-strict'  se variable ko bnane se pahle declare karna padega
//ekdam strict
//no hosting use
/*
function getAge1(){
    'use strict'
    age1=21;
    console.log(age1);
}

getAge1()//age1 is not define
*/


//eval function string ke andar sari value ko exprssion me change karke mathmatics operations

const sum = eval('10*10+5')//105
console.log(sum)


// sessionStorage == jb tk tab open rhta hain tbhi tk store rhta hai
// localStorage == jb tk manually clear nhi karte tb tk  rhta hain 

const obj =
    { 1: "a", 2: "b", 3: "c" }

//var ko number jaisa define nhi kar sakte hain
//obj ki key ko to define kar hi sakte hain
//us key ko as a number ya as a string check karo dono me kam karegi
console.log(obj.hasOwnProperty("1"))//true
console.log(obj.hasOwnProperty(1))//true

console.log(obj['1'])//a
console.log(obj[1])//a

const objj = { a: "one", b: "two", a: "three" }//{a: 'three', b: 'two'}
// a ko over rigt but position first hi 
console.log(objj)


for (let i = 1; i < 5; i++) {
    if (i === 3) continue;//jb three ho jaye to direct continue karega  console.log(i) lko execute nhi karega
    console.log(i)//iske aage ka code execute karega
}//1,2,4



/*

const foo = () => console.log("first")
const bar = () => setTimeout(() => console.log("second"))
const baz = () => console.log("third")

//function ko kis trh call karte us pr depend karta
//bar me setTime hai sabse last me execute  foo-baz-bar
bar()
foo()
baz()
//first
//third
//sec
*/



const person = { name: "aman" }
function sayHi(age) {
    return `${this.name} is ${age}`
}
console.log(sayHi.call(person, 21))
console.log(sayHi.bind(person, 21)())//bind ko manually call karna hoga
//or
// const bin = sayHi.bind(person,21)
// console.log(bin())



function sayHii() {
    return (() => 0)()    //arrow function emmidiatly call ho chuka hai
    // return me arrow function hai 0 return kar raha 
    // sayHii bhi 0 return
}
console.log(typeof sayHii())//number


function sayHiii() {
    return (() => 0)

}
console.log(typeof sayHiii())//fuction
console.log(typeof sayHiii()())//function ke andar function call ho gaya to number
//number


console.log(typeof 1)//number
console.log(typeof typeof 1)//string ,number ka type string

const num = [1, 2, 3]
num[6] = 11;
//value nhi to empty
console.log(num)//[1, 2, 3, empty × 3, 11]

const numm = [1, 2, 3]
numm[9] = numm;
//9 th positin me usi array ko daal diya
console.log(numm)
//enfinte condition tk nested array bnega
//har 9 th position me array dalta rahega



///////////////////////////////////////////////////////////////////
//everythings in javascript is a object
//kewal object nhi
//primtive or object both hoga






//kisi bhi string ko false me convert
console.log(!null);//true
console.log(!!null);//false
console.log(!!"");//false
// "" is an empty string, which is considered a falsy value in JavaScript. Falsy values are those that are treated as false in a boolean context.
console.log(!1);//false
console.log(!!1);//true



// console.log(setInterval(()=>console.log('hi'),1000))
// console.log(setInterval(()=>console.log('hi'),1000))
// console.log(setInterval(()=>console.log('hi'),1000))
//ye alag id generate karti 


// const s = setInterval(() => console.log('hi'), 1000)
// console.log(s)
// clearInterval(s)

//jb bhi setInterval ko call karenge to wo unique id dega
//jb bhi bnd karna hoga to usi id ko call karna



console.log([..."aman"])//[ 'a', 'm', 'a', 'n' ]


const fPromise = new Promise((res, rej) => {
    setTimeout(res, 500, 'one')
})

const sPromise = new Promise((res, rej) => {
    setTimeout(res, 100, 'second')
})


//Promise.race([fPromise,sPromise]).then(res=>console.log(res))

//race means jitne bhi promise ho jo pahle resolve ho gaya usi ka output dikhega



const bird = {
    size: 'small',
};

const mouse = {
    name: 'Mickey',
    small: true,
}
console.log(mouse[bird.size])//===>true
//pahle    accesss karega   bird.size==small
//then           mouse.small==true

console.log(mouse[bird["size"]])//true





let pson = { name: "aman" };
//jb bhi object se ek array generate karte 
const men = [pson]
//pson alg ha men alg constant ha
//dono ki memory location alag alag hai
//obj ko khali liya array waise hi raha
pson = null
console.log(men) //[ { name: 'aman' } ]




const person1 = {
    name: "aman",
    age: 22
}

for (const item in person1) {
    console.log(item)
    //name, age 
    ///key name deta hai
}



let data = 3 + 4 + '5'//75 string bcz 5 to string hi hai
console.log(typeof data)//string

console.log(typeof 3 + 4 + '5')//number45



//opreations left to right chalta hai
//pahle 3 ka type number nikla 4and 5 ko add kar diya==45 jo ki string bni thi


console.log(typeof (3 + 4 + + '5'))//3+4=7=>7+5=12 number

console.log(typeof ("aman"))//string

//kisi bhi string ke samne + lga kar number me change 
console.log(typeof (+"aman"))//number



console.log([] == [])//flase

let d = [1, 2, 3].map(num => {
    if (typeof num === 'number') return /////return me kuch return hi nhi kar raha 
    // When you don't specify a return value, the function returns undefined.

    return num * 2

})
//tino number the

///return me kuch return hi nhi kar raha 
console.log(d)//(3) [undefined, undefined, undefined]




let dx = [1, 2, 3].map(num => {
    if (typeof num === 'number') return num  //return num from here

    return num * 2

})

console.log(dx)//(3)[1,2,3]



function getInformation(member) {
    member.name = "aman"
}

const persons = { name: "am" }//yahna person obj hai

getInformation(persons)//jb bhi obj ko as a parameter ko pass karte hain to wo call by refrense kam karegi
//
console.log(persons)//aman




function Car() {
    this.make = "tata"
    return { make: "kia" }
}
//property bna dete hai to wahi return karte hai
//jb kuch return na kare to

//jb return karenge to purane property ko overwrite karti 
const myCar = new Car()
console.log(myCar.make)//kia




    (() => {
        let x = y = 10
        //looks like

        //let x=10;
        //y=10

    })();
//y variable bn gaya hai jo let,const,var ke sath nhi
//bydefault var 
//let blocklevel scope
console.log(typeof y)///number





    (() => {
        let x = (y = 10)

    })()
//let blocklevel scope
console.log(typeof x)///undefine



console.log(!true - true)//-1

console.log(true + + '10')//11
//+ add se string 10 ko numeric me change 10+1=11






function addition(a, b, c, d) {
    return a + b + c + d;
}

console.log(addition.length)//4







function Personq(name, age) {
    this.name = name;
    this.age = age;
    this.sayName = function () {
        console.log("My name is" + this.name)
        console.log(this)//personq { name: 'alice', age: 12, sayName: [Function (anonymous)] }
    }


    return 42
}

const p1 = new Personq("alice", 12)
const p2 = new Personq("aliceq", 121)
console.log(p1.age)//12
console.log(p1.sayName())//My name isalice
console.log(p2.hasOwnProperty("sayName"))//true




function addd(a, b, c, a) {
    console.log(a, b, c, a)
}

addd(1, 2, 3, 6)//6,2,3,6



const add = (a, b, c, a) => {
    console.log(a, b, c, a)
}

// Unlike regular functions, the arrow functions doesn't not allow duplicate parameters in either strict or non-strict mode. So you can see SyntaxError in the console.

add(1, 2, 3, 1)//SyntaxError: Duplicate parameter name not allowed in this context




//if use curley braces then need return 

// 1. With curly braces {}:
// If you use curly braces, you need to explicitly use the return keyword to return a value from the function.

const addz = (a, b) => {
    return a + b;  // You must use 'return'
  };
  console.log(addz(2, 3));  // Outputs: 5
  


//if use parenthesis then no need to return

// With parentheses () (implicit return):

// If you omit curly braces, the arrow function implicitly returns the value of the expression following the arrow =>. In this case, no return keyword is needed.

const addv = (a, b) => (a + b);  // No need for 'return'
console.log(addv(2, 3));  // Outputs: 5

// Both are valid, but when you use curly braces, an explicit return is required. Without curly braces, the function will implicitly return the result.


const add00 = (a, b) => {
    a + b
}

console.log(add00(1, 2))//undefined


const add0001 = (a, b) => (
    a + b
)

console.log(add0001(1, 2))//3


// In JavaScript, the return statement is needed to explicitly specify the value that a function should output or "return" to the caller. If a function does not include a return statement, it will return undefined by default.

// Here’s why:

// 1. Functions return something:
// Every function in JavaScript returns something. If you don’t specify what it should return, it will return undefined by default.


// 2. Explicit vs Implicit return:
// When you use curly braces {} in a function body, JavaScript expects you to explicitly return a value using the return keyword.

// If you don’t use curly braces (or if you use parentheses () for single expressions in arrow functions), JavaScript automatically returns the result of that expression (this is called an implicit return).


// In summary, you need return when you use curly braces in a function because JavaScript does not automatically return the result unless you tell it to.

//#####################################################################################################################################################################################################################
// Is Javascript single-threaded?

// Yes, JavaScript is a single-threaded language. This means that it has only one call stack and one memory heap. Only one set of instructions is executed at a time.

// Also, Javascript is Synchronous and blocking in nature. meaning that code is executed line by line and one task must be completed before the next one begins

// However, JavaScript also has asynchronous capabilities, which allow certain operations to be executed independently of the main execution thread. This is commonly achieved through mechanisms like callbacks, promises, async/await, and event listeners. These asynchronous features enable JavaScript to handle tasks such as fetching data, handling user input, and performing I/O operations without blocking the main thread, making it suitable for building responsive and interactive web applications.



// Interviewer: You have 2 minutes. Explain the JavaScript Event Loop to me.

// My answer: Challenge accepted, let’s go!


// ➤ Single-Threaded Execution:
// JavaScript is single-threaded, which means it can only execute one task at a time. This is managed by the call stack, where functions are executed one by one.


// ➤ Call Stack: Think of the call stack as a stack of plates. Every time a function is called, a new plate (function) is added to the stack. When the function finishes, the plate is removed from the stack.


// ➤ Web APIs: For asynchronous operations like `setTimeout`, DOM events, and HTTP requests, JavaScript relies on Web APIs provided by the browser. These operations are handled outside of the call stack.


// ➤ Callback Queue: When an asynchronous operation completes, its callback is placed in the callback queue. This queue waits until the call stack is clear before pushing the next callback onto the stack.

// ➤ Event Loop: The event loop is like a manager that constantly checks if the call stack is empty. When it is, the event loop takes the first callback from the callback queue and adds it to the call stack.

// ➤ Microtasks Queue: There's also a microtasks queue for tasks like promises. This queue has higher priority than the callback queue. The event loop checks the microtasks queue first, ensuring these tasks are processed before other callbacks.

// ➤ Priority Handling: To sum it up, the event loop first checks the microtasks queue. If it's empty, it moves to the callback queue. This ensures that critical tasks, like promises, are handled promptly.

// That’s the JavaScript Event Loop.





//###############################################################################





// Get the solution here along with many JS interview questions:


// Interviewer: You have 2 minutes. Explain the JavaScript Event Loop to me.

// My answer: Challenge accepted, let’s go!

// ➤ Single-Threaded Execution:
// JavaScript is single-threaded, which means it can only execute one task at a time. This is managed by the call stack, where functions are executed one by one.

// ➤ Call Stack: Think of the call stack as a stack of plates. Every time a function is called, a new plate (function) is added to the stack. When the function finishes, the plate is removed from the stack.

// ➤ Web APIs: For asynchronous operations like `setTimeout`, DOM events, and HTTP requests, JavaScript relies on Web APIs provided by the browser. These operations are handled outside of the call stack.

// ➤ Callback Queue: When an asynchronous operation completes, its callback is placed in the callback queue. This queue waits until the call stack is clear before pushing the next callback onto the stack.

// ➤ Event Loop: The event loop is like a manager that constantly checks if the call stack is empty. When it is, the event loop takes the first callback from the callback queue and adds it to the call stack.

// ➤ Microtasks Queue: There's also a microtasks queue for tasks like promises. This queue has higher priority than the callback queue. The event loop checks the microtasks queue first, ensuring these tasks are processed before other callbacks.

// ➤ Priority Handling: To sum it up, the event loop first checks the microtasks queue. If it's empty, it moves to the callback queue. This ensures that critical tasks, like promises, are handled promptly.

// That’s the JavaScript Event Loop.

// Time’s up!






//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$



// 1️⃣ True or False:
// "JavaScript is a single-threaded synchronous language."
// 2️⃣ Is Node.js single-threaded or multi-threaded?
// 3️⃣ JavaScript​: Interpreted or Compiled language?

// Take a moment to think about your answers before scrolling down to see how you did!


// Answer Time! 🎯

// 1️⃣ True! JavaScript is a single-threaded, synchronous language.

// 2️⃣ It's complicated! Node.js is generally single-threaded for synchronous tasks, but it can become multi-threaded when handling asynchronous operations, thanks to the libuv library and its default thread pool.

// 3️⃣ Both! JavaScript is both an interpreted and compiled language, utilizing Just-In-Time (JIT) compilation.

// I would have never grasped these concepts so thoroughly if it wasn't for Namaste Node.js! Throughout the course, I delved deep into the internal architecture of Node.js, explored how the libuv library works, and got hands-on experience with the event loop. I even learned about the intricacies of the V8 engine and much more.



//###########################################################

// Imagine JavaScript is like an amusement park, and the Event Loop is the ride that makes sure everyone has a good time, no matter how many people are waiting in line!

// Here’s how it works:

// 🌀𝗖𝗮𝗹𝗹 𝗦𝘁𝗮𝗰𝗸: Think of this as the main attraction—like the roller coaster! When you get on the ride (a function is called), you’re on the stack, zooming through loops and drops. But here’s the catch: only one person (or function) can be on the ride at a time. Everyone else has to wait in line.

// 🎟️ 𝗘𝘃𝗲𝗻𝘁 𝗤𝘂𝗲𝘂𝗲: Now, while the roller coaster is in full swing, there’s another line of people waiting to get on smaller rides (asynchronous tasks like API calls, setTimeout, etc.). These folks are in the Event Queue, and they’re just chilling, waiting for their turn.

// 🎡 𝗘𝘃𝗲𝗻𝘁 𝗟𝗼𝗼𝗽: Enter the Event Loop—a dedicated park employee who ensures everything runs smoothly. Once the main roller coaster (the Call Stack) is free, the Event Loop lets the next person in line (from the Event Queue) hop on the ride. This way, everyone gets a chance to enjoy the park without things getting too chaotic!

// Understanding the Event Loop helps you avoid common pitfalls, like thinking setTimeout(fn, 0) will run immediately—it doesn’t



// 𝗔 𝗰𝗼𝗺𝗽𝗹𝗲𝘁𝗲 𝗴𝘂𝗶𝗱𝗲 𝘁𝗼 𝗖𝗢𝗥𝗦!
// 𝗪𝗵𝗮𝘁 𝗶𝘀 𝗖𝗢𝗥𝗦?
// CORS stands for Cross-Origin Resource Sharing. It allows one site to make a request to another, despite the browser’s same-origin policy, which usually prevents such actions. CORS gives the server control over which clients can make requests and what types of requests are allowed.

// 𝐇𝐨𝐰 𝐝𝐨𝐞𝐬 𝐂𝐎𝐑𝐒 𝐰𝐨𝐫𝐤?
// 1. The client initiates a request.
// 2. The browser adds CORS-specific headers.
// 3. The server responds with headers to permit or block the request.
// 4. If permitted, the browser delivers the response; if not, the request is rejected.

// 𝗪𝗵𝗮𝘁 𝗶𝘀 𝘁𝗵𝗲 𝗼𝗿𝗶𝗴𝗶𝗻?
// A request is a same-origin request when the client origin and the server origin are exactly the same. Otherwise, the request is a cross-origin request.
 
// 𝗛𝗼𝘄 𝗖𝗢𝗥𝗦 𝘄𝗼𝗿𝗸𝘀 𝗼𝗻 𝘁𝗵𝗲 𝗰𝗹𝗶𝗲𝗻𝘁 𝘀𝗶𝗱𝗲?
// 1. The client creates a request and specifies the URL, method, body, and headers.
// 2. The browser validates headers, and a request object is created; if custom headers are included, a preflight request may be triggered.
// 3. Credentials like cookies or authorization tokens are sent if included.
// 4. The browser checks the server’s response and decides whether to pass it to the client. 

// 𝗛𝗼𝘄 𝗖𝗢𝗥𝗦 𝘄𝗼𝗿𝗸𝘀 𝗼𝗻 𝘁𝗵𝗲 𝘀𝗲𝗿𝘃𝗲𝗿 𝘀𝗶𝗱𝗲?
// 𝟭. 𝗕𝗿𝗼𝘄𝘀𝗲𝗿 𝗥𝗼𝗹𝗲 𝗶𝗻 𝗖𝗢𝗥𝗦:
// • The browser adds information (e.g., the Origin header) to the request.
// • It also interprets the server's response to decide whether to proceed with the request or return an error.
// 𝟮. 𝗦𝗲𝗿𝘃𝗲𝗿-𝗦𝗶𝗱𝗲 𝗛𝗲𝗮𝗱𝗲𝗿𝘀:
// • The server uses the access-control-allow-original header to determine if the request is allowed.
// • The value can be a wildcard (*) or a specific origin (http://localhost:8080).
// 𝟯. 𝗔𝗰𝗰𝗲𝗽𝘁𝗶𝗻𝗴 𝗼𝗿 𝗥𝗲𝗷𝗲𝗰𝘁𝗶𝗻𝗴 𝗥𝗲𝗾𝘂𝗲𝘀𝘁𝘀:
// • If the Origin header matches an entry in Access-Control-Allow-Origin, the server accepts the request.
// • If the origin does not match, the server can send a non-matching access-control-allow-original header.

// 𝗙𝗼𝗿 𝘀𝗲𝗰𝘂𝗿𝗲 𝗖𝗢𝗥𝗦, 𝗿𝗲𝘀𝘁𝗿𝗶𝗰𝘁 𝗼𝗿𝗶𝗴𝗶𝗻𝘀, 𝗲𝗻𝗮𝗯𝗹𝗲 𝗰𝗿𝗲𝗱𝗲𝗻𝘁𝗶𝗮𝗹𝘀 𝗼𝗻𝗹𝘆 𝘄𝗵𝗲𝗻 𝗻𝗲𝗲𝗱𝗲𝗱 𝘄𝗶𝘁𝗵 𝗖𝗦𝗥𝗙 𝗽𝗿𝗼𝘁𝗲𝗰𝘁𝗶𝗼𝗻, 𝘀𝗽𝗲𝗰𝗶𝗳𝘆 𝗮𝗹𝗹𝗼𝘄𝗲𝗱 𝗺𝗲𝘁𝗵𝗼𝗱𝘀/𝗵𝗲𝗮𝗱𝗲𝗿𝘀, 𝗮𝗻𝗱 𝗰𝗮𝗰𝗵𝗲 𝗽𝗿𝗲𝗳𝗹𝗶𝗴𝗵𝘁 𝗿𝗲𝗾𝘂𝗲𝘀𝘁𝘀.

// • 𝗔𝗰𝗰𝗲𝘀𝘀-𝗖𝗼𝗻𝘁𝗿𝗼𝗹-𝗔𝗹𝗹𝗼𝘄-𝗢𝗿𝗶𝗴𝗶𝗻: Use * for all origins or a whitelist for specific origins.
// • 𝗔𝗰𝗰𝗲𝘀𝘀-𝗖𝗼𝗻𝘁𝗿𝗼𝗹-𝗔𝗹𝗹𝗼𝘄-𝗖𝗿𝗲𝗱𝗲𝗻𝘁𝗶𝗮𝗹𝘀: Set to true to allow cookies, ensure origin validation, and implement CSRF protection.
// • 𝗔𝗰𝗰𝗲𝘀𝘀-𝗖𝗼𝗻𝘁𝗿𝗼𝗹-𝗔𝗹𝗹𝗼𝘄-𝗠𝗲𝘁𝗵𝗼𝗱𝘀: Present in preflight responses; indicates allowed HTTP methods (e.g., GET, POST, PUT, DELETE).
// • 𝗔𝗰𝗰𝗲𝘀𝘀-𝗖𝗼𝗻𝘁𝗿𝗼𝗹-𝗔𝗹𝗹𝗼𝘄-𝗛𝗲𝗮𝗱𝗲𝗿𝘀: Present in preflight responses.

// I hope that gave you a clear understanding of CORS to handle it effectively in the future.