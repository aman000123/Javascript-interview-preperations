

//create an array
//1
//const arr = [elem1,elem2,elem3]





//2
const ar = []
ar[0] = 1
ar[1] = 2
console.log(ar)





//3
//using new keyword with constructor
const ar1 = new Array(1, 2, 3, 4)
console.log(ar1)
//new keyword se bna array much more faster run karte h in compare of this [] literals




//when to use which methods
//both methods have own advantageous
//new se create karne par depend karta type of arg pr

const a1 = [1, 2, 3, 4, 5]
const a11 = new Array(11, "22", "hello", 44, 55)//5 length h
console.log(a1.length)//5
console.log(a11.length)//5





//execptions of create array from new keyword


const a21 = new Array(5)
//length 1 honi chahiye but ye size of array man leta hai argument ko
console.log(a21.length)//5
console.log(a21[1])///undefined
console.log(a21[3])///undefined
console.log(a21[2])///undefined






const brr = new Array(3)
console.log('brr', brr)//brr [ <3 empty items> ]





const rrt = new Array(1, 2)
console.log("rrt", rrt)//[1,2]


////////////////////////////////////deffrence between foreach and map in array/////////////



//In JavaScript, forEach and map are both methods used to iterate over arrays, but they differ in their purposes and what they return.

//forEach: This method executes a provided function once for each array element. It doesn't return a new array; instead, it's used for its side effects (like performing actions on each element). It's commonly used when you want to loop through an array and perform operations without the need to create a new array.

//array.forEach(function(currentValue, index, arr), thisValue)

//array.map(function(currentValue, index, arr), thisValue)

// Parameters
// function()	Required.====>>>A function to run for each array element.
// currentValue	Required.=====>The value of the current element.
// index	Optional.=====>>>>The index of the current element.
// arr	Optional.========>>>The array of the current element.
// thisValue	Optional. Default undefined.======>>A value passed to the function as its this value.


const numbers = [1, 2, 3, 4];
numbers.forEach((number, index) => {
    console.log(number, '===>', index); // Just an action, doesn't create a new array

});
// 1 ===> 0
// 2 ===> 1
// 3 ===> 2
// 4 ===> 3

// Example 2: Modifying elements in the array (in-place)

const numbers2 = [1, 2, 3];
numbers2.forEach((number, index, arr) => {
    arr[index] = number * 2; // Modifies the original array
    // console.log(number, '==', index, '==', arr)
    // 1 == 0 == [ 2, 2, 3 ]
    // 2 == 1 == [ 2, 4, 3 ]
    // 3 == 2 == [ 2, 4, 6 ]
});
console.log(numbers2); // Output: [2, 4, 6]


// map: This method creates a new array by calling a provided function on every element in the array and returning the results. It's useful when you want to transform each element of an array and collect the results into a new array.

const numbers1 = [1, 2, 3, 4];
const doubledNumbers = numbers1.map((number, index) => {
    console.log(index)//0,1,2,3
    return number * 2; // Returns a new array with each element doubled
});
console.log(doubledNumbers); // Output: [2, 4, 6, 8]




// So, forEach is used when you want to perform an action for each element in an array without creating a new array, while map is used when you want to transform each element and generate a new array with the transformed values.




const names = ["aman", "atul", "arpit", "ranu"]
const return1 = names.forEach(function (months) {
    return months
})
console.log(return1)//undefined

//  when you log return1 to the console, it will display undefined because the forEach function doesn't return anything explicitly. The purpose of forEach is to perform an action on each element of the array, not to generate a new array or return values based on iteration.


const names1 = ["aman", "atul", "arpit", "ranu"]
const return11 = names1.forEach(function (item) {
    console.log(item)
})
console.log(return11)
// aman
// atul
// arpit
// ranu


const names12 = ["aman", "atul", "arpit", "ranu"]
const return112 = names12.map(function (item) {
    return item
})
console.log(return112)//[ 'aman', 'atul', 'arpit', 'ranu' ]

const return111 = names1.map(function (item) {
    console.log(item)
})
console.log(return111)//[ undefined, undefined, undefined, undefined ]





//copy array using spread opreator it allows you to create a new copy of array 

//it avoids refrence sharing and allows to create independent array


const arx = [1, 2, 3, 4]
const copyArx = [...arx]
console.log(copyArx)

const arx1 = arx;
arx1[4] = 12;
console.log(arx1)
console.log(arx)
console.log(copyArx)





















///////////////////////////////////////////////////////////////////////////////////////////////////////
//create object

//using object leterals

const obj = {
    name: "aman",
    class: "12"
}

const object = { name: "aman" }
object.age = 10
console.log(object)//{ name: 'aman', age: 10 }





//using new keywords=== 2 types se

//1-
//built-in object constructor function

const obj1 = new Object()
//now assign values
obj1.fname = 'aman'
obj1.lname = "mishra"
console.log(obj1)//{ fname: 'aman', lname: 'mishra' }



const object = new Object({ name: "aman" })
object.age = 12
console.log(object)//{ name: 'aman', age: 12 }






////2
//user define costruction functions
function Person(fname, lname) {
    this.fname = fname;
    this.lname = lname
    //is Person constructor ko use karke jo instanse object ka bnta hai this usi ko refer karta hai
}

const p = new Person("aman", "mis")
console.log(p)//Person { fname: 'aman', lname: 'mis' }




function Personsx(name, age) {
    this.name = name;
    this.age = age;
    this.salary = 1111;
}


console.log(Personsx)//[Function: Personsx]

const emp = new Personsx("aman", 12, 100)
console.log(emp)//Personsx { name: 'aman', age: 12, salary: 1111 }


const empq = new Personsx("aman", 12, 100)
console.log(empq)////Personsx { name: 'aman', age: 12, salary: 1111 }



function Persona() { }
Persona.prototype.name = "Sudheer";
var object = new Persona();
console.log(object.name)//sudheer


function Person11(fname, lname) {
    this.fname = fname;
    this.lname = lname;
}

Person11.prototype.getName = function () {
    console.log(this.fname + ' ' + this.lname);
};

var p1 = new Person("aman", "mishra");
console.log(p1)//{ fname: 'aman', lname: 'mishra' }
p1.getName()//aman mishra
// console.log(p)

function Personq(fname, lname, age) {
    this.fname = fname;
    this.lname = lname;
    this.age = age
}
Personq.prototype.fullName = function () {
    console.log(`Hello ${this.fname} ${this.lname} how are you and please let me known your age ${this.age}`)
}

const am1 = new Personq("aman", 'mishra', 12)
console.log(am1.fullName())//Hello aman mishra hpw are you and please let me known your age 12





/////////////using    Object.create() methods


//The Object.create() method creates a new object using the prototype of the given object.
//use when we want to create object from other existings object
//this methods used when we want properties from  one objects


const companyObj = { company: 'abc', employee: '12', attendence: '22' }
const employee = Object.create(companyObj, { name: { value: 'aaaa' } })//this obj which has all objects of companyObj
console.log("create", employee)//create {}


const cp = Object.create(companyObj)
cp.employee = 222
cp.company = 'aaaa'
cp.age = 12

console.log(cp)//{ employee: 222, company: 'aaaa', age: 12 }




const companyObjj = { company: 'abc', employee: '12', attendence: '22' }
const employees = Object.create(companyObjj)//this obj which has all objects of companyObj
employees.company = "xyz"
employees.employee = 1234
console.log("create", employees)//create { company: 'xyz', employee: 1234 }



let vehicle = {
    wheels: '4',
    fuelType: 'Gasoline',
    color: 'Green'
}
let carProps = {
    type: {
        value: 'Volkswagen'
    },
    model: {
        value: 'Golf'
    }
}

var car = Object.create(vehicle, carProps);
console.log(car);

//   {type: 'Volkswagen', model: 'Golf'}
// model
// : 
// "Golf"
// type
// : 
// "Volkswagen"
// [[Prototype]]
// : 
// Object
// color
// : 
// "Green"
// fuelType
// : 
// "Gasoline"
// wheels
// : 
// "4"
// [[Prototype]]
// : 
// Object


// How do you create an object with prototype
// The Object.create() method is used to create a new object with the specified prototype object and properties. i.e, It uses an existing object as the prototype of the newly created object. It returns a new object with the specified prototype object and properties




const f = {
    name: "aman",
    getName: function () {
        console.log(this.name)
    }
}

const ff = Object.create(f)
ff.name = "aman mihra"
ff.getName()//aman mihra




//////////////////////////////////////////////////////////////////Object.assign()

//Object.assign()

//this methods used when we want properties from more than one objects
//2,3 object ko combine kar sakte 

const c = { company: 'kia' }
const c11 = { car: 'tata' }
//ne object create using c,c11 objects

const c111 = Object.assign({}, c, c11)
const c1111 = Object.assign({ class: 12 }, c, c11)
//{}me property assign kar sakte
console.log(c111)//{ company: 'kia', car: 'tata' }
console.log(c1111)//{ class: 12, company: 'kia', car: 'tata' }



// It returns the target object which has properties and values copied from the source objects. The syntax would be as below,

// Object.assign(target, ...sources);




const ca = { name: "aman" }

const da = { age: 12, name: "aaa" }

/*
const dd = Object.assign(da, ca)
console.log(dd)//{ age: 12, name: 'aman' }
console.log(ca)//{ name: 'aman' }
console.log(da)//{ age: 12, name: 'aman' }
*/

const ee = Object.assign(ca, da)
console.log(ee)//{ name: 'aaa', age: 12 }
console.log(ca)//{ name: 'aaa', age: 12 }
console.log(da)//{ age: 12, name: 'aaa' }


/////////////////////////////////////////////////////////////////////////////////////////////
//by using class methods Es-6
//like constructor function
//in Es-6 cunstrutor fun replace by classes



class Persons {
    constructor(fname, lname, classes) {
        this.fname = fname;
        this.lname = lname;
        this.classes = classes
    }
}
const per = new Persons("aman", "mishra", "3", "lkklk")
console.log(per)//Persons { fname: 'aman', lname: 'mishra', classes: '3' }







//
function Persons1() { }
Persons1.prototype.name = "Sudheer";
var object = new Persons1();

console.log(object.name)



//template meythods
const na = {}
na.name = "aman"
na.classes = 10;
console.log(na)



//with Object constructors
const ma = new Object()
ma.name = "aman";
ma.classs = "10";
console.log(ma)



//functions cunstructors se
function animals(name, age) {
    this.name = name;
    this.age = age
}

const anim = new animals("dogs", 12)
console.log(anim)




//classes methods se object create
class dogs {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }
}


const dog = new dogs("jermon", 10)
console.log(dog)






//assign methods se
//Object.assign()
//this methods used when we want properties from more than one objects

//2,3 object ko combine kar sakte 

const mm = { fname: "aman", lname: "mishra" }
const mmm = { roolno: "12", address: "sultanpur" }


const mmmm = Object.assign({ father: "ambe" }, mm, mmm)
const mmmm1 = Object.assign(mm, mmm, { father: "ambe" })
console.log(mmmm)//{father: 'ambe',fname: 'aman',lname:'mishra',roolno:'12',address:'sultanpur' }
console.log(mmmm1)


const mmq = { fname: "aman", lname: "mishra" }
const mmmqq = { roolno: "12", address: "sultanpur", fname: "amancc" }

//overwright same key's value 
//but space puran hi rahta hai
const mmmm8 = Object.assign({ father: "ambe" }, mmq, mmmqq)
const mmmm19 = Object.assign(mmq, mmmqq, { father: "ambe" })
console.log(mmmm8)//{father: 'ambe',fname: 'amancc',lname:'mishra',roolno:'12',address:'sultanpur' }
console.log(mmmm19)



//create methods se
const creates = { fname: "aman", lname: "mishra" }
const create1 = Object.create(creates)//creates using as prototype of another object
create1.fname = "aman ji"
create1.lname = "mishra ji"
console.log(create1)//{ fname: 'aman ji', lname: 'mishra ji' }

const user = {
    name: "John",
    printInfo: function () {
        console.log(`My name is ${this.name}.`);
    },
};
const admin = Object.create(user);
admin.name = "Nick"; // Remember that "name" is a property set on "admin" but not on "user" object
admin.printInfo(); // My name is Nick
////////////////////////////


bbb()

function bbb() {
    console.log("hello")
}
bbb()


////

const car = {
    drive: function () {
        console.log(`Driving ${this.color} ${this.brand} car.`);
    }
};

const myCar = Object.create(car, {
    brand: {
        value: 'Tesla'
    },
    color: {
        value: 'red'
    }
});

myCar.drive(); // Output: Driving red Tesla car.
//(myCar.drive()), the this keyword inside the drive method refers to the myCar object.

/*

In this example, we define a car object with a drive method. Then, we create a new object myCar using Object.create() and pass the car object as the prototype. We also provide a propertiesObject with properties brand and color and their respective values. Finally, we invoke the drive method on myCar, which prints a message including the color and brand of the car.

*/




//Object.entreies()methods

//The Object.entries() method returns an array of key-value pairs of an object's enumerable properties.

const objects001 = {
    name: "aman", age: 12, sub: "physics"
}

const entries = Object.entries(objects001)
console.log(entries)//[ [ 'name', 'aman' ], [ 'age', 12 ], [ 'sub', 'physics' ] ]


//However, if we use the entries() method on obj, the output will include key-value pairs where the keys are sorted in ascending order.



// keys are arranged randomly
const objb = { 42: "a", 22: "b", 71: "c" };
// returns key-value pairs arranged
// in ascending order of keys
console.log(Object.entries(objb));
// Output: [ [ '22', 'b' ], [ '42', 'a' ], [ '71', 'c' ] ] 



const strs = "code";
console.log(Object.entries(strs)); // Output: [ [ '0', 'c' ], [ '1', 'o' ], [ '2', 'd' ], [ '3', 'e' ] ]



////////////////////////////////////////////////////////////////////////

//Object.keys()
//The Object.keys() method is a built-in function in JavaScript that allows you to extract the keys of an object and returns them as an array. 


var t = { name: "atul", age: "12", professitons: "medicals" }

//map me key object me milta hai object me key array me milti hai

const tt = Object.keys(t)
console.log(tt)//[ 'name', 'age', 'professitons' ]



// Array objects
const arr = ["A", "B", "C"];
console.log(Object.keys(arr)); // ['0', '1', '2']


// array-like objects
const objm = { 65: "A", 66: "B", 67: "C" };
console.log(Object.keys(objm)); // ['65', '66', '67']


//agr 2 key  same ho to
//ek bar aayegi
const objma = { 65: "A", 65: "B", 67: "C" };
console.log(Object.keys(objma)); // ['65', '67']



// random key ordering
const obj1 = { 42: "a", 22: "b", 71: "c" };
console.log(Object.keys(obj1)); // ['22', '42', '71']


// string => from ES2015+, non objects are coerced to object
const string = "code";
console.log(Object.keys(string)); // [ '0', '1', '2', '3' ]


const str = "code";
console.log(Object.entries(str)); // Output: [ [ '0', 'c' ], [ '1', 'o' ], [ '2', 'd' ], [ '3', 'e' ] ]

const star = "code";
console.log(Object.values(star));//[ 'c', 'o', 'd', 'e' ] 


//The Object.values() method's behavior is similar to Object.entries() method but it returns an array of values instead [key,value] pairs.
const val = { name: "aman", sub: "phy" }
console.log(Object.values(val))//[ 'aman', 'phy' ]



// In JavaScript, the Object.hasOwnProperty() method is used to check if a specific object has a property with a given name. This method returns a boolean value indicating whether the object itself (not its prototype chain) contains the specified property.

const jb = { name: "aman", age: 12, salary: 100000 }
console.log(jb.hasOwnProperty('salary'))//true


const cxs = { name: "aman", classes: 12 }
console.log(JSON.parse(cxs))//error bcz cxs already is object 



///////////change Json to object
const mmz = '{ "fname": "aman", "lname": "mishra" }'
console.log(JSON.parse(mmz))//{ fname: 'aman', lname: 'mishra' }



//////////to change Object into json string format
const d3 = { name: "aman" }
console.log(JSON.stringify(d3))//{"name":"aman"}


const ttb = { name: "aaa", add: "ssss" }
console.log(JSON.stringify(ttb))//{"name":"aaa","add":"ssss"}




const jsonString = '{"name": "aman"}';
const parsedObject = JSON.parse(jsonString);
console.log(parsedObject.name); // This will also print aman


const cx = '{ "name": "aman" }'
const d = JSON.parse(cx)//aman
console.log(d.name)


//how many way we can find key is exist in an object or not 
const am = { names: "aman" }
console.log(am.hasOwnProperty("names"))
console.log(am.names !== undefined)
console.log("names" in am)


//How do you test for an empty object
const x = { name: "aman" }
console.log(Object.entries(x).length === 0)
console.log(Object.values(x).length === 0)
console.log(Object.keys(x).length === 0)