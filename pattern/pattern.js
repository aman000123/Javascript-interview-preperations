

// var j = 5;
// for (var i = 1; i <= 3; i++) {
//     for (var i = 1; i <= 3; i++) {
//         console.log("*")
//     }
//     console.log(`\n`)
// }


for (var i = 1; i <= 4; i++) {

    for (var j = 1; j <= 4; j++) {
        console.log(j)
    }
    console.log("\n");
}


function printStar(r, c) {
    for (var i = 1; i <= r; i++) {
        var str = ""
        for (var j = 1; j <= c; j++) {
            str += j
        }
        console.log(str)
    }
}

printStar(5, 5)


