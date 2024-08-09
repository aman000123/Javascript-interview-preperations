
//closure ==. is the combination of function bundled together with refrence to its sorrounding state.
//closue are created every time when function is created, at function creation time

//closure me inner function variable acces karta hai outer ke scope ko  even after outer has execute finished 


let a = 10;
function outer() {
    let b = 20;
    function inner() {
        let c = 30
        console.log(a, b, c)
    }
    inner()
}
outer()//10,20,30

//nested function me own scope ke sath  outer scope me  variables access karta h

function outer1() {
    let counter = 0
    function inner1() {
        counter++
        console.log(counter)
    }
    inner1()
}
outer1()//1
outer1()//1
//inner ko counter outer scope me milta inner me check kiya to nhi mila
outer1()//1
outer1()//1

///with every new envocation of  function a temprory memory is establised 
//we have new counter variable initialise 0 then increment
//so 1,1,1,1   always








//inner function ko turant invoce na karke outer me  
//return karake invoke bad me karte ha
//in js  a function return a function
function outer2() {
    let counter = 0
    function inner2() {
        counter++
        console.log(counter)
    }
    return inner2
}

const out = outer2()
out();//1
out();//2
out();//3
out();//4
out();//5

//bcz concept of closure 1,2,3,4,5
//jb ek function returne hota anothr function se to closure bnta hai
//inner2 ko outer2 se return kar rahe hai
//js kewal inner ko hi nhi return karegs
//ye pur inner function ke sath scope bhi return karta hai
//countr=0
//inner function  countr variables ke sath bundled ho gaya
//is condition me function remeber kar lega countr variable ki
//first time me countr 0 the 1 log
//fir counter ko 1 remeber kar liye to =2
//aise hi 3,4,5



/////////////////////////////////////////////////// function currying

//currying does not call function it simly tronsform


