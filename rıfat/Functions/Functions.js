const divCreate= (id)=>{
var divElement=document.createElement("div");
divElement.classList.add("array-div");
divElement.setAttribute("id",id);
document.body.appendChild(divElement);
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
console.log("Optional Arguments - greetWithName():"+optionalArgument("Osman"));
console.log("Optional Arguments - greetWithName():"+optionalArgument());




const innerFunc = outerFunction(5);
console.log("Function Closure - innerFunc(3):", innerFunc(3)); // 8

// Recursion Functions
const factorial = (n) => {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
};

console.log("Recursion Functions - factorial(5):", factorial(5)); // 120

// Growing Functions
const adder = (a, b, c) => {
  return a + b + c;
};

console.log("Growing Functions - adder(2, 3, 4):", adder(2, 3, 4)); // 9

// Fonksiyon bağlama / Binding functions
const user = {
  firstName: "John",
  lastName: "Doe",
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const getFullNameBound = user.getFullName.bind(user);
console.log("Function Binding - getFullNameBound():", getFullNameBound()); // John Doe