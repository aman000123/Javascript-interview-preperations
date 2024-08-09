
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

// hashtag#JavaScript Coding question for interviews.
// From recent interview experience, I listed down all coding question which was asked to me and some more questions which might be helpful.

// 1. Write a function to reverse each word in a string.
// 2. Write a function to find the number of characters in a string.
// 3. Write a function to find the maximum value from an object.
// 4. Create your own string method: `repeatify(3)` - the input string will be repeated three times.
// 5. Write a JavaScript program to return the count of each character in a string.
// 6. Write a JavaScript program to remove all occurrences of a specified character from a given string.
// 7. Write a JavaScript program that takes two strings as input and returns true if they are anagrams of each other, otherwise returns false.
// 8. Write a JavaScript program that converts a string to camelCase.
// 9. Write a function to find the sum of all fruits in an array.
// 10. Write a function to find two numbers which equal a given target sum.
// 11. Write a function to find the shortest word in a list of strings.
// 12. Write a function to separate palindrome numbers from an array.
// 13. Write a function to return the count of characters in a string.
// 14. Write a function to return the missing number from an array.
// 15. Write a JavaScript program to group items of an array by category.
// 16. Write a JavaScript program that takes an array of objects and returns an object containing the frequency of each property across all objects.
// 17. How do you compare two objects in JavaScript, ensuring the identical order of keys?
// 18. Collect books from an array of objects and return a collection of books as an array.
// 19. Write a function that returns unique characters from a string.
// 20. Write a function that takes an array of integers and returns the maximum product that can be obtained by multiplying any three numbers from that array.
// 21. Write a function to move all zeros to the end of the array while maintaining the relative order of the non-zero elements.
// 22. Write a function to check if a string is a palindrome, considering only alphanumeric characters and ignoring cases.
// 23. Given a sorted array and a target value, write a function to return the index of the target value in the array using binary search. If the target is not found, return -1.
// 24. Write a function to return the first non-repeating character in a string. If not available, return -1.
// 25. Write a function to find the occurrence of each character in a given string.
// 26. Write a function to flatten a nested array.
// 27. Write a JavaScript program to remove duplicate elements from an array in different ways.
// 28. Write a program to implement currying which gives the sum of three numbers.
// 29. Write a program to generate a 6-digit random OTP.
// 30. Write a program to find the intersection of two arrays.

// Get the solution here along with many JS interview questions: