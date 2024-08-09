const obj = new Object()
obj.name = "aman"
obj.classs = "11"
console.log(obj)



// const a ={name:"aman"}
// const b = Object.create(a,{value:'amamam'})
// console.log(b)


const car = { name: "kia" }
const model = { mod: "0003" }
const t = Object.assign({ color: "blue" }, car, model)
console.log(t)


// test()
// function test(){
//     console.log("hello")
// }


console.log(typeof (null))
console.log(typeof (undefined))


// (() => {
//     console.log("hello")
// })()



// const person = {
//     name: "aman mishra",
//     sayMyNames: function () {
//         console.log(`my name is ${this.name}`)
//     }
// }
// //to envoke function  dot .
// person['sayMyNames()']




const Arr = [1, 1, 2, 3, 4, 4, 3, 2, 1, 1, 1, 1, 1];
console.log(...new Set(Arr))
console.log(typeof (Arr))


const arr = [1, 2, 3, 4]

const [, b, , d] = arr
console.log(b, d)



const str = "aman"

console.log(typeof !str)


/*


const employee = { fname: "aman", lname: "mishra" };

function greeting(g1, g2) {
    console.log(g1 + "," + this.fname + "," + this.lname + "," + g2)
}

greeting.apply(employee, ["hello", "what"])

var e = greeting.bind(employee)
e("he", "lo")


let arrayIntegers = [1, 2, 3, 4, 5];
let arrayIntegers1 = arrayIntegers.slice(2);
console.log(arrayIntegers1)
*/

const a = []
a[0] = 10;
a[1] = 12;
console.log(a)



const bb = new Array(10, 11, 12, 13)
bb.length = 10
console.log(bb)



const tt = new Array(5)
console.log(tt.length)
console.log(tt[2])


const ma = new Map([
    ["name", "aman"], ["classs", '12'], ["10", "aa"]
])
console.log(ma)
console.log(ma.get("name"))
console.log(ma.size)
//console.log(ma.set(["age", "12"]))
console.log(ma.keys())
console.log(ma.get("10"))
ma.set("age", "110")
console.log(ma)
console.log(ma.has("name"))


ma.forEach((value, key) => {
    console.log(value, key)
})

for (x of ma) {
    console.log(x[0])
}

console.log(typeof (ma))







////////call apply binds
const practice = { fname: "atul", lname: "mishra" }
function greets(g11, g22) {
    console.log(
        g11 + "," + this.fname + "," + this.lname + "," + g22
    )
}

greets.call(practice, "hello", "joony")
greets.apply(practice, ["hello", "joony"])
const n = greets.bind(practice)
n("hello", "jonnny")


console.log(NaN == NaN)
console.log(NaN === NaN)

let i = 0;

function timedCount() {
    i = i + 1;
    postMessage(i);
    setTimeout("timedCount()", 500);
}

timedCount();