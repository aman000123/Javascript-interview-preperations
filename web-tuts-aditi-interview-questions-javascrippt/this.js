

//this keyword  is used in a function refers to the object it belongs to

//it makes a function reuseable by letting you decide the object value

//this value is determined entirely by how a function is called

function sayMyName(name) {
    console.log(`my name is ${name}`)
}
sayMyName("Aman")
sayMyName("Atul")
//function jaise call hua waise hi console hua


//how to determinse of this keyword
//implicit binding
//explicit binding
//new binding
//default binding








//implicit binding
const person = {
    name: "aman mishra",
    sayMyNames: function () {
        console.log(`my name is ${this.name}`)
    }
}
//to envoke function  dot .
person.sayMyNames()//my name is aman mishra

//function call kaise hota hai is par depend karta hai

//jb bhi function dot . se call hota hai to  object jo dot ke left me hota hai ==> sayMyNames  ye hai jise this keyword refrence karta hai

//this.name=== person.name







//explicit binding

const persons = {
    name: "aman dev",

}

function sayMyIntro() {
    console.log(`my name is ${this.name}`)

}

sayMyIntro.call(persons)//call me pahla arg hota hai this keyword ko refrence karta hai
//my name is aman dev



function sayMyIntro(g) {
    console.log(`my name is ${this.name}  ` + g)

}

sayMyIntro.call(persons, "dev")//my name is aman dev 





//new binding

//using constructor function person function constructor function hai

function person1(name) {
    //jb function person invoke hota hai new keyword se to js under the heard empty object bnata ha internally
    //new se invoke to function ke andar  this keyword new empty object ko refer karta hai
    //this is equals = {}
    this.name = name

}

//new keyword se jb function ko envoke karte hain to js new empty object bnata hai jo this ko refrence karta hai 

//jb function person invoke hota hai new keyword se to wo empty object bnata ha internally
const p1 = new person1("pransh")
const p2 = new person1("pransh tiwari")
console.log(p1.name, p2.name)//pransh,pransh tiwari





//default binding
//if none of other rule matchings


//no dot method
//no cal method
//no new key

function myName() {
    console.log(`my name is ${this.name}`)
}

function personns(name) {
    this.name = name
}

myName()//my name is undefined

//if none of three rules define then js  default this keyword ko global scope bnata hai

//this key ko global object bnata hai
//global scope me name ko search kiya nahi mila isliye  undefined


//agr global scope me variable name de to

globalThis.name = "aman0003"
function myNames() {
    console.log(`my name is ${this.name}`)
}

function personns1(name) {
    this.name = name
}

myNames()//my name is aman0003









/// sabse jyad priority  New binding ko
//fir Explicit binding ko
//fir implicit ko
//fir default






//////////////////////////////////////////////////////////////////////


//global = window,browser


//yahna this globals function 

function myFunctions() {
    console.log(this === global);
}

myFunctions()




//obj ke andar ek function liya myobjects ko call kiya

//ab this globa nhi rah gaya

/*

var myobjects={
    myFunction:function(){
        console.log(this === myobjects) //prints true
    }
}

 myobjects.myFunction()

 */





//object decoration same ho but call karte time variables me assign kare to this global ho jayega


var myobjects = {
    myFunction: function () {
        console.log(this === myobjects) //prints false
    }
}

//directly call na karke assign var se call

//agr usi object ko variables me assign kar de to global ho jayega

var myFunction = myobjects.myFunction;

myFunction()


//ab false print hoga



var myobjects = {
    myFunction: function () {
        console.log(this === myobjects) //prints true //yahna myobjects ka refrence hai

        setTimeout(function () {

            console.log(this === myobjects) //prints false  global ho gaya  

            //yahna myobjects ka refrence nahi hai


            console.log(this === global) //prints true


        }, 3000)


    }
}

myobjects.myFunction()




//agr

//object.function()

//call to funcion ke andar this key object ko

//otherwise false

//agr usi object ko variables me assign kar de to global ho jayega lone-50