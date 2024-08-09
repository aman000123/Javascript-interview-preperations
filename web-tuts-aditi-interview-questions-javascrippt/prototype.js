

//protype is just an object which has attached each and every methods==> object , function ,array etc

// in JavaScript, a prototype is an internal property that every object has. It's a mechanism by which objects inherit properties and methods from other objects.


//in javascript prototypes are a way of defining and sharing behaviour between objects.Every object in javascript has a prototype which is another object that the first object inherit properties and methods from


//prototypes =====>  prototypes are the mechanism by which javascript objects inherit feature from one other




const myObject = {
    city: "Madrid",
    greet() {
        console.log(`Greetings from ${this.city}`);
    },
};

myObject.greet(); // Greetings from Madrid

//   This is an object with one data property, city, and one method, greet(). If you type the object's name followed by a period into the console, like myObject., then the console will pop up a list of all the properties available to this object.



// __defineGetter__
// __defineSetter__
// __lookupGetter__
// __lookupSetter__
// __proto__
// city
// constructor
// greet
// hasOwnProperty
// isPrototypeOf
// propertyIsEnumerable
// toLocaleString
// toString
//valueOf


// What are these extra properties, and where do they come from?

// Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype.




// The standard way to access an object's prototype is the Object.getPrototypeOf() method.

console.log(Object.getPrototypeOf(myObject))

// When you try to access a property of an object: if the property can't be found in the object itself, the prototype is searched for the property. If the property still can't be found, then the prototype's prototype is searched, and so on until either the property is found, or the end of the chain is reached, in which case undefined is returned.


//javascript ke by default kai prototype hote hai

//jb bhi hm khud ka array, obj, function bnate hai to javascript usme kuch hidden property add kar deti ahi
//wahi prototype hai



//const arr = [1,2,3]  =>  Array.prototype===arr.__proto__

//Array.prototype===arr.__proto__


//arr.__proto__  iska bhi apna khud ka prototype hoga

//jb bhi hm array bnate hai to it has its prototye which   is   =>>>>> Array.prototype


//Array.prototype  object ke pass bhi prototype hota hai


//Object.prototype  ==  object.__proto__

//object.__proto__.__proto   ===>>> null



//ek func  function bnaya hai


//Function.prototype=== func.__proto__

//func.__proto__.__prototype == Object.prptotype

//func aage chalkar object prototype ke brabar ho gaya

// isiliye  every things in js object

//chahe array bnaye ya function bnaye ya object bnaye

//yah sab kahi na kahin prototyep chain me object ke roop me ends hote ha

//this is whole prototypechain is

//yah null pr end hota hai






//prototype is just an object which has attached each and every methods==> object , function ,array etc


//object isliye kaha ki --- evrythings in javascripts are objects=== prototype array ,string me sabhi me use



//kore javascript me inheritence prototype se hi hota hai

//es-6 me class se hota



//javascipt bahut sari property ko prototype me bna leti hai

//jb jarurat ho tbhi load ho faltu me browser ko heavy na kare


//javascript bhut sare inbuilt property use karti hai


//hm aise property bna sakte hai

//jaise hi hm koi object bnaye to console me by default property mil jaye


//har object ke sath me agr hme property add karni ho to
//kuch extra property 


//object jo datatype hai uske sath hi prototype me assign kardete

//prototype me function string etc ko assign kar sakte hain

Object.prototype.myAppData = "my prototype"
Object.prototype.myData = function () {
    return "custom function"
}


//ab niche jo object bna hai usse get kar sakte hain is prototypes ko
//student.myData() se ==> "custom function"  output mitlt

//string ke sath use karte


String.prototype.otherData = "this is my testing prototype string"

//browser me 
//let a ="aman"
//a.otherData ===>  enter karne pr==  this is my testing prototype string  milte ha
//prototype ke karan


String.prototype.customLength = function () {
    return this.length + 2
}
//student obj me name string hai
//student.name.customLength    se ye output milta hai
//student.name.customLength()  == 6  aman=4; +2 kiya ha 4+2=6




//in built property ko bhi change kar sakte hai

//student.name.bold()==>'<b>aman</b>'

//in built property ko bhi change nhi karna chahiye bcz pure projects pr effects hogs


//isliye khud ki custom prototype bna lo but inbuilt change nhi karte

//String.prototype.bold  => change nhi karte

//bydefault property ko override nhi karni chahiye



let studentt = {
    name: "aman",
    lname: "mishra",
    getFullName: function () {
        return this.name + " " + this.lname
    }
}

//console.log(student.getFullName())//aman mishra

//browser ke console me student dale to pura object deta hai bcz yah memory me yad ho gaya browser ko


let teacherr = {
    name: "k d",
    lname: "pandey",
    getFullName: function () {
        return this.name + " " + this.lname
    }
}



console.log(studentt.getFullName())
console.log(teacherr.getFullName())




//dono objects me getFullName()  repeat ho raha hai
//isko common jgh rakhkar use karte hai

//but jo this laga hai means usi object ka name hi uthayega 
//object se getFullName() function ko alag kar dene par
//this milega hi nhi








let sstudent = {
    name: "aman",
    lname: "mishra",
    birth: 2000,
    getAge: function () {
        let age = new Date().getFullYear() - this.birth
        return age
    },
    getFullName: function () {
        return this.name + " " + this.lname
    }
}


let tteacher = {
    name: "k d",
    lname: "pandey",
    birth: 1980,
    getFullName: function () {
        return this.name + " " + this.lname
    },
    getAge: function () {
        let age = new Date().getFullYear() - this.birth
        return age
    }
}



console.log(sstudent.getAge())
console.log(tteacher.getAge())



//code kai bar duplicate ho raha repeat ho raha hi

//iska solution prototype hai

//dono function ko alag alag kar lete hai


let users = {
    getAge: function () {
        let age = new Date().getFullYear() - this.birth
        return age
    },
    getFullName: function () {
        return this.name + " " + this.lname
    }

}

let student = {
    name: "aman",
    lname: "mishra",
    birth: 2000,

}


let teacher = {
    name: "k d",
    lname: "pandey",
    birth: 1980,

}

//user function ko protype me assign kar diya
teacher.__proto__ = users;
student.__proto__ = users




//prototype me assign karne se ekdam se load nhi hota jb jarurat hoti hai tb load hoga


//prototype me assign karne se direct function nhi load hoga prototype me chala jata hai


//browser me student dalne pr function getAge() getFullNmae()  nhi milta hai prototype me jata hai



//student.getAge()  karte hain to mil jata 

//prototyoe me chala jata hia

console.log(student)  //aise karne se getAge(), getFulllNmae() function student ke prototype me chala gaya
console.log(teacher.getAge())











//bina prototype bhi use karte hai

//direct assign karte hai



let users1 = {
    getAge: function () {
        let age = new Date().getFullYear() - this.birth
        return age
    },
    getFullName: function () {
        return this.name + " " + this.lname
    }

}


//object me hi assign kar dete hai function ko

let student1 = {
    name: "aman",
    lname: "mishra",
    birth: 2000,
    getAge: users1.getAge

    //jb property ko direct assign karte hai to iska alg hi effect hota hai

    //function turant hi load ho jata ha  browser console me student likha to turant hi getAge() property mil jatai hai


    //// directle assign se===> student1 ki sari ki sari property load ho jati ha



    //prototype me assign karne se ekdam se load nhi hota jb jarurat hoti hai tb load hoga

    //isse project slow ho jata hi
}


let teacher1 = {
    name: "k d",
    lname: "pandey",
    birth: 1980,
    getAge: users1.getAge

}


// teacher1.__proto__ = users;
// student1.__proto__ = users


console.log(student1.getAge(), student1.__proto__)
console.log(teacher1.getAge())




////////////////////////////////////////////////////////////////////////////////////////////////////
//directly assign karne pr sara ka sara data ek sath load ho gaya browsers me

//jb prototype me assign kar diya tojb need hogi tb load hoga




/////////////////////////////////////////////////////////////////////////setting a prototype

// There are various ways of setting an object's prototype in JavaScript, and here we'll describe two: Object.create() and constructors.


const demo = {
    name: "aman prototype ",
    greet: function () {
        console.log(this.name)

    }
}

// demo.greet()////aman prototype

const demo1 = Object.create(demo)

demo1.greet()//aman prototype


// Here we create an object demo, which has a greet() method and name property. We then use Object.create() to create a new object with demo as its prototype. Now we can call greet() on the new object, and the prototype provides its implementation.



// Using a constructor


// In JavaScript, all functions have a property named prototype. When you call a function as a constructor, this property is set as the prototype of the newly constructed object (by convention, in the property named __proto__).


// So if we set the prototype of a constructor, we can ensure that all objects created with that constructor are given that prototype:


function Person(name) {
    this.name = name;

}

const personPrototype = {
    greet() {
        console.log(`hello, my name is ${this.name}!`);
    },
};


//now assign this methods to person constructor

Object.assign(Person.prototype, personPrototype);


const reuben = new Person("Reuben");
reuben.greet(); // hello, my name is Reuben!


console.log(reuben)
//personPrototype methods ab person ke prototype me chala gaya console me

// Person {name: 'Reuben'}
// name
// : 
// "Reuben"
// [[Prototype]]
// : 
// Object
// greet
// : 
// ƒ greet()====> yahna aa gaya personPrototype methods 
// constructor
// : 
// ƒ Person(name)
// [[Prototype]]
// : 
// Object


// The objects we create using the Person constructor above have two properties:

// a name property, which is set in the constructor, so it appears directly on Person objects
// a greet() method, which is set in the prototype.


// Properties that are defined directly in the object, like name here, are called own properties, and you can check whether a property is an own property using the static Object.hasOwn() method:

const irma = new Person("Irma");

console.log(Object.hasOwn(irma, "name")); // true
console.log(Object.hasOwn(irma, "greet")); // false

// The Object.hasOwn() static method returns true if the specified object has the indicated property as its own property. If the property is inherited, or does not exist, the method returns false.


function Persona(name) {
    this.name = name,
        this.greet = function () {
            console.log("Hello, my name is " + this.name);
        };


}
const irmaa = new Persona("Irma");
console.log(Object.hasOwn(irmaa, "name")); // true
console.log(Object.hasOwn(irmaa, "greet")); // true


const demoo = {
    name: "aman prototype ",
    greet: function () {
        console.log(this.name)

    }
}

// demo.greet()////aman prototype

const demo11 = Object.create(demoo)

demo11.greet()//aman prototype


console.log(Object.hasOwn(demoo, "name")); // true
console.log(Object.hasOwn(demoo, "greet")); // true

//bcz demo1 ke andar property ko prototype se create kiya gaya demo1 ke andar exist nhi karti
console.log(Object.hasOwn(demo11, "name")); // fasle
console.log(Object.hasOwn(demo11, "greet")); // lfalse