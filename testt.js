console.log(2 + true)


var a = (1, 2, 3)
console.log(a)

console.log(+"a")

var y = 1,
    x = y = typeof x;
console.log(y)
console.log(x)




// In JavaScript, the logical AND operator (&&) is used to perform a logical conjunction between two expressions. The && operator returns the value of the second operand (b) if the first operand (a) is truthy. Otherwise, it returns the value of the first operand (a).

var a = 1;
var b = 3;
console.log(a && b)
console.log(a || b)


let name = "priya";
function getName() {
    console.log(name);
    var name = "supriya";
}
getName();



const person = { name: "amam" }

Object.seal(person)
person.age = 12;
console.log(person)
person.name = "qqq"
console.log(person)


let data = "true"
console.log(!data)
console.log(typeof (!!data))


function printNumbersArrow(first, second, first) {
    console.log(first, second, first);
};
printNumbersArrow(1, 2, 3);


function arrowFunc() {
    return arguments.length;
}
console.log(arrowFunc(1, 2, 3));



console.log(Math.max());

console.log(Math.max(1, 2, 3));

console.log([1, 2] + [3, 4]);



function MCQ1() {
    const person = {
        name: "Jayesh",
        displayName1: function () {
            console.log("name1", this.name);
        },
        displayName2: () => {
            console.log("name2", this.name);
        },
    };


    person.displayName1();
    person.displayName2();
}

MCQ1()



const red = [1, 2, 3, 4, 5]
const redd = red.reduce((acc, con) => acc + con, 0)
console.log(redd)
console.log(red)

console.log(0 == -0)
console.log(0 === -0)



const id = setTimeout(() => {
    console.log("set titm")
}, 3000)



const ids = setInterval(() => {
    console.log("set titm")
}, 3000)

//clearInterval(id)
clearTimeout(id)
clearInterval(ids)



let c = 5 || 8
console.log(c)

/*
for (i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    "Number: " + console.log(i)
}//012346789


for (i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    "Number: " + console.log(i)//0,1,2,3,4
}
*/

console.log("5" % 5);//0

console.log(5 % 5);///0

//example
const double = x => x * 2
const square = x => x * x

var output1 = double(2);
var output2 = square(output1);
console.log(output2);

var output_final = square(double(2));
console.log(output_final);


const objects1 = {
    name: "aman", age: 12
}
console.log(objects1)
Object.seal(objects1)
delete objects1.name
console.log(objects1)

const xs = [1, 2, 3];
xs[-1] = -5;
console.log(xs)
console.log(xs.indexOf(10000))
console.log(xs[xs.indexOf(10000)]);

const st = [1, 2, 3]
st[4] = 10;
console.log(st)





