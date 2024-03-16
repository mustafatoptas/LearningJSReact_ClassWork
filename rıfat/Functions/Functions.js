const divCreate= (id)=>{
  var divElement=document.createElement("div");
  divElement.classList.add("array-div");
  divElement.setAttribute("id",id);
  document.getElementById("div-1flex").appendChild(divElement);
  }
divCreate("arrowFunction");
const add = (a, b) => {
  return a + b;
};
let arrowFunctionDiv = document.getElementById("arrowFunction");
arrowFunctionDiv.innerHTML+="<h2> Arrow Function </h2><br>"
arrowFunctionDiv.innerHTML+="<h3>const add = (a, b) => { <br />   return a + b;<br /> };</h3>";
arrowFunctionDiv.innerHTML+="<h3>add(5, 3)====>"+add(5,3)+"</h3><br>";

divCreate("callStackFunction");
const myCallstack=()=>{
 console.log("Welcome my document") 
 return "Welcome my document";
}
let callStackFuncDiv=document.getElementById("callStackFunction");
callStackFuncDiv.innerHTML+="<h2>Call Stack Function</h2><br>";
callStackFuncDiv.innerHTML+="<h3>const myCallstack=()=>{<br />console.log('Welcome my document');<br />}</h3>";
callStackFuncDiv.innerHTML+="<h3>myCallStack()====>"+myCallstack()+"</h3>"

divCreate("optianalArguments");
const optionalArgument=(name='rıfat')=>{
  return'Hello, '+name+'!';
}
let optionalArgumentDiv=document.getElementById("optianalArguments");
optionalArgumentDiv.innerHTML+=" <h2>Optional Arguments</h2><br>";
optionalArgumentDiv.innerHTML+="<h3>const optionalArgument = (name='rıfat') => {<br/> return 'Hello, '+name+'!'; <br/>}</h3>";
optionalArgumentDiv.innerHTML+="<h3>example 1 = optionalArgumnet() ===>"+optionalArgument()+"</h3>"
optionalArgumentDiv.innerHTML+="<h3>examle 2 = optionalArgument('Osman')===>"+optionalArgument("Osman")+" </h3>"
console.log("Optional Arguments - greetWithName():"+optionalArgument("Osman"));
console.log("Optional Arguments - greetWithName():"+optionalArgument());

divCreate("closureFunction");
function outerFunction() {
  let outerVariable = "Hello";
  function innerFunction() {console.log(outerVariable); }  return innerFunction;}
let closureFunctionDiv=document.getElementById("closureFunction");
closureFunctionDiv.innerHTML+=" <h2>Closure Function</h2><br>";
closureFunctionDiv.innerHTML+=" <h3> &#160 function outerFunction() { <br> &#160 let outerVariable = 'Hello';<br> <br> &#160 function innerFunction() { <br> &#160 &#160 return outerVariable <br>}<br> &#160 &#160 return innerFunction;<br>}<br> <br> ===> Hello!</h3>";

divCreate("recursionFunction");
const factorial = (n) => {  if (n === 1) {    return 1; }  return n * factorial(n - 1);};
let recursionFunctionDiv=document.getElementById("recursionFunction");
recursionFunctionDiv.innerHTML+=" <h2>Recursion Function</h2><br>";
recursionFunctionDiv.innerHTML+=" <h3>const factorial = (n) => {<br> &#160 if (n === 1) {<br> &#160 &#160 return 1;<br> &#160 }<br> &#160 return n * factorial(n - 1);<br>} <br> factorial(5) ===> 120</h3>";

divCreate("functionBinding");
const user = {
  firstName: "Rıfat",
  lastName: "Demirok",
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
let functionBindingDiv=document.getElementById("functionBinding");
functionBindingDiv.innerHTML+=" <h2>Function Binding</h2><br>";
functionBindingDiv.innerHTML+="<h5>When the boundFullNameFunc function is created using the bind() method, its this context is bound to the person object. </h5>"
functionBindingDiv.innerHTML+=" <h3>const user = {<br> &#160 firstName: 'Rıfat',<br> &#160 lastName: 'Demirok',<br>  <br> &#160 getFullName: function () {<br> &#160 &#160 return this.firstName + ' ' + this.lastName;<br> &#160 },<br>};<br> <br> const getFullNameBound =<br> &#160 &#160 user.getFullName.bind(user);<br> <br> &#160 &#160 getFullNameBound() ===> Rıfat Demirok</h3>";

divCreate("restParameter");
const sum = (...args) => {
  return args.reduce((a, b) => a + b);
};
let restParameterDiv=document.getElementById("restParameter");
restParameterDiv.innerHTML+=" <h2>Rest Parameter</h2><br>";
restParameterDiv.innerHTML+="<h3>const sum = (...args) => {<br> &#160 return args.reduce((a, b) => a + b);<br>}<br> sum(1, 2, 3, 4, 5) ===> 15 <br/><br/>OR<br/><br/></h3>";
restParameterDiv.innerHTML+="<h3>sum(1, 2, 3, 4, 5,6,7) ===> "+sum(1, 2, 3, 4, 5, 6, 7)+"</h3>";