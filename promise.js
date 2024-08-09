

const work1 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise get resolve")
        //reject("promise rejected1")
    }, 2000
    )

})




const work2 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise get resolve 2")
        //reject("promise rejected 2")
    }, 3000
    )

})





const work3 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise get resolve 3")
        //reject("promise rejected 3")
    }, 4000
    )

})

/*
work1().then(response => {
    work2().then(response => {
        work3().then(response => {
            console.log("all promise fullfilled")
        }).catch(err => console.log("error in 3"))
    }).catch(err => console.log("error in 2"))

}).catch(err => console.log("error in 2"))
*/

//work1().then(work2).then(work3)


work1().then(work2).then(work3)
    .catch(err => console.log(err))
    .then(res => console.log("all promise completed"))

Promise.race[(work1(), work2(), work3())]






const task1 = new Promise((resolve, reject) => {

    setTimeout(() => {
        console.log("wark 1 is started ----")

        resolve("work is success")

        // reject("work is failed")

    }, 1000)




})


const task2 = new Promise((resolve, reject) => {

    setTimeout(() => {
        console.log("wark 2 is started ----")

        resolve("work is success")

        reject("work is failed")

    }, 2000)




})




const task3 = new Promise((resolve, reject) => {

    setTimeout(() => {

        console.log("wark 3 is started ----")
        resolve("work is success")

        reject("work is failed")

    }, 3000)




})


// text().then(res => { console.log(res) })
//     .catch(error => { console.log(error) })



task1.then(response1 => {
    task2.then(response2 => {
        task3.then(response3 => {
            console.log("all task is completed")
        }).catch(error => { console.log("error in 3", error) })
    }).catch(error => { console.log("error in 2", error) })

}).catch(error => {
    console.log("error in 1", error)
})



//task1().then(task2).then(task3)


const ppps = new Promise(
    (resolve) => {
        setTimeout(() => {
            console.log("promises")
        }, 5000)
    },

    (reject) => {
        setTimeout(() => {
            console.log("promises rejes")
        }, 5000)

    }
)

ppps.then((value) => console.log(value))