
//var global scope its is not declare inside any function 
//it will bw acess any where


var a = 2//declare
console.log(a)

test()
function test() {
    a = 4//reassign value not declare
    console.log(a)//4
}

console.log(a)
//4 naki 2
//bcz declaration  of variables is globals not inside function
//only reassigning a value in scope/function


/*
var a = 2//declare
console.log(a)

test()
function test() {
   var a = 4//declare
    console.log(a)//4
}

console.log(a)//2
//jb declare karte  function scope me to to wo function scope me hoga
//jb test() execute hoga to a variable distroy ho jayega  to global variables bchta hai isiliye a=2
*/





//////////////////////////////////////////////////////usinglet keyword/////////////////////////////////////
tests()

function tests() {
    let b = 3//locals variables
    console.log(b)
}
//console.log(b)//reference error b is not defined


/*
function test1() {
    //creat a block

    {
        let c = 10
        console.log(c)
        //c kewal isi block me rahega
    }
    console.log(c)//reference error c is not defined
}

test1()
*/





//////////////////redclares of var and let

var aa = 11
console.log(aa)
test2()
function test2() {
    var aa = 22//redclare
    console.log(aa)
}
console.log(aa)//11


//redclare with let

/*
test22()
function test22() {
    let aaa = 22
    console.log(aaa)

    let aaa = 11//redclare not allowed
    console.log(aaa)///error
}
console.log(aaa)//11
*/
test22()
function test22() {
    let aaa = 22
    console.log(aaa)//22

    aaa = 11//reassign allowed
    console.log(aaa)//11
}



//global variables are added global object as peoperties//////////////////////////

// var==>global  hota hai
// var key ==>store hota window object ke andar

var c = 2
//console.log(window.c)//2

//let==> locals
// let key ==>store nhi hota window object ke andar
//window object ke andar let key nhi  
let cc = 2
//console.log(window.cc)//undefined



///////////////////////////hosting/////////////////////////////////////////////////////////////






//////////////const key==> can not redclare,not reassign
//only modified

const aq = [1, 2, 3]

console.log(aq.push(22))




//jaise hi kisi variables ko declare karte hai to automatic undefined se assign ho jata hain

//var a;
//let a;
//isiliye const ke sath initialise karte 
//const a;
//const variables is assigning undefined value in backend
//isliye initialize karna hota
//const a=3;
//initialise,declare sath me karte hain


test222()
function test222() {
    var s = 6
    console.log(s)

}
//console.log(s)//s is not defined





var num = 15;
function outer() {
    var num = 10;
    function inner() {
        num++//yahna 10+1 =11 hoga
        var num = 5//but yahna fir declare reassign hai so yahi lega 
        console.log("num =", num)

    }
    inner()
}
outer()



function fnccc() {
    {
        let k = 10
        var j = 19
    }

    console.log(j)//var function scope hota 19
    //console.log(k)//not defined  block scope
}
//console.log(j)//refrence error

fnccc()



//var ko blockscope bnate hai/////////////////////////////////////////////
/*
function exam() {
    {
        (function exam1() {

            let u = 12
            var v = 13
        })()//self invoking== jaise hi declare hua turant hi invoke ho gaya
    }
    console.log(v)//v is not defined
    console.log(u)
}

exam()
*/



/*
let a = true;
setTimeout(() => {
    a = false
}, 2000)

while (a) {
    console.log("aman")
}
*/
//infinte bar print karta hai bcz 2 sec wait kaeega nhi a hmesh true hi raha loop ma