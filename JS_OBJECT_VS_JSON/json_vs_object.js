// The difference between a JavaScript Object and JSON (JavaScript Object Notation) lies in their format and usage:

// 1. JavaScript Object
// A JavaScript Object is a data structure used in JavaScript to store key-value pairs.
// It is defined using curly braces {}.
// Property keys can be unquoted if they follow JavaScript identifier rules.
// Values can be of any data type, including functions.
// Example of a JavaScript Object:



// What is a JavaScript Object?
// A JavaScript object is one of the core building blocks of the language. It is a collection of key-value pairs where the keys are called properties, and the values can be of any valid JavaScript data type, including strings, numbers, arrays, other objects, and even functions.

// Think of objects as a way to structure and organize related data, much like a dictionary or map. These objects are mutable, meaning that you can modify them after they are created, which makes them incredibly versatile for handling dynamic data in your applications.


const person = {
    name: "John",
    age: 30,
    isStudent: false,
    greet: function () {
        console.log("Hello!");
    }
};

// ✅ Supports functions and other non-serializable data types.


// 2. JSON (JavaScript Object Notation)

// JSON is a lightweight data format used for data exchange.
// It is a string representation of an object.
// Property names must be in double quotes.
// Only supports primitive data types (string, number, boolean, null), arrays, and other JSON objects.
// Functions are not allowed in JSON.
// Example of JSON:



// What is JSON (JavaScript Object Notation)?
// On the other hand, JSON is a lightweight data-interchange format that is used for transmitting data between a server and a web application (or between different systems in general). It is a string representation of data — think of it as a serialized form of a JavaScript object.

// Unlike JavaScript objects, JSON has stricter syntax rules:

// All keys must be strings, and they must be wrapped in double quotes.
// Only certain data types are allowed — strings, numbers, arrays, booleans, null, and other nested JSON objects. Notably, functions and methods are not allowed.


{
    "name": "John",
        "age": 30,
            "isStudent": false
}
// ✅ Can be used for data transmission(e.g., APIs, storage).



////-----------------------Conversion Between JavaScript Object and JSON

// -------------------------------------Convert JS Object to JSON

const jsonString = JSON.stringify(person);
console.log(jsonString); // {"name":"John","age":30,"isStudent":false}


// ------------------------------Convert JSON to JS Object

const jsonObject = JSON.parse(jsonString);
console.log(jsonObject.name); // John


// ===========================How to Convert Between JavaScript Objects and JSON
// If you need to convert a JavaScript object into JSON to send it to a server or store it, you can use JSON.stringify(). This method takes a JavaScript object and converts it into a JSON string.

const obj = {
    name: "John",
    age: 30,
    isStudent: false,
    greet: function () { console.log("Hello, " + this.name); }
};

// Convert JavaScript object to JSON string
const jsonStringx = JSON.stringify(obj);
console.log(jsonStringx);
// Output: {"name":"John","age":30,"isStudent":false}


// Notice that the greet function is not included in the JSON output. This is because JSON only supports specific data types, and functions are not one of them.

// To convert JSON back into a JavaScript object, you use JSON.parse():

// Convert JSON string back to JavaScript object
const parsedObj = JSON.parse(jsonStringx);
console.log(parsedObj);
// Output: {name: "John", age: 30, isStudent: false}


// Conclusion
// While JavaScript objects and JSON share similarities, they serve different purposes. JavaScript objects are dynamic and versatile for in-code manipulation, whereas JSON is a strict, serialized format used for data interchange. Understanding the distinction between the two will help you work more efficiently with data in your applications.

// Whenever you’re transferring data across the web, JSON is your go-to format. And within your code, JavaScript objects give you the flexibility you need to manage and process that data.