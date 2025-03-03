
///Client side rendering ----------------------------------------------------CSR



//----------Build process

//----------------------------------------4 phase

//1-source code ------===>2-build--------===>3-server--------------===>client

///when npm run build  then i deployed in vercel netlify

//once npm run build after file builds then files are actually stored on server (vercel ,netlify etc)

//then came client (mobile or web browser)



/////Client side rendering ----------------------------------------------------CSR

//all the build phases devide on multiple phsase

//source code phase remains same

//build phase===> where you write the code

//server phase===>when build is done then store the the files

//client phase===>where client is request on web vrowser or mobile



//there are lots of javascript for us let just through every single javascript piecse to the client

//we sent every thing  to  client  and bulid process done how the page is looks like will happen client side as well

//Html   ,Css(big file css) ,Js (multiple module is exist)

//during the build phase they are kept like this above



//after this come --------------------------------------------Server phase


//in server phase html kept seprate ,javascript kept seprate ,css also kept seprate


//after this come --------------------------------------- Client side phase

//when this phase come after server to cleint

//empty html page sent to client side

//after this throw javascript  once js reaches to client

//now javascript jobs to render the web pages  entrire web page will build on client side

//if it requires further javascript it req to javascript if require css it request css to server


//this  are CSR  (core react aproach) every things will happen through javascript will throug javascript on client side itself everthy happen


//since empty html page thrown on client side there  is nothing for search engine to actuall see or visualize that's why most react web page horrible for SEO there is no content .content will generated as  somebody visited the page






// Conclusion
// Yes, in CSR, JavaScript handles the entire rendering process on the client side. The HTML served by the server is mostly empty, and the page content is generated dynamically in the browser. While this approach is efficient for interactive apps, it poses challenges for SEO and initial loading speed.






////======================================SSR server side rendering

//build phase is same as CSR  //html,css js alag alag file


//server phase   rendering  happens in server side instead client side

//web page  sent on web client sent req if client need more web page then client sent req and based on that req  this web page generated and sent to client

//every time client make req and web page is  rendered on the server then that web page is throw on client

//all html+css+js sent to client side in just one go

//client dont need to wait for entire painting or content loading on web page

//now in server higher comppute power compare to somebody is using browser web  we actaully do this much  much faster  comapre to client

//if we do on server  its very very fasr process


//SSR --Its generate file html+ js+ css  on each request 
 
//these are approach of SSR










//-----------------------------------------------SSG Static side generation

//we generate on bild time phase  each page is generated in build time

//page1,page2,page3  generate on build time

//then page1,page2,page3 store  o server after build time

//this means build time  is going to long build time 

//since we know that content is not updating on every minutes as Blog page  we right blog on day bases

//when client make req then we sent this from server to client

//here server has no load all load is on build phase

//as wordpress site



//------------------------ISR intermental static regeneration


//static side se problem thi when every  content update  u probably dont have updation

//build is going to to happen content on every 3rd day when that updated then  it willl updated











//in SAAS type product no need to seo purpose no point to made load on server i canthtrough on client 



//parameter on base of decide which one is good or bad

//Build time

//Dynami content 

//SEO

//render time 

//Content updation