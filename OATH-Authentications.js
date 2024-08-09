

//OAUT ==> OPEN STandard Authorizations

//third party ko apna kuch data ko facebook google account ke login ke through access provide kara rahe ho

//authentication and authorization deffrents concept

//authentication ==> user same wahi hai ki nhi access ke liye

//authorization ==>permission dena hota h third application ko  login ki koi need


//user 3 type  admin, guest,user ==> guest ke pass kuch previlage hoti hai admin authoriza karega

//correct user ho ki nhi us resource ko access karne ke liye


//OAUT==>
//har website ko use ke liye alag account bnate hai

// user  a website ko feature ko use karna chahta hai wo website login ko bolegi fir wahi pblm fir login fir account tbhi access  fir verify karna

//isi se bchne ke liye login panel me  [[[[sign in with facebook sign in with google]]]]]]]]

//facebook google pr login ke bad us website ko access kar sakte h

//yahi authorization third party web site ko allow karte hai facebook etc ke through


//website a == consumer


//sign in with facebook me facebook ko ===>>> authentication server

//new window open hoti hai allow ko bolti h

//consumer  facebook se request token leta ha secret key

//facebook authentication server se allow karte hai consumenr ko ki ye sari details le le

// mai nya account nhi bnana chahat

//resource server aur authentication server facebook hi hogi

//allow pr click karte hi ye aceess token milta ha facebook ka usko consumenr website  ko dete hai

//consumer us token ke base pr req bhej kar sara data le leta hai

//sabse  phle website se req facebook pr jati hai fb pr login karte hai fir fb ko btna hata ki consume rke sath kya kya data share krna chahta hun

//fir us hisab se token bnata hai

//fir token consume rke pas jata ha fir consumer fir fb pr bhejka rdata le saktah

//req token consumer kisi qaur website pr bhi bhej sakta hai

//oath 1.0 expire me feature nhi tha

//outh 2.0 release hua 2012 me isme timing feature ko bhi addd kiya hai




////OATH == is designed to allowed third party application to access protected resources on behalf of a user

//it is more secure

//oath1 is complex  and defecult to implement

//2012 oath 2.0  ==isused by facebook,google,twitter,amazon its safe and secure way to led website to access your data without share password


//oath  2.0==>is  way to talk two website without sharing user password

//game play ke liye google account me login karna ki need hai
//game ko password nhi dena ha

//to google account me login karte hai google website ko speciale code==Access token deta hai

//game website uses that token to talk to google and get data

//access token is a key jiske base pr game website talk karta hia google se user ke behalf pr

//it is not get access to game website full access to users account

//access token authorization server ke dwara generate hota ha

//user ke permission ke bad authorization server access token ko game application ko deta hai

//tb game website us token ka use server se request bnanae ke liye use

//access token ka use authorization header se hota hai jo har req  server ke sath add

//type token bearer token

//acess token kuch hi time ke liye valid hota hai

//expire ke bad application ko dubara authorization server se token lena hoga