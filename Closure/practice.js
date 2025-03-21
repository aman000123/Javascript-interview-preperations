// // function test00() {
// //     let a = 1000

// //     return function inner12() {
// //         return a
// //     }

// // }

// // console.log("return a function", test00())////return a function [Function: inner12]

// // const t = test00()
// // console.dir(t)
// // console.log(t())


// function test0() {
//     let a = 105

//     return function inner1() {
//         return a
//     }

// }

// console.dir(test0())
// const a = test0()
// console.dir("dir=>" + a)





function testin() {
    let a = 300
    let fun = function inner49() {
        a++
        return a++
    }
    return fun
}
let innin = testin()
console.log("iii", innin())
console.log(innin())
console.log(innin())
console.log(innin())

//here wheb testin function is executing end then after innni func can access also valraible