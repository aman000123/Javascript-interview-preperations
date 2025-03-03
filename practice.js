
let student = {
    fname: "aman",
    lname: "mishra",
    getFullName: function () {
        return `my full name is ${this.fname} and last name is ${this.lname}`
    }
}
console.log(student.getFullName())


function fullName(email, number) {
    return `my full name is ${this.fname} and last name is ${this.lname} my email is ${email},and mobile number is ${number}`
}

const obj2w = { fname: "dr atul", lname: "mishra ji" }

console.log(fullName.call(obj2w, "aman123@gmail.com", 9695555))
//my full name is dr atul and last name is mishra ji my email is aman123@gmail.com,and mobile number is 9695555

console.log(fullName.apply(obj2w, ["aman123@gmail.com", 9695555]))
//my full name is dr atul and last name is mishra ji my email is aman123@gmail.com,and mobile number is 9695555

console.log(fullName.bind(obj2w, "aman123@gmail.com", 9695555)())
//my full name is dr atul and last name is mishra ji my email is aman123@gmail.com,and mobile number is 9695555