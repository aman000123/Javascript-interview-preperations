
///Javascript strings questions

let str = "Hello how are you";

//is str ko ek array ke andar convert karen

//pui str ko ek array me convert

console.log(str.split())




//har ek character ko ek array me convert 

console.log(str.split(''))

console.log([...str])


//space ke behalf pr changes

// [ 'Hello', 'how', 'are', 'you' ]

console.log(str.split(' '))

//space me koi character dalen

// [ 'Hello how ', 're you' ]

//a gayab hoga isi ke base pr devide kar rahe hain

console.log(str.split('a'))

//replace character

console.log(str.replace('h', 'w0'))

//dono h ko replace karna ho to H,h

console.log(str.replace(/H/gi, '9'))


//get substring from this string

//last ke 3 char ko hta do


//kahna se starrt,kahna pr khatm

console.log(str.substring(6, 10))

//remove first character



//kithe char hai total ginna to hai nhi

console.log(str.substring(1, str.length))




//remove last character

console.log(str.substring(0, str.length - 1))



//remove string before specific character

console.log(str.split('o'))

//o ke pahle ke sare character mile bad ke hat jayen

let temp = str.split('o')
console.log(temp[0])


//o ke bad wale chahiye to

console.log(temp[0])




//revers string

//str ko direct reverse nhi karte pahle split() se array me bdalte hain

//array bn gaya ab to isse reverse kar sakte 

//string ko array me convert .join()

let str2 = str.split("").reverse().join("");

console.log(str2)



let str3 = "     Hello      "

console.log(str3.trim())


let str4 = "     Hello"

console.log(str4.padEnd())




let strr = "Aman"
let strrr = "Mishra"
console.log(strr.concat(strrr))



const st = "JavaScript is a very absurd programming language.";

// from 9th to last element till end
console.log(st.slice(-9)); // 'language.'

// from 9th to last element to 2nd to last element
console.log(st.slice(-9, -1)); // 'language'