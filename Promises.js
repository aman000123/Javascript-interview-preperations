

//Promises

//promise is types of object  representing the eventual completion

//object ka instance bnane ke kiye new keyword

//so promise bnanae ke liye new keyword  ka use karte hain

//promise object represents the eventual completion or failure of an asynchronus operation and its resulting value

//promise turant load nhi hoti

//promise completes in future

//kafi things access turant nhi ex-file aceess, database request,network request,password encrypted


//3 state ==
//1-pending ==> initial state, 
//2-fulfilled==> operation complete succesfully
// 3-rejected==>opreation rejected


//promise ko consume se pahle bnate hai


//create promise
//Promise() take call back



const promise1 = new Promise(function (resolve, reject) {

    setTimeout(() => {
        console.log("Async task 1 completes")
        resolve()//conect then and promise
    }, 1000)
})

//consume promise
promise1.then(function () {
    console.log("promise consumed 1")
}
)

//pahle task complete then resolve hokar consume
// Async task1 completes
// promise consumed






//not need to store promise in variables

new Promise(function (resolve, reject) {

    setTimeout(() => {
        console.log("Async task2 completes")
        resolve()//conect then and promise
    }, 1000)

    //.then ke andar function mita h

}).then(function () {
    console.log("promise consumed 2")
}
)
// Async task2 completes
// promise consumed 2








//resolve connected with .then
//reject connected with.catch


//create promise
const promise3 = new Promise((resolve, reject) => {

    setTimeout(() => {
        console.log("Async task completes 3")
        resolve({ user: "aman", email: "aman@123gmail.com", age: 12 })//resolve me data bhi bhej sakte
    }, 1000)
})



// now we can  consume promise
promise3.then(function (data) {
    //access data of resolves
    //resolve ke andar jo bhi data hota .then() ke parameter me mil jata h  name matter nhi chahe data ya oters

    console.log(data)
}
)


// Async task completes 3
// { user: 'aman', email: 'aman@123gmail.com', age: 12 }






//tackles error
let p = new Promise((resolve, reject) => {

    setTimeout(() => {

        let error = false

        if (!error) {
            resolve({ username: "aman", age: 12, sub: "js" })
        }
        else {
            reject('Somethings went wrong')
        }
    }, 3000)
})

p.then((data) => {
    console.log(data)
    console.log(data.username)
}).catch((err) => {
    console.log("err", err)
})

// { username: 'aman', age: 12, sub: 'js' }
// aman




/*

const promise4 = new Promise((resolve, reject) => {

    setTimeout(() => {
        let error = true

        if (!error) {
            resolve({ username: 'atul', email: 'atul@123gmail.com', age: 12 })
        }
        else {

            reject('Some things went wrong')
        }

    }, 2000)
})

const userName = promise4.then((user) => {

    console.log(user)
    return user.username
}).catch()

console.log(userName)//gives error try catch block

//this catch like below
catch((err)=>{
    console.log(err)
})

*/

//.then ek br aur chainning


const promise4 = new Promise((resolve, reject) => {

    setTimeout(() => {
        let error = true

        if (!error) {
            resolve({ username: 'atul', email: 'atul@123gmail.com', age: 12 })
        }
        else {

            reject('Some things went wrong')
        }

    }, 3000)
})

const userName = promise4.then((user) => {
    console.log(user)
    return user.username
    //yahna pr username ko returen kiya ha as a promise
}).then((userNames) => {//isme only username hi access hoga bcz return kiya
    console.log(userNames)
}).catch((err) => {
    console.log(err)
}).finally(() => {
    console.log("promise4 is either resolve or reject")
})//finally()= e btata hai ki erro hoga ya resolve  resolve ya reject kuch bhi ho chalta h

console.log(userName)//Some things went wrong

//error = false then atul print hoga







//error handle with grace fully


const promise5 = new Promise((resolve, reject) => {

    setTimeout(() => {
        let error = true

        if (!error) {
            resolve({ username: 'javascript', email: 'js@123gmail.com', age: 12 })
        }
        else {

            reject('Some things went wrong in javascript')
        }

    }, 3000)


});


//promise hamesha  .then .catch se hi nhi 
//async await  se bhi kar sakte ha
//async-await  ==>  wait karta ha


async function consumesPromise5() {
    try {

        //promise5  ko promise5()  aise consume nhi bcz promise object hai
        const res = await promise5
        console.log("awit res" + res)
    }
    catch (err) {
        console.log("err" + err)
    }

}


consumesPromise5()//err Some things went wrong in javascript





//async promise return karta ha
/*
async function getAllUser() {

    
    const res = await fetch('https://jsonplaceholder.typicode.com/users')

    const data = res.json()

    console.log("get all user" + data)

}
getAllUser()//get all user[object Promise]

*/


//use with try catch

async function getAllUser() {


    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await res.json() //yahan pr kuch time lgat h

        console.log("get all user", data)

    }
    catch (err) {
        console.log("error in fetch" + err)
    }
}
getAllUser()//abhi sare user sabse upr a rah bcz upr time interval chal rah







//ab sabse last me access hoga
async function getAllUser1() {

    setTimeout(async () => {


        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/users')

            const data = await res.json() //yahan pr kuch time lgat h

            console.log("get all user", data)

        }
        catch (err) {
            console.log("error in fetch" + err)
        }

    }, 5000);
}
getAllUser1()






//same this function writen in .then and .catch

fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
    return response.json()
    //response ko return kar diya handle ke liye ek aue then    chainab;e
}).then((data) => {
    console.log("data in .then", data)

}).catch((err) => {
    console.log("error in fetching", err)
})



//isse data sabse pahle aata pure file ke code ka
//fetch concept


const promise = new Promise(
    (resolve) => {
        setTimeout(() => {
            resolve("I'm a Promise!");
        }, 5000);
    },
    (reject) => { }
);
//resolve ke andar jo bhi hai wo .then me aceess ho jata hai
promise.then((value) => console.log(value));





const promiseOne = new Promise((resolve, reject) => setTimeout(resolve("hello resolye"), 4000));
const promiseTwo = new Promise((resolve, reject) => setTimeout(reject, 4000));

Promise.all([promiseOne, promiseTwo]).then((data) => console.log(data));
// The above promises settled at the same time but one of them resolved and other one rejected. When you use .all method on these promises, the result will be short circuted by throwing an error due to rejection in second promise

//when use .allSettled method then result of both the promises will be returned irrespective of resolved or rejected promise status without throwing any error.
Promise.allSettled([promiseOne, promiseTwo]).then((data) => console.log(data));
// //[
//     { status: 'fulfilled', value: 'hello resolye' },
//     { status: 'rejected', reason: undefined }
//   ]

Promise.race([promiseOne, promiseTwo]).then((data) => console.log(data));//hello resolye





const work1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise get resolve1")
        //reject("promise rejected1")
    }, 2000
    )

})




const work2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise get resolve 2")
        //reject("promise rejected 2")
    }, 3000
    )

})





const work3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("promise get resolve 3")
        reject("promise rejected 3")
    }, 4000
    )

})




//Promise.all([work1, work2, work3]).then((result) => { console.log(result) }).catch(error => console.log(`Error in promises ${error}`))
// [
//     'promise get resolve1',
//     'promise get resolve 2',
//     'promise get resolve 3'
//   ]


// Promise.race([work1, work2, work3]).then((result) => { console.log(result) }).catch(error => console.log(`Error in promises ${error}`))
//promise get resolve1


//agar work3 me reject karaya jaye
Promise.allSettled([work1, work2, work3]).then((result) => { console.log(result) }).catch(error => console.log(`Error in promises ${error}`))

// [
//     { status: 'fulfilled', value: 'promise get resolve1' },
//     { status: 'fulfilled', value: 'promise get resolve 2' },
//     { status: 'rejected', reason: 'promise rejected 3' }
//   ]