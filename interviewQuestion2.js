

//do imogi compare ho rahe 

//imoji ke piche unicode hote hain wo unicode compare hote hai

//jb bhi do same emoji compare to true  hi hoga == ||| === dono me



//JSON.parse()

//json ko javascript value me convert karta hain


/*
let name = "aman"
function getName(){
    console.log(name)
    let name="Aman1"
}

getName()//ReferenceError: Cannot access 'name' before initialization
//let,const ko declare ke pahle use nhi kar sakte hai

*/




let name1 = "aman"
function getName1() {
    console.log(name1)

}
getName1()//aman

//let block scope ke bahar access nhi hoga
//bahar hoga to function ke andar access ho sakta hai

console.log(`${(x => x)('i love')}to programm`)
//$ template liteeral 
console.log((x => x)('I love'))



//remove element from array
const arrr = [1, 2, 3, 4, 5]
console.log(...arrr)//1,2,3,4,5

const arrr2 = [1, 2, 3, 4, 5]
console.log([...arrr])//[ 1, 2, 3, 4, 5 ]


function sumValues(x, y, z) {
    return x + y + z;
}

console.log(sumValues(1, 2, 3))//6

console.log(sumValues(...[1, 2, 3]))//6


const gg = [1, 2, 3]
console.log(sumValues(...gg))//6


//console.log(sumValues([...[1,2,3]]))//wrong==...[1,2,3] right
//bcz spread opreater se array se element bhr hota ha
//...[1,2,3]==1,2,3
//which should pass in arg
//console.log(sumValues([1,2,3]))

//([...[1,2,3]]))  this give array====> [1,2,3]


const name3 = "hello aman ";

console.log(!typeof name3 === 'object')//false
console.log(!typeof name3 === 'string')//false

//actually me pahle ! fir ye === opreation execute
//opreation left to right chalta hain

//false === 'object'==>to 
console.log(typeof name3)
//typeof name=== string



console.log(!typeof name3)
//string me ! ye laga to false bn gaya 

//false ke bad string ya object se compare karenge to false hi aayega



console.log(!typeof name3 === false)//true




const namee = "subscribe";
const age = 21
console.log(isNaN(namee))
console.log(isNaN(age))


//modify this object
let person = { name: "aman" }
Object.seal(person)
console.log(person)



let personn = { name: "aman" }
Object.seal(personn)
//personn = "hello"

//console.log(personn)//hello

//object ko modify se means iske andar ki value ko kaise mdify kar sakte hai
personn.age = "11"
console.log(personn)



//seal lagane se object ke andar aur value keys ko add nhi kar sakte
//present ko hi modify kar sakte

let personn = { name: "aman" }
Object.seal(personn)
personn.name = "aman ji"
console.log(personn)//{ name: 'aman ji' }




let persoon = { name: "aman" }
Object.seal(persoon)
persoon.name = "anil"
console.log(persoon)





//remove first data in array
let data = [1, 2, 3, 4]
console.log(data.shift())

//remove last
let dataa = [1, 2, 3, 4]
console.log(dataa.pop())



//check a value is even odd or even in programtically
let a = 30;
console.log(a % 2)// complete devide to even



let da = {
    name: "pransh"
}

delete da.name
console.log(da)//empty object {}



//convert daa below to boolean==> false value

let daa = "true"
console.log(typeof !daa)//boolean=>false
// ! lagane se ulta karta string ka ulta unstring to ho nahi sakti 
//isliye usko false kar deta hai




//convert data to boolean==> true value
//convert true string value to boolean string value

let daa1 = "true"
console.log(!!daa1)




//map() and forEach()  deffrent
//map()=> hamesha kuch na kuch return karta hai  as array return karta hai element me callback jo diya hota hai usko apply karke

//forEach()=>kuch return nhi karta hai element return karta hai without array ke


// So, forEach is used when you want to perform an action for each element in an array without creating a new array, while map is used when you want to transform each element and generate a new array with the transformed values.


let data3 = ["aman", "mishra", "developer"]
delete data3[1]
console.log(data3)//[ 'aman', <1 empty item>, 'developer' ]
console.log(data3.length) //3

//jb bhi value delete kar dete hain to bilkul blank space bn jata

//null undefined kuch na kuch space leta hai



//array merge
let arr = [1, 2, 3];
let arr1 = [4, 5, 6];
console.log([...arr, ...arr1])



//if one value is same in both array 

let arr2 = [1, 2, 3, 4];
let arr3 = [4, 5, 6];
console.log([...arr2, ...arr3])//[1,2,3,4,4,5,6]
//dono value rakhta hai array
//jbki ek object ke andar kabhi bhi same name ki do keys nhi ho sakti hai
//array ke andar to key hoti nhi to same value hoti hain



let c = 3 ** 3
console.log(c)//3*3*3





let d = 3 * 3
console.log(d)//9



/*
let e=2
setTimeout(()=>{
   console.log(e)

},0)
e=100

//100 ayega output me
//bcz jbi time interval wale function ko use karte hai to
//ek stack bnta hai js me 
//sara code pahle execute karega 
//pahele e=2 execute kara fir
//e=100
*/



let f = 2;
let F = 30
console.log(F)//30


let A10 = "aaaa";
//let 10A=== not possible

//js me varible name start kabhi bhi number nhi ho sakta

let x = "like"
let y = `like`
console.log(x === y)//true
// '' == ""=``



let b = 1
let u = 2
console.log(--u === b)//true
//jb bhi decrement pre hoga to==>--2 = 1




let r = 1;
let rr = 1;
let rrr = 2;
console.log(r === rr === --rrr)//false
//do ko compare to true

//yahna coompare ==>  left to righ chalte

//r, rr compare to true

//console.log(true===-rrr)  true ko 1 me compare kar deta ha

//r,rr true ho chuka hai

//ab rrr se compare kar rahe

//true === 1

console.log(true === 1)//ye bnta h

// Now, we are comparing true (a boolean value) with 1 (an integer). JavaScript performs type coercion in this comparison, and in this case, true is coerced to 1.


//ek hi compare to true
console.log(r === rr)



console.log(3 * 3)//9
console.log(3 ** 3)//27
//console.log(3***3)==error



console.log(xx)
var xx;


let myName = "aman    "

//console.log(myName.length)==============>ye property prototype se hi access ho rahi
console.log(myName.truelength)//undefined
console.log(myName.trim().length)//4