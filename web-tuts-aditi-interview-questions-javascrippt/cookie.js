
//cookie store in name value pair


//create cookie
document.cookie = "Aman mishra"//if not name assigh then name column empty

//to modify cookie
document.cookie = "name=pransh"

//get all cookies in console
//can not fetch one single cookie at a time

//fetch all cookies and then modify and parse out and get the cookie
console.log(document.cookie)

//delete a cookie


//to specify a path

//isi path me cookie ko store karega
document.cookie = " test=cookie3; path=/hhhh"


//make a cookie more secure
document.cookie = "Test= cookiess; secure";

document.cookie = "channel= defence expires=Fri Jun 09 2023 08:42:04 GMT+0530"
console.log(new Date())//indian time
console.log(new Date().toUTCString())
