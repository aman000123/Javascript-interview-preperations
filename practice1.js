function add(x) {
    return function add1(y) {
        console.log(x, y)
        return x + y
    }
}

let add5 = add(5)
let add10 = add5(10)

console.log(add10)