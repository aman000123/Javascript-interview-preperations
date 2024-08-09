


const p = new Promise((resolve, reject) => {

    setTimeout(() => {

        resolve({ name: "a", hobbies: "qq" })

    }, 2000)

})



p.then((d) => {
    console.log(d)
    console.log("promise success")
}).catch(() => {
    console.log("promise failed")
})