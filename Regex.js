
// A regular expression is a sequence of characters that forms a search pattern.

// The search pattern can be used for text search and text replace operations.

// Example explained:


// /w3schools/i  is a regular expression.

// w3schools  is a pattern (to be used in a search).

// i  is a modifier (modifies the search to be case-insensitive).

// Use a regular expression to do a case-insensitive search for "w3schools" in a string:

let text = "Visit W3Schools";
let n = text.search(/w3schools/i);// after i dont take case sensitive
console.log(n)//6



//The replace() method replaces a specified value with another value in a string:
let text1 = "Visit Microsoft!";
let result = text1.replace("Microsoft", "W3Schools");
console.log(result)//Visit W3Schools!



//Use a case insensitive regular expression to replace Microsoft with W3Schools in a string:
let text2 = "Visit Microsoft!";
let results = text2.replace(/microsoft/i, "W3Schools");
console.log(results)//Visit W3Schools!


const a = "AmanaAaNa"
console.log(a.replace(/a/g, "xx"))//AmxxnxxAxxNxx


console.log(a.replace(/a/i, "xx"))//xxmanaAaNa


// Modifier	Description	Try it

// i	Perform case-insensitive matching	but jo phle milta hai usi ko change stopping after the first match

// g	Perform a global match (find all matches rather than stopping after the first match)

// m	Perform multiline matching




// Using test()////////////////////

// The test() method is a RegExp expression method.

// It searches a string for a pattern, and returns true or false, depending on the result.

// The following example searches a string for the character "e":

// Example
const pattern = /e/;
console.log(pattern.test("The best things in life are free!"));



// [abc]	Find any of the characters between the brackets
// [0-9]	Find any of the digits between the brackets
// (x|y)	Find any of the alternatives separated with |


var msg = "Hello John John";
var nn = msg.replace(/John/i, "aman"); //Hello aman John
var nnn = msg.replace(/John/g, "aman");//Hello aman aman
console.log(nn, nnn)

var nnnn = /J/
var te = nnnn.test("Hello John John")
console.log(te)//true

var m = /J/i
var mm = m.test("Hello john john")
console.log(mm)//true

var x = /J/g
var xx = "Hello John John"
console.log(xx.replace(x, "AAA"))//Hello AAAohn AAAohn

"strict"

const obj = {
    name: "aman",
    employee: {
        name: "aaaaa"
    }
}
Object.freeze(obj)
obj.name = "aaa"
obj.age = 12;
obj.employee.name = "pppp"
delete obj.name
console.log(obj)
console.log(Object.isFrozen(obj))


const ax = [1, 2, 3, 4];

ax[1] = 11;
console.log(ax)

console.log(Object.is("aa", "aaa"))





