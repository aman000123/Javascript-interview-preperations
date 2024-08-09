
//Rest vs opreators 

//rest parameters = = expect multiples value of array  fir usko array me convert

const demo = [1, 2, 3, 4, 5, 6]
console.log(...demo)//find element number from outside of array  1,2,3,4,5,6


//function define karte time === rest parameter

//spread opreatore = function ko call karte time

function add4(value, ...arguments) {//arguments yahna as a rest parameter hai
    let sum = 0

    for (let i in arguments) {
        sum += arguments[i]
    }
    console.log(sum)
    console.log(value)
}

const a = [10, 20, 30, 40]
add4("Aman", a)//010,20,30,40
add4("Aman", ...a)//100 Aman


//function define karte time === rest parameter

//spread opreatore = function ko call karte time

function add(...arg) { //15---------------------//====>here we use rest operatore ===>>when define a functio
    let sum = 0
    for (let i in arg) {
        sum += arg[i]
    }
    console.log(sum)
}
add(1, 2, 3, 4, 5)//15
const c = [1, 2, 3, 4, 5]
add(...c)//------------------------------------15==>here we use spread opreator use== when call the function