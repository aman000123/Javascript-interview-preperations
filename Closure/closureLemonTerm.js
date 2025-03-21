// Closure in JavaScript: Ek Simple Explanation
// Definition:
// Closure tab hota hai jab ek inner function apne parent function ke variables ko access kar sakta hai, even after parent function execute ho chuka hota hai. Yeh JavaScript me lexical scoping ki wajah se possible hota hai.


// outer() function execute hota hai, aur inner() function ko return karta hai.
// inner() ke andar outerVar ko access kiya gaya hai.
// Lekin outer() execute hone ke baad bhi outerVar destroy nahi hota!
// Kyunki inner() function apne parent scope ka reference yaad rakhta hai—isi behavior ko closure kehte hain.

// ===========================================
// "inner() function apne parent scope ka reference yaad rakhta hai" ka matlab kya hai?
// Jab JavaScript me ek function create hota hai, toh wo apne surrounding (lexical) scope ka reference store kar leta hai. Agar us function ko uske parent function ke andar declare kiya gaya hai, toh wo parent function ke variables ko access kar sakta hai, chahe parent function execute hone ke baad bhi.

// Iska sabse bada proof yeh hai ki jab ek function return hota hai aur uska parent function memory se hat jata hai, tab bhi inner function uske variables ko access kar sakta hai. Yahi closure hai!



// Haan, bilkul sahi soch rahe ho! Jab ek function create hota hai, toh wo apne parent scope ka reference store kar leta hai aur scope chain follow karta hai. Iska matlab yeh hai ki function apne surrounding scope ke variables ko access kar sakta hai, aur agar koi variable wahan nahi milta, toh wo ek level upar jaakar us variable ko dhundta hai—yeh process global scope tak chalta hai.

// Scope Chain Kaise Kaam Karta Hai?
// Jab JavaScript me koi function execute hota hai, toh wo apne andar pehle variables ko dhoondta hai, agar nahi milta, toh wo apne parent scope me check karta hai, aur agar wahan bhi nahi milta, toh global scope tak jata hai. Is process ko Scope Chain kehte hain.

// scope chains ke example

let globalVar = "I am Global";

function outer() {
    let outerVar = "I am from Outer";

    function inner() {
        let innerVar = "I am from Inner";

        console.log(innerVar); // ✅ "I am from Inner" (local scope)
        console.log(outerVar); // ✅ "I am from Outer" (parent scope)
        console.log(globalVar); // ✅ "I am Global" (global scope)
    }

    inner();
}

outer();



// Example 1: Basic Closure

function outer() {
    let outerVar = "Hello from outer";

    function inner() {
        console.log(outerVar); // Inner function parent ke variable ko access kar raha hai
    }

    return inner; // inner function ko return kar rahe hain
}

const myFunc = outer(); // outer() call hone ke baad inner() return ho jayega

console.log(outerVar); // ❌ Error: outerVar is not defined
myFunc(); // "Hello from outer" print hoga

// Yahan error aayega kyunki outerVar normal scope ke hisaab se destroy ho gaya hai, lekin inner() function ne closure create kiya tha, is wajah se wo variable inner() ke andar still accessible hai.



// Kaise kaam kar raha hai?
// outer() function execute hota hai, aur inner() function ko return karta hai.
// inner() ke andar outerVar ko access kiya gaya hai.
// Lekin outer() execute hone ke baad bhi outerVar destroy nahi hota!
// Kyunki inner() function apne parent scope ka reference yaad rakhta hai—isi behavior ko closure kehte hain.


// Example 2: Closure with Private Data (Data Encapsulation)
// Closures ka ek bada fayda yeh hai ki yeh data ko encapsulate karne (private rakhne) me madad karte hain.


function counter() {
    let count = 0; // Private variable

    return function () {
        count++; // count ko modify kar sakte hain
        console.log(count);
    };
}

const increment = counter(); // counter() call hoke ek function return karega
increment(); // 1
increment(); // 2
increment(); // 3

// Explanation:
// Yahan count variable sirf inner function ke andar accessible hai.
// Bahar se koi direct count ko modify nahi kar sakta, sirf increment() function use karke hi count badhaya ja sakta hai.
// Lekin kyunki inner function closure bana raha hai, is wajah se wo count ko yaad rakhta hai.
// Yeh closures ka ek real-world use case hai—data hiding aur encapsulation


// Example 3: Closure with setTimeout
// Closures asynchronous functions me bhi kaam karte hain:


function delayMessage(msg, delay) {
    setTimeout(function () {
        console.log(msg); // Closure ka use ho raha hai
    }, delay);
}

delayMessage("Hello after 2 seconds", 2000);
// Yahan setTimeout() ke andar wala function closure create karta hai aur msg variable ko yaad rakhta hai.
// 2 seconds baad jab function execute hota hai, tab bhi uske paas msg ka access hota hai.


// Closures Ka Real-Life Use Cases
// Data Hiding (Encapsulation): Private variables banane ke liye.
// Memoization: Function ke previous results ko cache karne ke liye.
// Event Handlers: DOM events me closures ka use hota hai.
// setTimeout & setInterval: Delayed execution me helpful hote hain.


// Closure Simple Words Me:
// Closure ek aisa function hai jo apne parent scope ke variables ko yaad rakhta hai, even after parent function execute ho chuka hota hai. Yeh JavaScript ka powerful feature hai jo lexical scoping ke wajah se possible hota hai.

// Closure Simple Words Me:
// Jab ek function apne parent function ke variables ko yaad rakhta hai, even after parent function execute ho chuka hota hai, toh us behavior ko closure kehte hain.
// Inner function ka execution hone ke liye, uska parent function memory me rehna zaroori nahi hota.
// JavaScript closures ko manage karne ke liye scope chain ka use karta hai.

