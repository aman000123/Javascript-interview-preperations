const demo = {
    name: "aman prototype ",
    greet: function () {
        console.log(this.name)

    }
}

// demo.greet()////aman prototype

const demo1 = Object.create(demo)

demo1.greet()//aman prototype


console.log(Object.hasOwn(demo, "name")); // true
console.log(Object.hasOwn(demo, "greet")); // true

//bcz demo1 ke andar property ko prototype se create kiya gaya demo1 ke andar exist nhi karti
console.log(Object.hasOwn(demo1, "name")); // fasle
console.log(Object.hasOwn(demo1, "greet")); // lfalse