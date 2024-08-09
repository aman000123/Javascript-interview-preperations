
///spread opreators 


//spread opreator use multiple task to acheive

//(...)==> rest parameter  == spread opreator

//array ko expand karne ke liye spread opreators use karte hai



//array== is combination of item  but hota to ek hi element hai but uske item ko spread karna ho to spread opreator use


let arr = [10, 20, 30, 40]
console.log(arr)//Array(4) == [ 10, 20, 30, 40 ]

//ab array ko alag alag spread karna ho to
console.log(...arr)//10 20 30 40

///ab numbers ko alag alag variables me get kar sakte

/*
const [a, b, c, d] = arr
console.log(a)//10
console.log(b)//20
console.log(c)//30
console.log(d)//40

*/


const [a, b, c, d] = [...arr]
console.log(a)//10
console.log(b)//20
console.log(c)//30
console.log(d)//40



//coppy  arrray to single array

const aa = [1, 2, 3]
const bb = [4, 5, 6]

const cc = [...aa, ...bb]
console.log(cc)//[ 1, 2, 3, 4, 5, 6 ]


//old methods
const dd = aa.concat(bb)
console.log(dd)//[ 1, 2, 3, 4, 5, 6 ]



//clone array using spread

//copy ko hi clone khte


const e = [3, 4, 5]
const f = e//e ka refrence f me store ho hgaya
console.log(f)//[3,4,5]
console.log(e == f)//true
console.log(e === f)//true



const g = [1, 2, 3]
const h = g
console.log(g)//[ 1, 2, 3 ]
console.log(h)//[ 1, 2, 3 ]


g.push(10)

console.log(g)//[ 1, 2, 3 ,4]
console.log(h)//[ 1, 2, 3 ,4]

//bcz memorry adddress ko hi bhej tha h ke pass


//b1 me a1 ka refrence nhi bhej raha ab a1 ki value ko b1 me bhej diya

const a1 = [1, 2, 3]
const b1 = [...a1]//b1 me a1 ka refrence nhi bhej raha ab a1 ki value ko b1 me bhej diya
//assign by value not refrece
console.log(a1)///[ 1, 2, 3 ]
console.log(b1)//[ 1, 2, 3 ]

a1.push(20)

console.log(a1)///[ 1, 2, 3 ,20]
console.log(b1)//[ 1, 2, 3 ]


const t = [1, 2, 3]
t.push(12)
console.log(...t)//1 2 3 12
console.log(t)//[1, 2 ,3 ,12]






//using spread opreator multi object store in one object

const obj1 = {
    name: "aman"
}

const obj2 = {
    age: 10
}

const obj3 = { ...obj1, ...obj2 }
console.log(obj3)//{ name: 'aman', age: 10 }


//aray ka kuch part bhi copy kar sakte spread opretors se

const s = [1, 2, 3, 4, 5, 6]

const [s1, s2, ...s3] = s

//.s3 yahna pr rest opretor khlata hai

//remaining
console.log(s1)//1
console.log(s2)//2
console.log(s3)//[3,4,5,6]
console.log(...s3)//3 4 5 6

/*
const [s1, s2, ...s3] = [...s]
console.log(s1)//1
console.log(s2)//2
console.log(s3)//[3,4,5,6]


*/




//copy array using spread opreator it allows you to create a new copy of array 

//it avoids refrence sharing and allows to create independent array


const arx = [1, 2, 3, 4]
const copyArx = [...arx]
console.log(copyArx)//[ 1, 2, 3, 4 ]

const arx1 = arx;
arx1[4] = 12;
console.log(arx1)//[ 1, 2, 3, 4, 12 ]
console.log(arx)//[ 1, 2, 3, 4, 12 ]
console.log(copyArx)//[ 1, 2, 3, 4 ]