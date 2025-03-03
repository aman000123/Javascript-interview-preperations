
console.log({} + {})//[object Object][object Object]
console.log(typeof ({} + {}))//string

console.log([] + [])//string
console.log(typeof ([] + []))//string

console.log(typeof [])//object



let namex = "aman";
let another = { namex }
console.log(another.namex)//aman



//print table
let i = 1
let j = 5
for (i = 1; i <= 10; i++) {
    console.log(`${j}*${i}=${i * j}`)
}


//print 1 to 10 number in 1 sec interval on each number
for (let i = 0; i <= 10; i++) {
    setTimeout(() => {
        console.log(i)
    }, i * 1000)
}

//let se use karne pr 0,1,2,3,4,5----10 

//The let keyword introduces block scope. Therefore, each iteration of the loop will have its own i variable, scoped to the block of the loop. As a result, when the setTimeout callbacks are executed, each one refers to the i value of its respective iteration, resulting in the output from 0 to 10 in order.



for (var z = 0; z <= 10; z++) {
    setTimeout(() => {
        console.log(z)
    }, z * 1000)
}
//var use se 11,11,11,11-----11times

//The var keyword has a function scope (or global scope if declared outside any function), not block scope. Therefore, there is only one i variable for the entire loop. When the setTimeout callbacks are executed, they all refer to the same i variable, which has been modified by the loop and eventually has the value 11 after the loop completes. Hence, you will see the output as 11 printed 11 times, each after a delay of 1 to 10 seconds.


//1
let a = []
let b = []
//normally compare
console.log(a == b)//false


//strictly compare
console.log(a === b)//false


//array primtive data type hai refrence leta ha


//do array compare me memory ki location compare hoti 
//kisi do array ki memory location same nhi ho sakti

let arrx1 = [1, 2, 3]
let arrx2 = arrx1;
//now assign empty array
arrx1 = []
arrx2.push(22, 33)
console.log(arrx1, arrx2)//[] [ 1, 2, 3, 22, 33 ]


let ds = { name: "amamama" }
let dsd = d;
ds = {}
//d me empty assign kiya
console.log(ds.name, dsd.name)//undefined amamama




// Every Variable has a data type that tells what kind of data is being stored in a variable. There are two types of data types in JavaScript.


// Primitive data types ===data types provided by JavaScript language are known as primitive data type

// Non-primitive data types=== The data types that are derived from primitive data types of the JavaScript language are known as non-primitive data types.


//Primitive Data types are predefined. 	Non-Primitive data types are created by the programmer


let zq = 9;
let l = zq++//after this line zq will be 10
console.log(l)//=9
console.log(zq)//10
console.log(++zq * l)//99

// let zq = 9;: This initializes a variable zq with a value of 9.

// let l = zq++;: In this line, the value of zq (which is 9) is assigned to the variable l, and then zq is incremented by 1 using the post-increment operator (++). This means that after this line, zq will have a value of 10, and l will have a value of 9.

// ++zq is a pre-increment operation, so it increments the value of zq by 1 before its value is used in the expression. Since zq was previously incremented to 10, after this operation, its value becomes 11.

// l still holds the value of 9.


let ar = 1, br = 2;
console.log(ar, br);//1,2
[ar, br] = [br--, ++ar];
console.log(ar, br);//2,2


// Initially, a is assigned the value of 1 and b is assigned the value of 2.
// [a, b] on the left side is a destructuring assignment that means the values of a and b will be assigned from the array [b--, ++a].
// b-- means the current value of b (which is 2) will be used for the assignment, and then b will be decremented by 1. So, b becomes 1, but for this assignment, it uses the original value 2.
// ++a means a will be incremented by 1 before being used for the assignment. So, a becomes 2.
// Let's see what values a and b will have after this operation


var x = 5;
console.log(x++ + ++x);

// After x++, x becomes 6, but the expression uses the previous value (5).
// After ++x, x becomes 7, and the expression uses this updated value (7).
// So, the expression becomes 5 + 7, which equals 12.
// Therefore, when you run the code console.log(x++ + ++x);, it will output 12.



console.log(NaN == NaN)//false
console.log(NaN === NaN)//false

console.log(0 == -0)//true
console.log(0 === -0)//true



//convert string into array
const trs = "amamama"
console.log(Array.from(trs))
// //[
//     'a', 'm', 'a',
//     'm', 'a', 'm',
//     'a'
//   ]




//2
let c = []
let d = c
//c ki memory location #ewwee
//usi ko d me assign kar diya
//to d ki memory location same ho gai hogi
console.log(c == d)//true
console.log(c === d)//true


//3
let aa = [20]
let bb = [20]
console.log(aa[0] == bb[0])///true
console.log(aa[0] === bb[0])//true

//bcz yahna par element ki value compare ho rhi na ki memory location

//[] memory location compare , [1]  value compare

//4

//array se value ko bahar nikalna ho to
//destructure methods se
let z = [1, 2, 3, 4]
let y = {
    name: "Aman"
}

//destructure == array , object break hokar element bahar aa jayenge
console.log(...z)//1 2 3 4

//5
console.log(typeof (NaN)) //number



//6
let data = "aman"
console.log(isNaN(data)) //true


////////string ko  number se devide pr  NAN aata hai/////////

//Non numeric ko numeric se devide karne par nan aata hai


//7
console.log(data / 2) //nan


//8
let data1 = 10 - -10;

console.log(data1)//20

//10-10=0, 10--10 = 20

var ax = b = 3; console.log(typeof ax, typeof b);  //number,number

//how js code execute

let fname = "aman";
let first = function () {
    let a = "a"
    second()
    let x = a + '' + fname
    console.log(x)
}

let second = function () {
    let b = 'b';
    third();
    let y = b + '' + fname
    console.log(y)
}

let third = function () {
    let c = 'c'
    console.log(c + '' + fname)
}


first()


//sabse pahle global execution context me sare top level function variable gaye jaise[fname,first,second,third]

//fir first() call hua uke andar second () call hai fir second ka context active hua wahna third() call kiya hai third ( ) ka context active ho gay ab 

//third log hokar popup ho gaya
//ab second log hoga second popup ho gaya 
//ab first log hokar  popuap hua

//ab global bhi pop ho gaya

//output

// caman
// baman
// aaman


////////////////////////////////////////////////

//set ek type ka alag se data type ya structure hota jaise array

//set ke jitne bhi element honge duplicate element ko delete karta hai


//9
let set = new Set([1, 1, 2, 3, 4, 4, 5])

console.log(set)//[1,2,3,4,5]
console.log(typeof (set)) //object


//set ==> type of = object



//remove duplicates number from array
const Arr = [1, 1, 2, 3, 4, 4, 3, 2, 1, 1, 1, 1, 1];
console.log(...new Set(Arr))//1,2,3,4


// destructre arraye se data ko bahar karta hai 

const qq = [1, 1, 1, 2, 3, 2, 3, 2]
console.log(new Set([...qq]))//Set(3) { 1, 2, 3 }
console.log(...new Set(qq))//1 2 3



//remove duplicate and find in array

const awz = [1, 2, 3, 2, 3, 2, 3, 1, 1]
const u = [...new Set(awz)]
console.log(u)//[ 1, 2, 3 ]

const Arrr = [1, 1, 2, 3, 4, 4, 3, 2, 1, 1, 1, 1, 1];
console.log(new Set([...Arrr]))//Set(4) { 1, 2, 3, 4 }




//remove duplicate using function


function removeDuplicate(arrzz) {
    let unique = [];
    arrzz.forEach(element => {
        if (!unique.includes(element)) {
            unique.push(element)
        }
    })
    console.log(unique)
}
removeDuplicate()//[ 1, 2, 3, 4, 5, 6 ]
const arrz = [1, 2, 3, 4, 5, 6, 2, 3, 4, 2, 1, 6, 5, 5]
removeDuplicate(arrz)



//10
let obj = { name: "Aman" }

console.log(delete obj.name) //true



//11
let obbj = { name: "Aman" }
//add properties
obbj.class = 10
console.log(obbj.name)
console.log(obbj['name'])
console.log(obbj['class'])




let data21 = { name: "aMan" }

console.log(delete data21) //false

//obj ko direct delete nhi kar sakte
//property ko delete kar sakte hain



const dd = ["aman", "mishra", "ji"]

//destructuring
const [w] = dd
console.log(w)//aman
//array me dustructre se element  to sabse pahle element ko dega

const [as, aw] = dd
console.log(as, aw) //aman, mishra


//find second and last element from given array
const arr = [1, 2, 3, 4]

const [, b1, , da] = arr
console.log(b1, da)//2,4



const e = ["aman", "mishra", "ji"]

//second element ko access from arraye e
const [, q] = e

//third element
const [, , r] = e
console.log(q)
console.log(r)


//aceess object property without . dot notation
const oobj = { name: "aman", age: "22", skill: "js" }

console.log(oobj['name'])
//dot se
console.log(oobj.name)


//destructure se
//object ke andar first second element specify ki jarurat nhi hoti array ki trah bs key name dallo access ho jayega

const { name, age } = oobj
console.log(name, age)



////////merge 2 object

let d1 = { name: "aman", class: "12" }
let d2 = { email: "aman@123gmail.com", skill: "js" }

d1 = { ...d1, ...d2 }
console.log(d1)//{ name: 'aman', class: '12', email: 'aman@123gmail.com', skill: 'js' }

let d11 = { name: "aman", class: "12" }
let d22 = { city: "lucknow" }
d11 = { d11, ...d22 }

console.log(d11)//{ d11: { name: 'aman', class: '12' }, city: 'lucknow' }

//bcz destruct kiya nhi d11 ko





//ab agar dono object me koi common key ho to key me last ki value aayegi position wahi rahega

let d01 = { name: "aman", class: "12", skill: "html" }
let d02 = { email: "aman@123gmail.com", skill: "js" }
let d001 = { ...d01, ...d02 }
console.log(d001)  //{ name: 'aman', class: '12', skill: 'js', email: 'aman@123gmail.com' }



const name1 = "Aman"
//console.log(name1()) //name1 is not a functions   


//  =>>|| ==or

const bool = false || {} || null

console.log(bool)//object

//jb bhi or opreater ko use karte hai to o pahli true value lekar chalta hain

//sabse pahle false mili count nhi kiya // fir pahuncha {} pr -->object ko hm positive value concede karte

//null tk pahunchega hi nhi

if ({}) {
    console.log("yes")
}


const bool1 = false || 20 || 22

console.log(bool1)//20

//jo bhi positive value pahle milti hai wahi aati ah

const bool11 = 20 || 22 || null

console.log(bool11)//20

//jis position pr positive value milti hain wahin par ruk jati hai

const res = null || false || '';
//''  empty string hmesha false hoti

console.log(res)//empty string aati h

//yahna to positive value hai hi nahi

//true check kar rahe to koi bhi true nhi mili to last ki utha leta ha

const ress = null || false || null; //null aayega

const resi = [] || 0 || true

//[] ko true manate
console.log(resi)


const az = 1 || 2 || null

const bz = 1 && 2
console.log(az, bz)//1,2



console.log(Promise.resolve(5))//promise fullfilled  dega
//resolve ke andar apne aap hi promise hota




console.log(typeof (null))//object
console.log(typeof (undefined))//undefined

console.log(null == undefined)//true
console.log(null === undefined)//false


console.log(0.1 + 0.2 !== 0.3)//t
console.log(0.1 + 0.2 == 0.3)//false
console.log(0.1 + 0.2 === 0.3)//false

console.log(.1 + .2);//0.30000000000000004





// In JavaScript, the logical AND operator (&&) is used to perform a logical conjunction between two expressions. The && operator returns the value of the second operand (b) if the first operand (a) is truthy. Otherwise, it returns the value of the first operand (a).

var v = 1;
var vv = 3;
console.log(v && vv)//3
console.log(v || vv)//1



// When the + operator is used with arrays, JavaScript converts the arrays into strings by implicitly calling the toString() method on each array. The toString() method converts an array into a comma-separated string representation of its elements.


//So, [1, 2].toString() returns the string "1,2", and [3, 4].toString() returns the string "3,4".


//Now, JavaScript performs string concatenation since the + operator is applied to two strings:


console.log([1, 2] + [3, 4]);//1,23,4



for (i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    "Number: " + console.log(i)
}//0,1,2,3,4,6,7,8,9



for (i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    "Number: " + console.log(i)//0,1,2,3,4
}



//how we can make first character of string to capitals letter

function capitalizeFirstLetter(string) {
    console.log(string.charAt(0).toUpperCase() + string.slice(1));//console.log(string.slice(1)) give ==>man
}
capitalizeFirstLetter("aman")//Aman


//current  date
var today = new Date();
console.log(today)//2024-02-07T07:33:12.835Z
var dds = String(today.getDate()).padStart(2, "0");//return only days of month 
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();

//str.padStart(targetLength, padString)


today = mm + "/" + dds + "/" + yyyy;
console.log(today);//02/07/2024
console.log(dds);//07
console.log(today.getDate())//7
console.log(mm);//02
console.log(today.getMonth())//1
console.log(yyyy);//2024
console.log(today.getFullYear())//2024



console.log(eval(12 * 12 + 32))//176

const v = [1, 2, 3];
const ww = v;

v[0] = 100;
console.log(ww[0]);//100


console.log("5" % 5);//0

console.log(5 % 5);///0


const bird = {
    size: 'small',
};

const mouse = {
    name: 'Mickey',
    small: true,
};
console.log(mouse[bird.size])//true



//===>>>>  arr.reduce(callback, initialValue)

//arr.reduce((total,item,index,array)=>{},initialValue)



const arrw = [1, 2, 3, 4, 5]
const add9 = arrw.reduce((acc, col) => acc * col, 5)//600


const arrs = [1, 2, 3, 4, 5, 6]
let total = 0;
for (let i = 0; i < arrs.length; i++) {
    total = total + arrs[i]
}
console.log(total)//21

const arr2 = arrs.reduce((acc, aco) => acc + aco, 0)
console.log(arr2)//21


const add8 = arrw.reduce((acc, col) => acc * col, 0)//0


const add7 = arrw.reduce((acc, col) => acc - col, 0)//-15  ==> 0-15 ==-15
//add7 = 0 - arr[0] - arr[1] - arr[2] - ... - arr[n-1]



const add72 = arrw.reduce((acc, col) => acc + col, 10)//25

const add6 = arrw.reduce((acc, col) => acc / col, 0)//0

const add66 = arrw.reduce((acc, col) => acc / col, 5)//0.0416666666---
console.log(add9)
console.log(add8)
console.log(add7)
console.log(add6)
console.log(add66)
console.log(add72)





const arrd = [1, 2, 3, 4, 5]
arrd.forEach((item, index) => {
    console.log(item, index)
})
//1 0
//2 1
//3 2
//4 3
//5 4
arrd.forEach((item, index) => {
    console.log(index, '=>', item)
})
// 0 => 1
// 1 => 2
// 2 => 3
// 3 => 4
// 4 => 5

function myFun(x, y, ...manyMoreArgs) {
    console.log(manyMoreArgs);
}

myFun(1, 2, 3, 4, 5);// [3, 4, 5]
myFun(1, 2);[]


try {
    setTimeout(() => {
        console.log("try block");
        throw new Error(`An exception is thrown`);
    }, 1000);
} catch (err) {
    console.log("Error: ", err);
}

//this throw errror and not find catch blocks
//due to
//try catch is synchronous and setTime out is asynchronous

setTimeout(() => {
    try {
        console.log("try block");
        throw new Error(`An exception is thrown`);
    } catch (err) {
        console.log("Error: ", err);
    }
}, 1000);
//output
//Error:  Error: An exception is thrown

///This way, the error thrown within the setTimeout callback will be caught and handled by the inner try...catch block within the callback function itself.

try {
    setTimeout(() => {
        try {
            console.log("try block");
        } catch (err) {
            console.log("error block", err)

        }

    }, 1000);
} catch (err) {
    console.log("Error: ", err);
}
//output ===> try block




const promiseOne = new Promise((resolve, reject) => setTimeout(resolve("hello resolye"), 4000));
const promiseTwo = new Promise((resolve, reject) => setTimeout(reject, 4000));

Promise.all([promiseOne, promiseTwo]).then((data) => console.log(data));
// The above promises settled at the same time but one of them resolved and other one rejected. When you use .all method on these promises, the result will be short circuted by throwing an error due to rejection in second promise

//when use .allSettled method then result of both the promises will be returned irrespective of resolved or rejected promise status without throwing any error.
Promise.allSettled([promiseOne, promiseTwo]).then((data) => console.log(data));
// //[
//     { status: 'fulfilled', value: 'hello resolye' },
//     { status: 'rejected', reason: undefined }
//   ]

Promise.race([promiseOne, promiseTwo]).then((data) => console.log(data));//hello resolye



var currentCity = "NewYork";

var changeCurrentCity = function () {
    console.log("Current City:", currentCity);
    var currentCity = "Singapore";
    console.log("Current City:", currentCity);
};

changeCurrentCity();

//why first current city is undefined


//it is looks like  when function will executed

var currentCity = "NewYork";

var changeCurrentCity = function () {
    var currentCity;
    console.log("Current City:", currentCity);
    currentCity = "Singapore";
    console.log("Current City:", currentCity);
};

changeCurrentCity();

// In JavaScript, variables declared with the var keyword are hoisted to the top of their function scope. When the function changeCurrentCity() is executed, the declaration var currentCity; is hoisted to the top of the function scope, but the assignment currentCity = "NewYork"; remains in place. Therefore, inside the function, there are two occurrences of currentCity:


var currentCity = "NewYork";

var changeCurrentCity = function () {
    console.log("Current City:", currentCity); // Uses the outer scope variable
    // var currentCity = "Singapore"; // Remove this line to avoid re-declaration
    currentCity = "Singapore"; // Update the value of the outer scope variable
    console.log("Current City:", currentCity); // Logs the updated value
};

changeCurrentCity();




