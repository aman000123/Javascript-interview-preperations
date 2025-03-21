
//====================================================

// 1️⃣ JavaScript Function Execution Ke Saath Scope Establish Hota Hai
// "When JavaScript executes a function, it establishes a scope for that function, encompassing all the variables declared within it."

// 👉 Jab bhi JavaScript ek function execute karta hai, toh us function ke liye ek naya scope create hota hai. Is scope me sirf wahi variables aur functions hote hain jo us function ke andar declare kiye gaye hote hain.

// Example: Function Execution Scope

function myFunction() {
    let a = 10; // 'a' sirf yahan available hai
    console.log(a); // ✅ 10
}

myFunction();
console.log(a); // ❌ ReferenceError: a is not defined

// Explanation:

// Jab myFunction() execute hota hai, toh ek naya scope create hota hai.
// a variable sirf myFunction ke andar accessible hai, kyunki wo uska local scope hai.
// Function ke execute hone ke baad iska scope destroy ho jata hai (normally).


// 2️⃣ Closure Kaise Banta Hai?

// "A closure is formed when an inner function maintains access to this scope after the outer function has returned."

// 👉 Normally, jab ek function execute hota hai aur return hota hai, toh uska scope destroy ho jata hai.
// 👉 Lekin agar ek inner function, outer function ke variables ko access karta hai, aur woh inner function return ho jata hai, tab bhi uske paas outer function ka scope access karne ki power hoti hai—yehi closure hai!

// Example: Closure in Action

function outer() {
    let outerVar = "I am from outer function"; // Outer function ka variable

    function inner() {
        console.log(outerVar); // Inner function isko access kar sakta hai
    }

    return inner; // Inner function return ho raha hai
}

const myClosure = outer(); // outer() call hone ke baad inner() return ho jayega
myClosure(); // ✅ "I am from outer function"

// Step - by - Step Execution:
// Jab outer() function execute hota hai:

// Ek naya scope create hota hai.
// outerVar variable us scope me exist karta hai.
//     inner() function define hota hai aur lexical scope ke wajah se outerVar ko "yaad" rakhta hai.
// Jab outer() return hota hai:

// Normally, outerVar destroy ho jana chahiye, kyunki outer() function execute ho chuka hai.

// Lekin inner() function, jo return ho chuka hai, uske paas outerVar ka reference ab bhi hai!

// Jab hum myClosure(); call karte hain, toh inner() function outerVar ko access kar pata hai.

// 👉 Isi behavior ko closure kehte hain! Inner function parent function ke scope ko yaad rakhta hai, even after parent function return ho chuka hota hai.

// 3️⃣ Proof That Parent Scope Exists Even After Function Execution
// Agar normal case hota, toh outerVar destroy ho jana chahiye tha, par closure ki wajah se wo memory me store raha.

// Example to Show That Scope is Preserved

function counter() {
    let count = 0; // Private variable

    return function () {
        count++;
        console.log(count);
    };
}

const increment1 = counter(); // outer function call hone ke baad inner function return ho gaya
increment1(); // ✅ 1
increment1(); // ✅ 2
increment1(); // ✅ 3

// 👉 Agar counter() function return ho chuka hai, toh count variable destroy kyu nahi hua ?
// 👉 Kyuki increment() function ke paas closure hai, jo count variable ko yaad rakhta hai!

// 🔥 Conclusion(Simplified)
// Jab JavaScript kisi function ko execute karta hai, toh us function ke liye ek naya scope create hota hai.
// Jab function return hota hai, toh normally uska scope destroy ho jata hai.
// Lekin agar ek inner function return ho raha hai, aur uske paas parent function ke variables ka access hai, toh wo closure banata hai.
// Closures ka use hum private variables, event handlers, and asynchronous programming me karte hain.

for (let i = 1; i <= 3; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}

// Execution Process:
// let block scope hota hai, matlab har loop iteration ke liye naya i create hota hai.
// setTimeout() ek asynchronous function hai, jo 1 second baad execute hoga.
// Jab loop complete ho jayega, tab tak har iteration ke liye i ki alag copy memory me store ho chuki hogi.
// Jab setTimeout() execute hoga, tab har copy apne respective value ko yaad rakhegi.
// Output (1 second baad):
// Copy
// Edit
// 1
// 2
// 3
// ✔️ Yeh correct output hai kyunki har iteration ke liye i ka alag scope hai.



for (var i = 1; i <= 3; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}

// Step-by-Step Execution:
// 1. Loop Execution (Synchronous Part)
// var i = 1 se loop start hota hai.
// setTimeout function queue me add hota hai, jo 1 second (1000ms) baad execute hoga.
// i ki value increment hoti rahti hai, aur loop i = 4 hone par stop hota hai.

// Loop Iterations in Detail:

// Iteration	i Value	setTimeout Callback
// 1st	1	Console log i (after 1s)
// 2nd	2	Console log i (after 1s)
// 3rd	3	Console log i (after 1s)
// End	4	Loop stops



// 2. Asynchronous Execution (After 1 Second)
// Jab 1 second pura hota hai, tab JavaScript ka event loop setTimeout ke callback functions execute karta hai.

// Magar setTimeout ka callback tabhi execute hota hai jab loop pehle hi complete ho chuka hota hai.
// Loop complete hone ke baad i = 4 ho chuka hota hai.
// Toh jab setTimeout execute hoga, tab console.log(i); hamesha 4 print karega.

// Why 4 is Printed 3 Times?
// JavaScript me var function-scoped hota hai, yani ek hi i variable bar bar update ho raha hai.
// Har iteration me setTimeout ka callback closure me i ko reference karta hai, value nahi store karta.
// Jab setTimeout execute hota hai, tab tak i = 4 ho chuka hota hai.
// Is wajah se output hota hai:

// 4
// 4
// 4


// Loop sirf ek baar execute hota hai, dobara start nahi hota.
// Loop ke andar jo setTimeout functions hain, wo queue me chale jate hain aur loop complete hone ke baad execute hote hain.
// Loop ke end tak i = 4 ho chuka hota hai, isliye sabhi setTimeout callbacks 4 print karte hain.
// Loop i = 1 se dobara start nahi hota, kyunki loop ka execution pehle hi complete ho chuka hota hai.



// pahle iterarion me i 1,2,3 hua to chala 4, hua to loop kahatam to 4 print hua but inske bat jb isecond bar loop chalega to i ki value 1 se start n hokar 4 se hogi ka yhi sahi h?

// ChatGPT said:
// Nahi! Loop dubara nahi chalta. Tumhara yeh sochna ki loop second time phir se chalega galat hai. Chaliye isko aur clear karte hain.

// 🔍 Loop Ka Execution Samjhein Step-by-Step

for (var i = 1; i <= 3; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}

// 1️⃣ For Loop Execution (Synchronous)
// Sabse pehle, JavaScript synchronous code execute karta hai:

// Iteration	i ki Value	setTimeout Function
// 1st	1	console.log(i); queue me add hota hai
// 2nd	2	console.log(i); queue me add hota hai
// 3rd	3	console.log(i); queue me add hota hai
// Loop Ends	4	Loop execution stops
// ⚡ Important:

// Yeh loop ek hi baar chalta hai, aur jab i = 4 hota hai, tab loop ruk jata hai.
// Par loop ke andar jo setTimeout functions hain, woh asynchronous hain, aur woh turant execute nahi hote, balki event queue me chale jate hain.


// 2️⃣ Loop Complete Hone Ke Baad (Asynchronous Execution)

// 1 second ke baad, setTimeout wale functions execute hone lagte hain.
// Tab tak i = 4 ho chuka hota hai, kyunki var global scope me tha.
// Jab setTimeout execute hoga, to sabhi functions ek hi i ko refer kar rahe honge, jo ab 4 hai.

// ✅ Final Output:

// Copy
// Edit
// 4
// 4
// 4
// 🚀 Tumhara Question: "Loop Second Time Phir Se Kyun Nahi Chalta?"
// Loop sirf ek baar hi chalta hai, aur jab i = 4 hota hai, tab loop khatam ho jata hai.

// Loop is wajah se dobara i = 1 se start nahi hota, kyunki:

// For loop ka condition (i <= 3) fail ho jata hai jab i = 4 hota hai.
// JavaScript me setTimeout sirf ek delayed callback hai, uska loop se koi lena dena nahi.
// setTimeout loop ke execute hone ke baad kaam karta hai, loop ko restart nahi karta!


// =============================================🔥 let vs var Difference
// Feature                	var	                                     let
// Scope	Function-scoped (same i reuse hota hai)   	Block-scoped (har iteration me naya i)
// Memory	Ek hi i baar baar update hota hai	        Har iteration me alag i store hota hai
// Behavior in setTimeout	Sabhi functions ek hi i ko refer karte hain (loop ke end tak i=4 ho jata hai)	Har function alag i ko store karta hai (toh correct values print hoti hain)