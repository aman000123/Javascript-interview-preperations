

const obj = { name: "aman" }
console.log(obj)

const mapObj = new Map([
    ['name', "pransh"]
])

console.log(mapObj)

const mp = new Map([["fname", "aman"], ["lname", "mishra"]])
console.log(mp)//Map(2) { 'fname' => 'aman', 'lname' => 'mishra' }

//agr ek hi braces hon to map me ====>>>   []
const mpz = new Map(["fname", "aman"])
console.log(mpz)//TypeError: Iterator value fname is not an entry object



//agr object ki key me number assign kare to get karne me error deta hai 
//map me nhi deta

const obj1 = { name: "aman", 10: "an" }
console.log(obj1)
//console.log(obj1.10)=> errors dega
console.log(obj1['10'])//===>an


const mapObj1 = new Map([
    ['name', "pransh"], [10, 'this is key for Map']
])

console.log(mapObj1)
//map me key ko   .get()     se get karte hain
console.log(mapObj1.get(10))









//obj ke andar boolean ko key bnate hain to wo boolean na rhkar key ho jati h

const obj2 = { name: "aman", true: "this is boolean object value" }
console.log(obj2.true)


//map  true ko boolean smjhta hai
const mapObj2 = new Map([
    ['name', "pransh"], [true, 'this is true key for Map']
])

console.log(mapObj2)

console.log(mapObj2.get(true))


//object ke andar kewal string key hi use kar sakte hain

//map me key koi bhi data type ho sakti hai== number,boolean,array,string,array,object

const aq = new Map([["name", "aman"], ["age", 12], [12, "aaaaaa"]])
console.log(aq.keys())//[Map Iterator] { 'name', 'age', 12 }


const b = { name: "qqqq", 12: "aa" }
console.log(Object.keys(b))//[ '12', 'name' ]




//keys ko access karna ho to

//object me loop lagakar milti hai
const obj3 = { name: "aman", true: "this is boolean object value" }

//console.log(obj3.keys())//error not a function
console.log(Object.keys(obj3))




//map me key ko   .keys()== se milti hai
const mapObj3 = new Map([
    ['name', "pransh"], [true, 'this is true key for Map']
])

console.log(mapObj3.keys())//'name',true




//add a new property
const obj4 = { name: "aman", true: "this is boolean object value" }
obj4.city = "lko"
console.log(obj4)









const mapObj4 = new Map([
    ['name', "pransh"], [true, 'this is true key for Map']
])
mapObj4.set('city', 'lko')
mapObj4.set('name', 'aman')
console.log(mapObj4.keys())//'name',true,'city'

//value get karna ho to
console.log(mapObj4.values())//MapIterator [Map Iterator] { 'aman', 'this is true key for Map', 'lko' }


//size get karna ho to

console.log(mapObj4.size)//3

//delete karni ho to

console.log(mapObj4.delete('name'))

console.log(mapObj4.has(true))//true
console.log(mapObj4.has("aba"))//false

//delete ke bad
console.log(mapObj4.size)//2









//loops

const mapObj5 = new Map([
    ['name', "pransh"], ["about", 'gentel man']
])


//parameter me ulta leta hi  pahle parameter value hota 
//dusra key hoti hai
mapObj5.forEach((value, key) => {
    console.log(value)//pransh,gentelman
    console.log(key)//name,about

})



//for of

const mapObj6 = new Map([
    ['name1', "pransh"], ["abouts", 'gentel man']
])

for (x of mapObj6) {
    console.log(x)//key value ka pair dikhta hai
    console.log(x[0])//key milti   ==>  name1,abouts
    console.log(x[1])//value milti ha==>  pransh, gentleman
}





const mapObj7 = new Map([
    ['name1', "pransh"], ["abouts", 'gentel man']
])

for ([key, value] of mapObj7) {
    console.log(key)//key
    console.log(value)//value
}







//key koi bhi datatype ho sakti hai
const mapObj8 = new Map([
    ['fname', "pransh"], ["lname", 'tripathi']
])

mapObj8.set({}, 'inhauna naresh')

mapObj8.set(() => { }, 'Arrow functio')
console.log("empty", mapObj8)//Map(4) {'fname' => 'pransh', 'lname' => 'tripathi', {…} => 'inhauna naresh', ƒ => 'Arrow functio'}

for ([k, v] of mapObj8) {

    console.log("key arr", k, v)//fname,lname,{},()=>{}
}
//key value pair me dete hain

console.log("tyoe of", typeof (mapObj8))//object 












/////////////////////////////////////////////////////////////////////


const ma = new Map([
    ["name", "aman"], ["classs", '12'], ["10", "aa"]
])
console.log(ma)
console.log(ma.get("name"))
console.log(ma.size)
//console.log(ma.set(["age", "12"]))
console.log("keys", ma.keys())//{ 'name', 'classs', '10' }
//map me key object me milta hai object me key array me milti hai
console.log(ma.get("10"))
ma.set("age", "110")
console.log(ma)
console.log(ma.has("name"))


ma.forEach((value, key) => {
    console.log(value, key)
})

for (x of ma) {
    console.log(x[0])
}

console.log(typeof (ma))


const a = (ma) => console.log(ma)
a(39)

const aa = (ma) => ma
a(39)

