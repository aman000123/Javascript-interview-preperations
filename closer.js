
console.log("Hello developer")

/////////////////////////////////Closure in Js



/*


console.dir()==> se hm kisi bhi function ka scope dekh sakte hai console me

Lexical Scope:==========>>>>>>>>>>>>>>>Lexical scope, also known as static scope, is a concept that deals with the visibility and accessibility of variables and functions in your code based on where they are defined in the source code. In JavaScript, lexical scope is determined at the time of writing the code and remains fixed during runtime. This means that a variable or function can access variables from its parent or containing scope.


Lexical scope is determined by the location of a variable's declaration within the source code and remains fixed throughout the execution of a program.


In lexical scope:

Variables declared in an outer scope (containing function or global scope) can be accessed by inner functions.


Inner functions "close over" or capture variables from their containing outer functions, preserving their values even after the outer function has finished executing.


The scope of a variable is determined by its location in the source code, and it remains fixed during the execution of the program.


So, in a functional scope (inside a function), you can access variables defined in the outer scope due to lexical scoping rules




In JavaScript, a closure is a function that has access to its own scope, the outer (enclosing) function's scope, and the global scope. This allows a function to "remember" and access variables and parameters from its containing scope even after that containing scope has executed. Closures are a powerful and important concept in JavaScript, and they are commonly used in various programming scenarios.

*/


//A closure is the combination of a function and the lexical environment within which that function was declared



// In JavaScript, closures are created every time a function is created, at function creation time.


//closure == functions own scope + its lexical scope

//closure ==>> a fuction with lexical scope is known as closure

//closure==>> lexical scope pr depend karta hai

//closure enables to access outer function scope from within  inner function even after outer function has finished executions



//the inner function creates a closure over outer function variable by refrence not by value so any changes to variables also be considered




//lexical scope ==>  

let data = 10;

function test() {
    console.log("10", data)
}

test()

//ab data print hoga 10 

//bahar ki value function ke andar access ho sakti hai


let data11 = 10;

function test1() {
    let a = 100

    console.log(data11)
}

test1()
//console.log("value of a",a)


//ek function ke andar ki koi value ko function ke bahar eaccess nhi kar sakte

//yahi lexical scope hai

//koi bhi outer value function ke andar access ho sakti hai 

//lekin andar ki value bahar access nhi ho sakti 

// ye lexical scope bn jata hai uska

//outer value can access inside==1

//inner not accessible outside==2

// 1 and 2 dono mile jaye to lexical scope bnta hai



//ab function ke andar ek function bnate hai




function test11() {
    let a = 100

    function inner() {
        console.log("teat11", a)
    }
    inner()
}

test11()//100


//yahna 100 access ho gaya 

function test0() {
    let a = 105

    function inner1() {
        return a
    }
    console.log("inner1", inner1())
}

test0()//105

/// lekin return kare to

//js me allow hai ki function ko return kar sakte


function test00() {
    let a = 1000

    return function inner12() {
        return a
    }

}

console.log("return a function", test00())////return a function [Function: inner12]

//output me ek function milta

// return a+function ƒ inner12() {
//     return a
// }

let in1 = test00()

//tset00() function call kar liya to inner12() ka lexical scope khatm ho gay

console.log("in1", in1())//1000

//a return hota hai console me 

//directly a ko call karene to 


//console.log(a)

//a nhi acees hoga lexical scope nhi ha bhr ho gaya

//andar ka function  inner12()  ne bhr ki a=1000 value ko yaad rakh liya

//ki a  var ki value 1000 hai

console.dir(in1)

//ab iske scope ko open karege console me to ye btata hi ki koi a name ka variable hai   

//yhi closer hai

///////////////////////////////////////////////////////////////////////////////////////////////////////

////////using return to the function with in function

function outerFunction() {
    const outerVariable = "I am in the outer function";

    return function innerFunction() {
        const innerVariable = "I am in the inner function";
        console.log(outerVariable); // Accessing outerVariable from the outer scope

    }
}
const t = outerFunction();
t()//I am in the outer function


//without return direct invoke
function outerFunction() {
    const outerVariable = "I am in the outer function";

    function innerFunction() {
        const innerVariable = "I am in the inner function";
        console.log(outerVariable); // Accessing outerVariable from the outer scope

    }
    innerFunction()
}
outerFunction();//I am in the outer function



/*

If you use console.log(innerFunction()) within the outerFunction, you would be trying to log the result of calling innerFunction() immediately, which will print undefined to the console. This is because innerFunction() doesn't explicitly return a value, so it implicitly returns undefined. Here's what happens:



function outerFunction() {
    const outerVariable = "I am in the outer function";

    function innerFunction() {
        const innerVariable = "I am in the inner function";
        console.log(outerVariable); // Accessing outerVariable from the outer scope
    }
    
    console.log(innerFunction()); // This line logs the result of innerFunction(), which is undefined
}

outerFunction();//output 2 aayega 

I am in the outer function
undefined


*/





/*
function test(){
    let a = 100

   return function inner(){
       return a
    }
    
}

let in1 = test()

console.log(in1())

yahna pr inner func ne yad kar liya a ki value ko 

test()  call kiya to test ka scope khatm ho gaya

inner bch gaya inner ne a ko yad rakh

yahi closure hai


inner( )  ke liye a  lexical scope ki value hai


bahr ki value ek lexical scope ki value funcion ke sath mil jaye ==>>> wahi closure hai

hmesa uske scope me bni rahti

*/



// Closures:===================>// A closure is a JavaScript function that "closes over" its surrounding lexical scope, preserving access to variables even after that outer function has finished executing. In other words, a closure "remembers" its lexical scope, allowing it to reference variables from that scope even if the parent function has completed.




////function ke andar ek aur function return karate

//multi closure

//ek closure tesst  ke pass hai ek iinner ke pass hai

function outer() {

    let outValue = 100

    return function test9() {
        let a = 300

        return function inner9() {
            return a * outValue
        }

    }
}
//ek closure tesst  ke pass hai ek iinner ke pass hai



//outer se test return test se inner return

let test9 = outer()

let inner9 = test9()

//console.log("qqq", innerr())

console.dir(inner9)
console.dir(test9()())///30000
console.dir(inner9())///30000


//ye btatta hai console me ki


//scope me jane pr btata hai ki


// [[Scopes]]
// : 
// Scopes[4]
// 0
// : 
// Closure (test9) {a: 300}
// 1
// : 
// Closure (outer) {outValue: 100}
// 2
// : 
// Script {data: 10, data11: 10, in1: ƒ, test9: ƒ, inner9: ƒ}



//outer funccton ke andar closure h uska 100

//inner ka closure 300 hai

//yahna bh inner wali function ne value ko yad rakah




///ab bahar func kp remove kar dete hai



function test89() {
    let a = 300

    return function inner89() {
        return a * a
    }

}


let inn = test89()

console.log(inn())//9000
//console.dir(inn)

//ab yahna ek hi closure hai 300



function test09() {
    let a = 300

    let fun = function inner09() {
        return a * a
    }
    a = 20;

    return fun

}
//bad ki value execute hogi 

//a=20 hai  so 20*20 =400

let inn00 = test09()
console.log(inn00())


//explanation

// The inner function inner09 is created within the scope of test09 where a is initially set to 300. Then, a is reassigned to 20 before the fun function is returned.

// However, the key here is that the inner function inner09 still maintains a reference to the variable a within its closure. When the inner function is executed (console.log(inn00())), it doesn’t capture the value of a at the time it's defined (a = 300), but rather captures the reference to a itself.



function test09k() {
    let a = 300

    return function inner09k() {
        return a * a
    }
    a = 20;

}

let inn00k = test09k()

console.log(inn00k())//9000



// It looks like you're working with JavaScript closures and trying to understand how they behave in different scenarios. In the first case, the returned function retains a reference to the variable a from its outer scope, even though a is reassigned before the return. So, when the inner function is executed, it uses the initial value of a (which is 300), resulting in 300 * 300 = 90000.




function test49() {
    let a = 300
    let fun = function inner49() {
        a = 10;
        return a * a
    }
    a = 20;
    return fun
}
//bad ki value execute hogi 

//a=10== 100 milega

let inn056 = test49()

console.log(inn056())


// The function test49 initializes a to 300, defines an inner function inner49, and then reassigns a to 20 before returning the fun function.

// Inside the inner49 function, a is reassigned to 10 (a = 10). When inn056() is called (which is equivalent to executing the inner49 function), it uses the updated value of a, which is 10 due to the reassignment within the function.

// Therefore, inner49 returns 10 * 10 = 100, reflecting the value of a as modified within its scope, resulting in 100 being logged to the console


///////increment


function testinb() {
    let a = 300
    let fun = function inner49() {
        let a = 0;
        a++
        return a
        // The result is not 301 because you mix up the global and local counter
        //result is 1 ,1,1,1
    }
    return fun
}

let inninv = testinb()
console.log(inninv())
console.log(inninv())
console.log(inninv())
console.log(inninv())

// However, every time you invoke testinb(), it returns a new instance of the inner49 function. Each of these instances has its own separate local scope where the variable a starts at 0 and is then incremented to 1 every time inner49 is executed.

// Therefore, irrespective of how many times you call inninv(), it creates a new instance of inner49 with its own separate local scope where a is initialized to 0 and incremented to 1. As a result, every call to inninv() returns 1 because each call is essentially creating a fresh instance of the inner49 function with its own independent a variable set to 0 and then incremented to 1.



function testin() {
    let a = 300
    let fun = function inner49() {
        a++//300 // 2nd bar==>302 ho gaya
        //is line pr 301 ho chuka/                  /// 2 nd bar yahna 303 ho gaya
        return a++//post increment hota hai is a++  line ke bad  a==302 hoga to  301 return / 2nd bar me 303 return 
        //fir let a =302 ho gaya/// fir let a=304 ho gay post ki wajah se
        //a++==>302 tha hi
        //return time tk increase ho gaya so 303
        //fir return a++ ke bad 304 ho gaya
        //to let a=304 ho gaya aise hi sab hoga
    }
    return fun
}
let innin = testin()
console.log("iii", innin())//301
console.log(innin())
console.log(innin())
console.log(innin())

//har bar increase hokar value aaygi bcz pahle wali value memorize ho gai thi
//  301
//  closer.js:332 ==303
//  closer.js:333== 305
//  closer.js:334 ==307

function add(x) {
    return function add1(y) {
        return x + y
    }
}

let add5 = add(5)
let add10 = add5(10)


//add5  add10 dono closure form hai

//add5's lexical environment, x is 5, while in the lexical environment for add10, x is 10.

// add5 and add10 both form closures. They share the same function body definition, but store different lexical environments. 

//In add5's lexical environment, x is 5,

// while in the lexical environment for add10, x is 10.


console.log(add10)

/*
// global scope
const e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      // outer functions scope
      return function (d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4)); // 20
*/

let fname = "aman";
let lname = "mishra"

function caiculateAge() {

    let birthYear = 2000;
    let currentYear = new Date().getFullYear();

    let age = currentYear - birthYear;
    console.log(`hello ${fname} ${lname} yor current age is ${age}`);

    if (birthYear >= 2000) {
        let msg1 = "you are very old";
        var msg2 = "you are awesome"

    }

    function isFullAge() {
        if (age >= 18) {
            //console.log("hello", msg1)//ReferenceError: msg1 is not defined
            //but msg 2 access bcz declare with var and its functional scope not block

            //lexical scope kewal functional scope ko access karta hain block scope ko nhi

            console.log("hello ", msg2)
        }
    }
    isFullAge()
}
console.log(caiculateAge())


const e = 10;


function sum1(a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return a + b + c + d + e
            }
        }
    }
}




console.log(sum1(2)(3)(4)(5))


const f = 10;

function add22(a) {
    return function add33(b) {
        return function add44(c) {
            return function add55(d) {
                return a + b + c + d + f
            }
        }
    }
}

const add01 = add22(10);
const ad = add01(12)
const a2 = ad(13);
const a4 = a2(14)
console.log(a4)







var numv = 15;
function outerr() {
    var numv = 10;
    function innerr() {
        numv++//yahna 10+1 =11 hoga
        var numv = 5//but yahna fir declare reassign hai so yahi lega 
        console.log("num =", numv)

    }
    innerr()
}
outerr()



////////////////////////////////////currying/////////////////////////////////////////////
function summ(a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return console.log(a + b + c + d)
            }
        }
    }
}

//access using currying metods
summ(11)(12)(13)(14)



const sum16 = (a) => (b) => (c) => (d) => (a + b + c + d)
const q = sum16(1)(2)(3)(4)
console.log(q)


const sumq = (a) => (b) => (c) => (d) => console.log((a + b + c + d))
sumq(1)(2)(3)(4)



//closure == functions own scope + its lexical scope

//closure ==>> a fuction with lexical scope is known as closure

//closure==>> lexical scope pr depend karta hai

//closure enables to access outer function scope from within  inner function even after outer function has finished executions




/*
function out(){
    let text="foo"
    function inn(){
        console.log(text)
    }
    text="bar"
    return inn
}

const v = out()
v()//bar


//the inn function creates a closure over out function variable by refrence not by value so any changes to variables also be considered

////

function out() {
    let text = "foo"
    function inn() {
        console.log(text)
    }
    text = "bar"
    inn()
}

out()//bar
*/
