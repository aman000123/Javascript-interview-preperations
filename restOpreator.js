

//Rest opreator or Rest parameters

//ye functions ke sath use hota hai

//parameter ko rest parameter bnate hai

//rest parameter ki held se functions me any numbers of arg pass kar sakte hai

//rest parameter denoted by (...) 3 dots


//rest paremeter ke andar arguments me data array like store hota hai


//rest parameter== is a imperove way to handle function parameter , allowing us to more easily handle various input as parameter in function


//rest parameter == allows us to infinite numbers of arguments as an array store in rest parameter



//rest parameter ko parameter me sabse last me dena hota hai na start me na middle me


//arguments keyword ko arrow function me use nhi karte but rest parameter ko use karte hai array me


function add(a, b) {
    return (a + b)
}

console.log(add(1, 2)) //if we pass 2 arg then its ok

//but if we pass 2 se jyada to 

console.log(add(1, 2, 3)) //3  
// 3rd arg ko discard kar diya


console.log(add(1, 2, 3, 4))//3,4 ko discard kar diya lekin error show nhi kiya 
//2 arg se jyada ho to use discard kar deta jai



//agr hme nhi pata ki kitne number ka sum karna ho to

function add1(...arguments) {//arguments yahna as a rest parameter hai
    let sum = 0

    for (let i in arguments) { //arguments = is array  like of object  == arg array ke roop me store ho jata hia
        sum += arguments[i]
    }
    console.log(sum)
}

add1(1, 2, 3, 4, 5, 6)//21

add1(1, 2, 3, 4, 5, 6, 7)//28     kitne bhi arg pass kar sakte hai


//if pass string in arguments  then print unexpected=== concatinate karta hai

add1("aman", 1, 2, 3, 4, 5, 6)//0aman123456


function add2() {
    console.log(arguments)
}

add2(2, 3, 4, 5)///[Arguments] { '0': 2, '1': 3, '2': 4, '3': 5 }//data array form me index wise store





//string , sum ko alag alag

function add4(value, ...arguments) {//arguments yahna as a rest parameter hai
    let sum = 0

    for (let i in arguments) { //arguments = is array  like of object  == arg array ke roop me store ho jata hia
        console.log(typeof(arguments))
        sum += arguments[i]
    }
    console.log(sum)//100
    console.log(value)//aman
}
add4("Aman", 10, 20, 30, 40)


function myFun(x, y, ...manyMoreArgs) {
    console.log(manyMoreArgs);
}

myFun(1, 2, 3, 4, 5);// [3, 4, 5]
myFun(1, 2);[]