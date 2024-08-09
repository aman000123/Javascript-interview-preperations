

//variable ko pahle declare kar sakte hai fir use bhi kar sakte
/*
console.log(xx)//undefined==>declare to kiya but value nhi dali
var xx;
 
console.log(b)  //not defined==> declare hi nhi kiya hai
*/


console.log([[[[]]]]) //output me nested array bna kar deta hain
//[ [ [ [] ] ] ]



//sabse andar array ke andar 0 element 

///sabse bahar wale ke pas 3 element array ha 
//fir uske andar ke passs 2 array
//fir uske ek
//sabse andar array ke andar 0 element 


//operating system ka name kaise find karenge



//navigate.platform==> console me dalne pr  plateform number deta hai


//let for = 100;//nhi chalega 
//for loop hai reserve keyword hai  variable me declare nhi kar sakte




/*
//hosting concept
///var ko use kar lo bad me declare 

function fruit(){
    console.log(name);
    console.log(price)


var name ="aman"//undefined
let price = 132//error not initilaise after use
}

fruit()
*/



/*
for(var i=0;i<3;i++){
    setTimeout(()=>console.log(i),1)
}
//3,3,3
//pahle for loop chala==> to var  tha==> global bn gaye
//var global scope hai
//pahle global var 0,tha fir1,fir 2,3,bna jaise hi 3 global variable bna
//uske bad settime chala usne i print kiya tb tk i==3 ho chuka tha
//time interval sabse baad me chalat hi jb current code execute ho jata hai






// The for loop runs, and it initializes i to 0.

// It schedules three setTimeout functions with a 1-millisecond delay. Each setTimeout callback is an arrow function that logs the value of i.

// The loop continues, incrementing i to 1. Then, it schedules the second setTimeout.

// The loop continues again, incrementing i to 2. Then, it schedules the third setTimeout.

// At this point, the loop has finished, and i is equal to 3.

// After the loop is completed, the JavaScript event loop will start executing the scheduled setTimeout callbacks.



// The variable i is declared using var. In JavaScript, var has function-level scope but not block-level scope. So, when the setTimeout callbacks execute, they all refer to the same variable i in the same scope. When the callbacks execute after the loop finishes, they print the current value of i, which will be 3 for all three callbacks because i reaches 3 at the end of the loop.



for(let i=0;i<3;i++){
    setTimeout(()=>console.log(i),1)
}
//0,1,2
//let block level hai
///settime ke andar he bar alag alag i gaya 


//if print 1,2,3,4,5  using var then



//create this types

function loopData() {
    function close(x) {
        setTimeout(() => {
            console.log(x)
        }, x * 1000)
    }

    for (var i = 1; i <= 5; i++) {
        close(i)

    }
}

loopData()





//What happens is when you declare a variable using var it creates a single address space. So, by the time your setTimeout expires , variable tries to read value from that particular memory location and it has already become 6. 
But in case of declaring a variable using let, it creates different addresses spaces so everytime your loop gets executes it points to different memory location that was created. Hence, you get your desired output. 


// the variable i is declared using let. Unlike var, let has block-level scope, meaning a new i is created for each iteration of the loop. In this case, each setTimeout callback creates a closure over its own distinct i value. Consequently, when these callbacks execute, they print 0, 1, and 2 respectively, as each callback maintains a reference to the specific i value for its iteration.




// The reason for this different behavior is that let has block scope, which means that each iteration of the loop has its own lexical environment for the variable i. The arrow functions inside the setTimeout callbacks capture the value of i correctly for each iteration because of this block scope. Therefore, when the setTimeout callbacks execute, they log the values 0, 1, and 2 as intended.




// So, the main difference lies in the scoping behavior of var and let. The var version prints 3 three times because it uses the same i variable with function-level scope, while the let version prints 0, 1, and 2 due to block-level scoped i variables for each iteration of the loop.






*/



console.warn(+true)//1
//+ lagane ke bad number me bdal jata hai
console.log(typeof +true)//number


console.log(!"aman")//false==> string ka opposite false 
console.log(typeof ("aman"))//string


let data = "size"
const bird = {
    size: "small"
}

console.log(bird.size)//small
console.log(bird["size"])//small
console.log(bird[data])//small====bird["small"]==bcz data ki value small se assign hua hai
console.log(bird.data)//undefined


let c = {
    name: "aman"
}

let d;
d = c;//refrence copy ya locations copy
c.name = "atul"
console.log(d.name)
//c me change to d me bhi hoga bcz dono ki locations same hi hai



/*
var x;
var x=10;
console.log(x)
//x ko kai bar declare jar sakte 

var x;
let x=10;
console.log(x)//x can not be redclared
*/



let a = 3;//type number
let b = new Number(3)//object bnta hai constructor ke sath use

console.log(typeof (b))//object

console.log(a == b)//true
console.log(a === b)//false

let name;
nmae = {}
console.log(name)//undefined



function fruit() {
    console.log("mango")
}

fruit.name = "apple"//name add karne se koi error nhi

fruit()//mango

function sum(a, b) {
    return a + b
}
console.log(sum(1, "3"))//13==>  a=number , b== string
//number ko string se add to number bhi string bnta hai

let num = 0
console.log(num++)//0
console.log(num)//1
//post incrment console print ke bad hoga
//1 ho gai
//pre increment 1+1==2
console.log(++num)//2
console.log(num)//2


let x = 1;
let y = x++;
console.log(x);//2
console.log(y)//1

function getAge(...arg) {
    console.log(typeof arg)
}
//spread opreator ka type of object hota hai
//array ka type object
getAge(21)//object


//multiline string
var str =
    'his is a\n' +
    'very lengthy\n' +
    'sentence!';

console.log(str)


// his is a
// very lengthy
// sentence!

var strs =
    `This is a 
very lengthy 
sentence!`;
console.log(strs)

// This is a
// very lengthy
// sentence!


// Some of the important things to learn are:

// 1️⃣ Interpretation: JavaScript is an interpreted language, meaning that code is executed line by line, rather than being compiled before runtime. This dynamic behavior allows for flexibility and quick development cycles.

// 2️⃣ Execution Contexts: JavaScript organizes code into execution contexts, including the global context and function contexts. Understanding how these contexts are created, scoped, and executed is vital for grasping variable lifecycles and scoping rules.

// 3️⃣ Event Loop & Asynchronous Behavior: JavaScript's event-driven nature is what makes it so powerful. The event loop manages the execution order of events and callbacks, ensuring responsiveness and non-blocking behavior. Comprehending this mechanism aids in writing efficient asynchronous code.

// 4️⃣ Hoisting: JavaScript hoists variable and function declarations to the top of their respective scopes during the creation phase. Knowing this behavior helps prevent unexpected bugs and enhances code readability.

// 5️⃣ Closures: Closures occur when a function retains access to variables from its outer scope, even after that scope has finished executing. Mastering closures unlocks the ability to create powerful and reusable code patterns.

// 🌟 Remember, it's not just about knowing the syntax, but comprehending how JavaScript behaves differently and uncovering its hidden mechanisms. 🌟