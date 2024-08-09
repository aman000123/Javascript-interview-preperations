

const students = [
    { id: "100", name: "Daish", age: "20", hobby: "cricket" },
    { id: "2", name: "Adeeb2", age: "20", hobby: "hockey" },
    { id: "3", name: "Daish3", age: "20", hobby: "cricket" },
    { id: "4", name: "Daish4", age: "20", hobby: "cricket" },
    { id: "5", name: "Daish5", age: "20", hobby: "cricket" },
    { id: "6", name: "Daish6", age: "20", hobby: "cricket" }
]


// for (const i in students) {
//     console.log(students[i].id, "=>", students[i].name, "/", students[i].age, "/", students[i].hobby)
// }


students.map((item) => {
    console.log(item.name)
})
