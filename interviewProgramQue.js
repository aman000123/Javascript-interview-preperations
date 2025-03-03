
// 1. Program to find longest word in a given sentence ?

function findLongestWord(sentence) {

    const words = sentence.split(' ');//method divides the sentence into an array of words based on spaces.
    // console.log("words", words)
    // words [
    //     'The',        'quick',
    //     'amanmishra', 'brown',
    //     'fox',        'jumps',
    //     'over',       'the',
    //     'lazy',       'dog'
    //   ]

    let longestWord = "";
    for (const word of words) {
        // Check if the current word's length is greater than the longest word found so far
        if (word.length > longestWord.length) {
            longestWord = word; // Update the longest word
        }

        //         //return longestWord;  if here then The output
        // The return statement is placed inside the loop.
        // This means that the function will exit and return after checking only the first word of the sentence, because return immediately stops the execution of the function
    }
    return longestWord;

    // The return statement is outside the loop, meaning the function will only return the longest word after it has checked all the words in the sentence.
}

const sentence = "The quick amanmishra brown fox jumps over the lazy dog";
const longestWord = findLongestWord(sentence);
console.log(`The longest word is: ${longestWord}`);



// 2. How to check whether a string is palindrome or not ?

// 3. Write a program to remove duplicates from an array ?


const arr = [1, 2, 3, 4, 5, 1, 2, 3, 4];
const sett = new Set([...arr])
console.log("sett", sett)



function removeDuplicate(arrays) {
    let unique = [];
    for (let item of arrays) {
        if (!unique.includes(item)) {
            unique.push(item)
        }
    }
    return unique

}

const arr1 = [1, 2, 3, 4, 3, 3, 2, 1];
const remove = removeDuplicate(arr1)
console.log("remve duplicate", remove)



// 4. Program to find Reverse of a string without using built-in method ?

//finds the counts of 1 in array
function findCountOne(array) {
    let count = 0;

    for (let a of array) {
        if (a == 1) {
            count++
        }
    }
    return count
}
const arr3 = [1, 2, 3, 4, 5, 1, 1, 1, 1]
console.log(findCountOne(arr3))


// 5. Find the max count of consecutive 1’s in an array ?

function findConsecutiveCountOne(array) {
    let maxcount = 0;
    let currentCount = 0;

    for (let a of array) {
        if (a === 1) {
            currentCount++
        } else {
            maxcount = Math.max(maxcount, currentCount);
            currentCount = 0;
        }
    }
    // Final check after loop (in case the array ends with a streak of 1s)
    console.log("max count", maxcount, currentCount)//3,2
    return Math.max(maxcount, currentCount);
}

const arra = [1, 1, 0, 1, 1, 1, 0, 1, 1];
console.log(findConsecutiveCountOne(arra))

// First two elements are 1, 1, so:


// currentCount increases to 2.
// Then a 0 is encountered, so:
// maxCount becomes 2 (because Math.max(0, 2) = 2).
// currentCount is reset to 0.
// The next three elements are 1, 1, 1, so:


// currentCount increases to 3.
// Then another 0 is encountered, so:
// maxCount becomes 3 (because Math.max(2, 3) = 3).
// currentCount is reset to 0.
// The last two elements are 1, 1, so:


// currentCount increases to 2.
// After the loop finishes:


// The final comparison Math.max(3, 2) ensures that maxCount remains 3.
// So, the function will return 3, which is the longest streak of consecutive 1s in the array.


// 6. Find the factorial of given number ?

function findFactorial(number) {
    if (number < 0) {
        return "Negative number not allowed"
    }
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result = result * i
    }
    return result
}

const factorial = findFactorial(5)
console.log(factorial)




// 7. Given 2 arrays that are sorted [0,3,4,31] and [4,6,30]. Merge them and sort [0,3,4,4,6,30,31] ?
// 8. Create a function which will accepts two arrays arr1 and arr2. The function should return true if every value in arr1 has its corresponding value squared in array2. The frequency of values must be same.
// 9. Given two strings. Find if one string can be formed by rearranging the letters of other string.
// 10. Write logic to get unique objects from below array ?
// I/P: [{name: "sai"},{name:"Nang"},{name: "sai"},{name:"Nang"},{name: "111111"}];
// O/P: [{name: "sai"},{name:"Nang"}{name: "111111"}


// 11. Write a JavaScript program to find the maximum number in an array.

function findMaximumNumberInArray(array) {

    let max = ''
    for (number of array) {
        if (number > max) {
            max = number
        }
    }
    return max
}

const maximum = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(findMaximumNumberInArray(maximum))

// 12. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.


function returnEvenNumber(array) {

    let even = []
    for (a of array) {
        if (a % 2 === 0) {
            even.push(a)
        }
    }
    return even
}

const totalNumber = [1, 2, 3, 4, 5, 6]
console.log(returnEvenNumber(totalNumber))




// 13. Write a JavaScript function to check if a given number is prime.
function findsPrimeNumber(number) {
    if (number <= 1) {
        return false; // Prime numbers are greater than 1
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false; // If number is divisible by any number other than 1 and itself, it's not prime
        }
    }

    return true; // If no divisors found, it's a prime number
}

// Example usage:
const prime = findsPrimeNumber(7);
console.log(prime ? "Prime number" : "Not a prime number");  // Output: Not a prime number




// 14. Write a JavaScript program to find the largest element in a nested array.
// [[3, 4, 58], [709, 8, 9, [10, 11]], [111, 2]]
// 15. Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms.
// 16. Given a string, write a javascript function to count the occurrences of each character in the string.
// 17. Write a javascript function that sorts an array of numbers in ascending order.
// 18. Write a javascript function that sorts an array of numbers in descending order.
// 19. Write a javascript function that reverses the order of words in a sentence without using the built-in reverse() method.
// 20. Implement a javascript function that flattens a nested array into a single-dimensional array.
// 21. Write a function which converts string input into an object
// ("a.b.c", "someValue");
// {a: {b: {c: "someValue"}}}



// hashtag#javascript Interview questions: What are limitations of arrow functions in javascript ?

// Arrow functions are introduced in ES6. They are simple and shorter way to write functions in javascript.
// 1. Arrow functions cannot be accessed before initialization
// 2. Arrow function does not have access to arguments object
// 3. Arrow function does not have their own this. Instead, they inherit this from the surrounding code at the time the function is defined.
// 4. Arrow functions cannot be used as constructors. Using them with the 𝙣𝙚𝙬 keyword to create instances throws a TypeError.
// 5. Arrow functions cannot be used as generator functions.










// Most asked 60 hashtag#javascript interview questions:

// 1. What is the difference between 'Pass by Value' and 'Pass by Reference'?
// 2. What is the difference between map and filter ?
// 3. What is the difference between map() and forEach()
// 4. What is the difference between Pure and Impure functions?
// 5. What is the difference between for-in and for-of ?
// 6. What are the differences between call(), apply() and bind() ?
// 7. List out some key features of ES6 ?
// 8. What’s the spread operator in javascript ?
// 9. What is rest operator in javascript ?
// 10. What are DRY, KISS, YAGNI, SOLID Principles ?
// 11. What is temporal dead zone ?
// 12. Different ways to create object in javascript ?
// 13. Whats the difference between Object.keys,values and entries
// 14. Whats the difference between Object.freeze() vs Object.seal()
// 15. What is a polyfill in javascript ?
// 16. What is generator function in javascript ?
// 17. What is prototype in javascript ?
// 18. What is IIFE ?
// 19. What is CORS ?
// 20. What are the different datatypes in javascript ?
// 21. What are the difference between typescript and javascript ?
// 22. What is authentication vs authorization ?
// 23. Difference between null and undefined ?
// 24. What is the output of 3+2+”7” ?
// 25. Slice vs Splice in javascript ?
// 26. What is destructuring ?
// 27. What is setTimeOut in javascript ?
// 28. What is setInterval in javascript ?
// 29. What are Promises in javascript ?
// 30. What is a callstack in javascript ?
// 31. What is a closure ?
// 32. What are callbacks in javascript ?
// 33. What are Higher Order Functions in javascript ?
// 34. What is the difference between == and === in javascript ?
// 35. Is javascript a dynamically typed language or a statically typed language
// 36. What is the difference between Indexeddb and sessionstorage ?
// 37. What are Interceptors ?
// 38. What is Hoisting ?
// 39. What are the differences let, var and const ?
// 41. Differences between Promise.all, allSettled, any, race ?
// 42. What are limitations of arrow functions?
// 43. What is difference between find vs findIndex ?
// 44. What is tree shaking in javascript ?
// 45. What is the main difference between Local Storage and Session storage ?
// 46. What is eval() ?
// 47. What is the difference between Shallow copy and deep copy ?
// 48. What are the difference between undeclared and undefined variables ?
// 49. What is event bubbling
// 50. What is event capturing ?
// 51. What are cookies ?
// 52. typeOf operator ?
// 53. What is this in javascript and How it behaves in various scenarios ?
// 54. How do you optimize the performance of application
// 55. What is meant by debouncing and throttling