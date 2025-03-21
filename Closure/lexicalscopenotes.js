// What is Lexical Scope in JavaScript?
// Lexical scope is the definition area of an expression.

// In other words, an item's lexical scope is the place in which the item got created.

// Note:

// Another name for lexical scope is static scope.
// Lexical scope is the scope of a variable or function at compile time.
// It is the scope of a variable or function at the time it is defined.
// The place an item got invoked (or called) is not necessarily the item's lexical scope. Instead, an item's definition space is its lexical scope.



// Example of Lexical Scope
// Consider the code below:


// Define a variable in the global scope:
const myName = "Oluwatobi";

// Call myName variable from a function:
function getName() {
    return myName;
}


// In the snippet above, notice that we defined the myName variable in the global scope and called it in the getName() function.

// Question: Which of the two spaces is myName’s lexical scope? Is it the global scope or the getName() function’s local scope?

// Answer: Remember that lexical scope means definition space — not invocation space. Therefore, myName’s lexical scope is the global scope because we defined myName in the global environment.


function getName() {
    const myName = "Oluwatobi";
    return myName;
  }
  
//   Question: Where is myName’s lexical scope?
  
//   Answer: Notice that we created and called myName within getName(). Therefore, myName’s lexical scope is getName()’s local environment because getName() is myName’s definition space.



// ---------------------------------How Does Lexical Scope Work?
// Lexical scope works by looking up the variable or function in the current scope and then moving up
// Lexical scope works by looking up the scope chain from the current execution context to find the variable
// If the variable is found in the current scope, it is used
// If the variable is not found in the current scope, the function continues to look up the scope
// chain until it finds the variable or reaches the global scope
// If the variable is not found in any scope, it is undefined
// Lexical scope is a fundamental concept in JavaScript and is used by the JavaScript engine to resolve variable
// A JavaScript expression’s definition environment determines the code permitted to access it.

// In other words, only code within an item's lexical scope can access it.

// For instance, consider the code below:


// Define a function:
function showLastName() {
    const lastName = "Sofela";
    return lastName;
  }
  
  // Define another function:
  function displayFullName() {
    const fullName = "Oluwatobi " + lastName;
    return fullName;
  }
  
  // Invoke displayFullName():
  console.log(displayFullName());
  
//   // The invocation above will return:

//   Uncaught ReferenceError: lastName is not defined
//   Notice that the invocation of displayFullName() in the snippet above returned an Uncaught ReferenceError. The error returned because only code within an item's lexical scope can access the item.
  
//   Therefore, neither the displayFullName() function nor its internal code can access the lastName variable because lastName got defined in a different scope.
  
//   In other words, lastName’s lexical scope is different from that of displayFullName().
  
//   lastName’s definition space is showLastName() while displayFullName()’s lexical scope is the global environment.
  
//   Now, consider this other code below:


// In the snippet above, displayFullName() successfully returned "Oluwatobi Sofela" because displayFullName() and showLastName() are in the same lexical scope.

// In other words, displayFullName() could invoke showLastName() because the two functions are both defined in the global scope.

// Note:

// In example 2 above, displayFullName() did not gain access to showLastName()'s lastName variable.
// Instead, displayFullName() invoked showLastName() — which then returned the content of its lastName variable.
// An alternative to the lexical scope is the dynamic scope — but it rarely gets used in programming. Only a few languages, like bash, use dynamic scope.