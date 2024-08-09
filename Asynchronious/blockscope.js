
console.log("hello world")

//lexical scope  example
//when we have nested function javacript variable look up start with innermost function
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
//console.log(c, b)//ReferenceError: c is not defined