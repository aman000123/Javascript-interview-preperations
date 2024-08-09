

//FETCH ==>  is  a feature in node js for web request send 

//befor we use xhr ,XML HTTP request  for requests

//xml ko js framework se use akrne me prblem aa rahi

//ek library aai fetch name se jo xml ka successor hai

//web pr havily depended thi xml http request 

//2022 february me aaya

//fetch is global methods to starts the process of fetching a resource from network and returning promise which is fullfilled once the response is available

//promise se request ki hai to 404 error milta hai to .then/respone ya .catch/reject kisme milega===>  hmesha response me milega bcz wo error nhi hai

//

//fetch me data bhjna hai id,name etc to   

// const headers ={'C ontent-Ttpe':ext/xml}
// fetch('url',{headers})
//body ,methods bhi bhej sakte hain








fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
    return response.json()
    //response ko return kar diya handle ke liye ek aue then    chainab;e
}).then((data) => {
    //  console.log("data in .then", data)

}).catch((err) => {
    console.log("error in fetching", err)
})


var today = new Date();
var dds = String(today.getDate()).padStart(2, "0");
console.log(dds)
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
console.log(mm)
var yyyy = today.getFullYear();

today = mm + "/" + dds + "/" + yyyy;
console.log(today);



let str4 = "     Hello"

console.log(str4.padEnd())
console.log(str4.padStart())