console.log("hello")



///////////////////////////////////////uses of call appply and bind

//jb bhi ek object ke sath function ko attach kaise karna hai taki us function ke feture ko use 
//function ko reuse kar paye   ti call,apply,bind use hota 


//colllege management system

let student = {
    fname: "Aman",
    lname: "mishra",
    age: "22",
    getEmail: function () {
        //yahna this ka mtlb student obj ka refrense
        return `${this.fname}.${this.lname}@email.com`
    }
}

console.log(student.getEmail())




let teacher = {
    fname: "kabeer",
    lname: "sir",
    age: "22",
    getEmail: function () {
        //yahna this ka mtlb student obj ka refrense
        return `${this.fname}.${this.lname}@email.com`
    }
}

console.log(teacher.getEmail())


//getEmail() function ko bar bar declare karna pada hai ek bar student, ek bar teacher ke liye

//ab staff ke liye  ya management ka email get karna hota to bar bar get email function bnana hoga


//ek common function bna kar use karte hai

/*
function getEmails(fname,lname){

    return `${fname}.${lname}@email.com`
   // console.log(`${this.fname}.${this.lname}@email.com`)


}

let students = {
    fname:"Aman",
    lname:"mishra",
    age:"22",
       getEmail:getEmails(this.fname,this.lname)
}

console.log(students.getEmail)

//undefined de raha===>>>undefined.undefined@email.com
*/



function getEmails(data) {
    console.warn(this)

    // return `${fname}.${lname}@email.com`
    // console.log(`${this.fname}.${this.lname}@email.com`)


}

let students = {
    fname: "Aman",
    lname: "mishra",
    age: "22",
    getEmail: getEmails(this)
}

console.log(students.getEmail)



//window object dega

//student ka this tb generate hoga jab students ke andar ek function bnate hai

//abhi this global de raha

//isiliye normal functions bnakar unko reuse nhi kar sakte


////////////////isiliye call apply bind se reuse karte hain//////////////////////

let student1 = {
    fname: "Aman",
    lname: "mishra",
    age: "22",
    getEmail: function () {
        //yahna this ka mtlb student obj ka refrense
        return `${this.fname}.${this.lname}@email.com`
    }
}

console.log(student.getEmail())




let teachera = {
    fname: "kabeer",
    lname: "sir",
    age: "22",

}


//call use karke student ke getemail ko teacher object se attach karte hain

console.log(student1.getEmail.call(teachera))



//ab jab geteamil ko reuse kar pa rahe to isko bahar na nikal len




let student11 = {
    fname: "Aman",
    lname: "mishra",
    age: "22"

}

console.log(student.getEmail())




let teachera1 = {
    fname: "kabeer",
    lname: "sir",
    age: "22"

}

function geteamil() {
    return `${this.fname}.${this.lname}@email.com`
}


//call use karke student ke getemail ko teacher object se attach karte hain

console.log(geteamil.call(teachera1))
//console.log(geteamil.call(student11))

function chooseSublect(sub1, sub2, sub3) {
    console.log(sub1, sub2, sub3)


}

//console.log(chooseSublect.call(teachera1,"Math"))

//techer ne 2/3 sub choose kr liya to

//console.log(chooseSublect.call(teachera1,"Math","English"))

//call ke abdar parameter koi bhi pass kar sakte hain aray, object,boolean

//appply ke andar array hi pass karte ha


//baut sare parameter ko array me pass kar te

//apply second parameter ko as a array me leta hain


console.log(chooseSublect.apply(teachera1, ["Math", "English", "Art"]))


///////////////////////////bind()

//ye thoda alag kam karta 

console.warn(geteamil.bind(teachera1))

//ye function ko bna kar rekh deta hai ye call nhi karta 

//mano hm api call kar rahe to return karte to chrome me api jo 1 mb data hai 

//to wo data pada hota hai memeory me

//funcion ko ek bar bind karke rakhte hai

//kbhi bhi use kar lete hai

//jb jarurat ho to call karte hai bind kar dete hai bs

let binds = geteamil.bind(teachera1)

console.warn(binds)

//ab jb use karna ho to 

console.warn(binds())



console.log(geteamil.call(teachera1))


////////////////////////



const employee = { fname: "aman", lname: "mishra" };

const greeting = (g1, g2) => {
    console.log(g1 + "," + this.fname + "," + this.lname + "," + g2)
}

greeting.call(employee, "hello", "what")//hello,undefined,undefined,what

//In the above example, attempting to use call with an arrow function results in a TypeError because the this value of the arrow function is fixed and cannot be changed.


//No, the call and apply methods in JavaScript do not work with arrow functions. Arrow functions do not have their own this value and cannot be bound using the call or apply methods.


//const employee = { fname: "aman", lname: "mishra" };

// function greeting(g1, g2) {
//     console.log(g1 + "," + this.fname + "," + this.lname + "," + g2)
// }

// greeting.call(employee, "hello", "what")



