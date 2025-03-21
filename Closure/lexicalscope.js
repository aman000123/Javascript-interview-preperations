// Key Takeaways
// Lexical scope is determined at compile time, not runtime.
// Inner functions can access outer variables, but not vice versa.
// Scope chain enables nested functions to use variables from their parent scopes.
// Closures retain access to their lexical scope, even after the outer function has executed


// Lexical Scope in JavaScript

// Lexical scope refers to the way variable scope is determined by the structure of the code at the time it is written (i.e., its lexical structure). It defines how variables are resolved in nested functions and which variables are accessible within a particular part of the code.

// How Lexical Scope Works
// Scope Chain: ====>When a function is declared inside another function, the inner function has access to the outer function’s variables. This forms a chain of scopes.

// Hierarchy of Scopes: =====>JavaScript searches for a variable in its immediate scope first. If it's not found, it looks in the outer scope, continuing up until it reaches the global scope.

// Closure: ===>Functions retain access to their lexical scope even when they are executed outside their original context.







// ✅ Outer function ki value inner function ke andar access ho sakti hai.
// ✅ Inner function ki value directly outer function ya global scope me access nahi ho sakti.
// ✅ Lexical scope tab define hota hai jab ek function apne parent scope se variables access karta hai.
// ✅ Scope chain ke wajah se inner function bahar ke variables ko dekh sakta hai, par bahar ka code inner variables nahi dekh sakta.

// Ek Simple Example jo aapke 1 & 2 rules ko show kare:


function outerFunction() {
    let outerVar = "I am outside"; // Outer variable

    function innerFunction() {
        let innerVar = "I am inside"; // Inner variable
        console.log(outerVar); // ✅ Outer variable accessible (Rule 1)
        console.log(innerVar);  // ✅ Inner variable accessible (Self scope)
    }

    innerFunction();
    console.log(innerVar); // ❌ Error: innerVar is not defined (Rule 2)
}

outerFunction();

// Agar 1 aur 2 dono mil jaye to lexical scope banta hai?
// Haan, lexical scope ka main concept yahi hai ki:

// Inner function outer function ka scope "lexically" inherit karta hai. (Scope chain)
// Outer function inner function ke variables ko access nahi kar sakta. (Encapsulation)
// Lexical scope compile time par decide hota hai, execution ke time par nahi.


//====================> Lexical Scope in JavaScript:
// Lexical scope tab define hota hai jab ek function apne parent scope (jis environment me wo function define hua hai) ke variables ko access kar sakta hai. JavaScript me scope statically (lexically) determined hota hai, iska matlab hai ki ek function apne surrounding scope ke variables ko unke likhne ke waqt (not execution time) access kar sakta hai.


// Haan, "likhne ke waqt" ka matlab hai compile time ya jab JavaScript code interpret ho raha hota hai.

// JavaScript ek interpreted language hai, lekin execution se pehle ek hoisting aur scope resolution phase hota hai jisme lexical scope define ho jata hai. Iska matlab hai ki functions aur variables ka scope unke likhne ki jagah (definition ke location) par decide hota hai, na ki execution ke time par.

// Example to Prove Lexical Scope Works at Compile Time

function outer() {
    let outerVar = "Hello from outer";

    function inner() {
        console.log(outerVar); // Lexical scope ke wajah se ye accessible hai
    }

    return inner; // inner function ko return kar rahe hain
}

const myFunc = outer(); // outer() call hone ke baad return inner() milega
myFunc(); // Phir bhi "Hello from outer" print hoga

// Explanation:
// outer() call hone ke baad inner() function return ho jata hai.
// myFunc ke andar inner() store hota hai, jo baad me execute ho raha hai.
// Lekin phir bhi outerVar accessible hai!
// Yeh closure ki wajah se ho raha hai, jo lexical scope ka ek effect hai.
// Agar lexical scope runtime par decide hota, toh jaise hi outer() execute hota aur khatam hota, outerVar destroy ho jata, aur inner() ko access nahi milta. Lekin kyunki scope compile-time par set hota hai, inner function apne parent scope ke variables ko yaad rakhta hai.