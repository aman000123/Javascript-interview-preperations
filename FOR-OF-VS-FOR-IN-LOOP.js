
//Certainly! for...of and for...in are both looping constructs in JavaScript, but they are used for different purposes and operate on different types of data.

// for...of loop:

// Usage: Used specifically for iterating over the values of an iterable object (like arrays, strings, maps, sets, etc.).

// The for...of loop is designed specifically for iterating over iterable objects like arrays, strings, maps, etc. It cannot be directly used to iterate over the properties of a plain JavaScript object ({}).

// However, you can use Object.entries() or Object.keys() or Object.values() in combination with for...of or other iterable constructs to work with objects in a loop:

const array = [1, 2, 3];

for (const value of array) {
    console.log(value);
}
// 1
// 2
// 3

//iterating through array
const colors = ['red', 'green', 'blue'];

for (const color of colors) {
    console.log(color);
}

// red
// green
// blue

//iterating through string
const message = "Hello";

for (const char of message) {
    console.log(char);
}

// H
// e
// l
// l
// o

//Iterating through a Map:

const myMap = new Map();
myMap.set('a', 1);
myMap.set('b', 2);

for (const [key, value] of myMap) {
    console.log(`${key} => ${value}`);
}

// a => 1
// b => 2

// The for...of loop is designed specifically for iterating over iterable objects like arrays, strings, maps, etc. It cannot be directly used to iterate over the properties of a plain JavaScript object ({}).




// However, you can use Object.entries() or Object.keys() or Object.values() in combination with
// for...of or other iterable constructs to work with objects in a loop:




// Object.entries(), Object.keys(), and Object.values() return iterable arrays.
// A plain JavaScript object ({}) itself is not iterable



/*
//when for-of use over plain object then it gives error   TypeError: a is not iterable


const a = { name: "aman", age: 12, roll: 122 }

for (let [key, value] of a) {
    console.log(key, '==--=>', value)
}

this give errorr

*/


const a = { name: "aman", age: 12, roll: 122 }

for (let [key, value] of Object.entries(a)) {
    console.log(key, '==--=>', value)
}
// name ==--=> aman
// age ==--=> 12
// roll ==--=> 122



for (let key of Object.keys(a)) {
    console.log(key, '===>>>>', a[key])

}

// name ===>>>> aman
// age ===>>>> 12
// roll ===>>>> 122


for (let values of Object.values(a)) {
    console.log('==+++=>', values)
}
// ==+++=> aman
// ==+++=> 12
// ==+++=> 122

////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

//for...in loop:

// Usage: Used for iterating over the enumerable properties of an object.

// It iterates over the keys (property names) of an object, including inherited enumerable properties from the prototype chain.


// It's typically used for objects, and while it can iterate over arrays, it's generally not recommended due to potential issues when iterating over array elements (e.g., inherited properties from the prototype chain).


const object = { a: 1, b: 2, c: 3 };

for (const key in object) {
    console.log(key + ': ' + object[key]);
}

// a: 1
// b: 2
// c: 3

const person = {
    name: 'Alice',
    age: 30,
    gender: 'female'
};

for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}

// name: Alice
// age: 30
// gender: female


const arr = [1, 2, 3, 4, 5]
for (const key in arr) {
    console.log(key, 'is of arr', arr[key])
}
// 0 is of arr 1
// 1 is of arr 2
// 2 is of arr 3
// 3 is of arr 4
// 4 is of arr 5



// In summary, for...of is used for iterating over iterable values like arrays, strings, maps, etc., while for...in is used for iterating over object properties, including enumerable inherited properties from the prototype chain. Each serves a specific purpose based on the data structure being handled.

const aa = [1, 2, 3, 1, 1]
for (const c of aa) {
    console.log(c)
}
// 1
// 2
// 3
// 1
// 1
for (const c in aa) {
    console.log(c, aa[c])
}


// 0 1
// 1 2
// 2 3
// 3 1
// 4 1