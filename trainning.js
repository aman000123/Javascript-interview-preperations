function test00() {
    let a = 1000

    return function inner12() {
        return a
    }

}

console.log("return a function", test00())////return a function [Function: inner12]
