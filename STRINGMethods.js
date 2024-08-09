

//The length property returns the number of characters in a string.

const str = "Aman  mishra"
console.log(str.length)//12  space also count


// The String.length property is a read-only property. There will be no effect if we try to change it manually. For example:

str.length = 15
console.log(str.length)//12


//but in array length will change
const arr = [1, 2, 3, 4]
console.log(arr.length)//4
arr.length = 7
console.log(arr.length)//7
console.log(arr)//[ 1, 2, 3, 4, <3 empty items> ]


//The replace() method returns a new string with the specified string/regex replaced.

//str.replace(pattern, replacement)

const str1 = "Aman mishra"
console.log(str1.replace('a', '1'))//Am1n mishra

//replace all a 
console.log(str1.replace(/a/g, '1'))//Am1n mishr1

//replace all a without considering as upper or lower case
console.log(str1.replace(/a/gi, '1'))//1m1n mishr1




//The string indexOf() method returns the index of the first occurence of the substring in a string.

//str.indexOf(searchValue, fromIndex)

//this methode is case sensitive

//bydefault index start from 0

const str2 = "Aman mishra"
console.log(str2.indexOf('a'))//2
console.log(str2.indexOf('a', 3))//10

//if not found substring then return -1
console.log(str2.indexOf('w'))//-1
console.log(str2.indexOf())//-1


// For empty string searchValue and fromIndex less than the string's length, indexOf returns the value the same as fromIndex.

console.log(str2.indexOf('', 3))//3
console.log(str2.indexOf('', 4))//4

// Similarly, for empty string searchValue and fromIndex greater than the string's length, indexOf returns the string's length.

console.log(str2.indexOf('', 14))//11
console.log(str2.length)//11





//The lastIndexOf() method returns the last index of occurence of a given substring in the string.


//str.lastIndexOf(searchValue, fromIndex)
//by default from index is infinity
const str3 = "Aman mishra"
console.log(str3.lastIndexOf('a'))//10






// The startsWith() method returns true if a string begins with specified character(s). If not, it returns false.

//str.startsWith(searchString, position)  //position stars from 0

const str4 = "Hello javascript developers"
console.log(str4.startsWith('H'))//true

console.log(str4.startsWith('H', 4))//false
console.log(str4.startsWith('o', 4))//true



// The endsWith() method returns true if a string ends with the specified string. If not, the method returns false.

//str.endsWith(searchString, length)

//case sensitive bhi hai

const str5 = "Hello javascript developers"
console.log(str5.endsWith('ers'))//true
console.log(str5.endsWith('S'))//false


console.log(str5.endsWith('pt', 16))//true
console.log(str5.endsWith('pt', 15))//false



//The toUpperCase() method returns the string converted to uppercase.


//The toUpperCase() method raises TypeError when called on null or undefined.

//The toUpperCase() method does not change the original string.

const str6 = "Hello javascript developers"
console.log(str6.toUpperCase())//HELLO JAVASCRIPT DEVELOPERS
console.log(str6)//Hello javascript developers


//The toLowerCase() method returns the string converted to lowercase.

//The toLowerCase() method raises TypeError when called on null or undefined.

//The toLowerCase() method does not change the original string.


const str7 = "HELLO JAVASCRIPT DEVELOPERS"
console.log(str7.toLocaleLowerCase())//hello javascript developers


//The includes() method checks if one string can be found inside another string.


//str.includes(searchString, position)


const str8 = "Hello javascript developers"
console.log(str8.includes("j"))//true
console.log(str8.includes("j", 10))//false
console.log(str8.includes(""))//true
console.log(str8.includes("s", 10))//true



//The repeat() method creates a new string by repeating the given string a specified number of times and returns it.

//str.repeat(count)

//count - An integer between 0 and +Infinity, indicating the number of times to repeat the string.


//Note: repeat() raises RangeError if repeat count is negative, infinity, or overflows maximum string size.


const str9 = "Hello javascript developers"
console.log(str9.repeat(5))//Hello javascript developersHello javascript developersHello javascript developersHello javascript developersHello javascript developers

//console.log(str9.repeat(-1))//RangeError: Invalid count value


// Here, the non-integer index values 3.2 and 3.7 are converted to the nearest integer index 3. So, both sentence.repeat(3.2) and sentence.repeat(3.7) repeats the string 3 times

console.log(str9.repeat(3.9))//Hello javascript developersHello javascript developersHello javascript developers



//The charAt() method returns the character at the specified index in a string.

//str.charAt(index)

//index - An integer between 0 and str.length - 1. If index cannot be converted to integer or is not provided, the default value 0 is used.

const str10 = "Hello javascript developer"
console.log(str10.charAt(4))//o  if 4.3or 4.9  then also==>o 


//by default parameter will 0
console.log(str10.charAt())//H

//outof range then
console.log(str10.charAt(100))//empty string






// The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.

//str.charCodeAt(index)

//index - An integer between 0 and (str.length - 1).

//The charCodeAt() method always returns a value less than 65,536.

const str11 = "Hello javascript"
console.log(str11.charCodeAt(1))//72
console.log(str11.charCodeAt(3))//108
console.log(str11.charCodeAt(3.4))//108
console.log(str11.charCodeAt(3.9))//108

//by default will be 0

console.log(str11.charCodeAt())//72
console.log(str11.charCodeAt(-2))//NAN



//The fromCharCode() method returns a string created from the specified sequence of UTF-16 code units.



//String.fromCharCode(num1, ..., numN)

//The fromCharCode() method returns a string and not a String object.

console.log(String.fromCharCode(72, 73, 74))//HIJ



//The substring() method returns a specified part of the string between start and end indexes.


//str.substring(indexStart, indexEnd)

//indexEnd (optional) - The index before which to stop extraction. (Exclusive) If omitted, it extracts till the end of the string.


//Note: substring() does not change the original string.

const str12 = "Hello javascript developers"
console.log(str12.substring(4, 10))//o java
console.log(str12.substring(4))//o javascript developers
console.log(str12)


//if start > end, they are swapped
console.log(str12.substring(10, 4))//o java


//// the extreme values are 0 and str.length

// Any argument value < 0 is treated as 0.
// Any argument value > str.length is treated as str.length.
// Any NaN argument value is treated as 0.
// If indexStart is greater than indexEnd, the two arguments are swapped, i.e. str.substring(a, b) will be str.substring(b, a).











//The padStart() method pads the current string with another string to the start.

//str.padStart(targetLength, padString)

// targetLength - The length of the final string after the current string has been padded.
// padString (optional) - The string to pad the current string with. Its default value is " ".


const str13 = "Hello javascript"
console.log(str13.padStart(20, '@'))//@@@@Hello javascript


console.log(str13.padStart(20, 'HTMLCSS'))//HTMLHello javascript

console.log(str13.padStart(3, '@'))//Hello javascript






//The padEnd() method pads the current string with another string to the end.

const str14 = "Hello javascript"
console.log(str14.padEnd(25, "React"))//Hello javascriptReactReac

//jitni length denge utna hi expand long hogi string
console.log(str14.padEnd(25))
console.log(str14.length)//16


const str15 = "Aman"
console.log(str15.padEnd(10, '#'))//Aman######
console.log(str15.padStart(10, '#'))//######Aman




//The codePointAt() method returns an integer that denotes the Unicode point value of a character in the string.


//str.codePointAt(pos)

//default position is 0

const str16 = "Hello javascript developers"
console.log(str16.codePointAt())//72
console.log(str16.codePointAt(0))//72
console.log(str16.codePointAt(1))//101

//if value of position is out of ranged then
console.log(str16.codePointAt(100))//undefined
console.log(str16.codePointAt(-5))//undefined




//The match() method returns the result of matching a string against a regular expression.


//str.match(regexp)
const str17 = "Hello javascript developers"
const exp = /javascript/
const ma = str17.match(exp)
console.log(ma)

// [
//   'javascript',
//   index: 6,
//   input: 'Hello javascript developers',
//   groups: undefined
// ]

const message = "JavaScript is a fun programming language.";
const exp1 = /programming/;
let result = message.match(exp1);
console.log(result);

// [
//     'programming',
//     index: 20,
//     input: 'JavaScript is a fun programming language.',
//     groups: undefined
//   ]




//The search() method searches for a match between a given string and a regular expression.

const str25 = "i am react lovers"

//// pattern that searches the first occurence of an uppercase character

const ptern = /[A - Z]/
console.log(str25.search(ptern))//1
console.log(str25.search(/[a - z]/))//1



const str28 = "react world"
console.log(str28.search(/[a-z]/))//0






//The replaceAll() method returns a new string with all matches of a pattern replaced by a replacement.

//str.replaceAll(pattern, replacement)


const str22 = "Hello javascript developers"
console.log(str22.replaceAll('l', '$'))//He$$o javascript deve$opers

const str32 = "Hello hello"
console.log(str32.replaceAll(/hello/gi, 'AMAN'))//AMAN AMAN





//The concat() method concatenates given arguments to the given string

//str.concat(str1, ..., strN)

//Note: The assignment operators like + and += are strongly recommended over the concat() method.


const str21 = "Hello"
console.log(str21.concat('javascript'))//Hellojavascript






//The split() method divides a string into a list of substrings and returns them as an array.


//str.split(separator, limit)


// separator (optional) - The pattern (string or regular expression) describing where each split should occur.
// limit (optional) - A non-negative integer limiting the number of pieces to split the given string into.


//Returns an Array of strings, split at each point where the separator occurs in the given string.


//Note: The split() method does not change the original string.


const str20 = "Hello javascript lovers"
console.log(str20.split())//[ 'Hello javascript lovers' ]
    / console.log(str20.split(''))
// //[
//     'H', 'e', 'l', 'l', 'o',
//     ' ', 'j', 'a', 'v', 'a',
//     's', 'c', 'r', 'i', 'p',
//     't', ' ', 'l', 'o', 'v',
//     'e', 'r', 's'
//   ]

const str30 = "Hello $ javascript $ lovers"
console.log(str30.split('$'))//[ 'Hello ', ' javascript ', ' lovers' ]
console.log(str30.split('$', 2))//[ 'Hello ', ' javascript ' ]//limit 2 hi ha
console.log(str30.split('$', 5))//[ 'Hello ', ' javascript ', ' lovers' ]


const messagee = "JavaScript::is::fun";
let resulte = messagee.split("::");
console.log(resulte);//[ 'JavaScript', 'is', 'fun' ]








//The trim() method removes whitespace from both ends of a string.

//The trim() method does not take in any parameters.

//Returns a new string representing the str stripped of whitespace from both ends.

const str19 = "    Hello javascript    "
console.log(str19.trim())//Hello javascript






//The slice() method extracts and returns a section of a string.

//str.slice(beginIndex, endIndex)

const str18 = "JavaScript is a fun programming language.";
console.log(str18.slice(4, 12))//Script i

//dont mutate original string
console.log(str18)//JavaScript is a fun programming language.

//with negative index then comes from last

console.log(str18.slice(4, -1))//Script is a fun programming language
console.log(str18.slice(-4, -1))//age


































