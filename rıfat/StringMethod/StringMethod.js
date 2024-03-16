const myString1='Hello'
const myString2='World'

function divCreate(id) {
    const divElement = document.createElement("div");
    divElement.classList.add("array-div");
    divElement.setAttribute("id", id);
    document.getElementById("div-1flex").appendChild(divElement);
}
divCreate("stringMethod")
let stringMethodDiv=document.getElementById("stringMethod");
stringMethodDiv.innerHTML += "<h2>My Strings</h2> <hr/><br>";
stringMethodDiv.innerHTML += "<h4>myString1 = Hello <br> myString2 = World </h4>";

divCreate("stringLength")
let stringLengthDiv=document.getElementById("stringLength");
stringLengthDiv.innerHTML += "<h2>String Length</h2> <hr/><br>";
stringLengthDiv.innerHTML += "<h3>myString1.length => 5</h3>";
stringLengthDiv.innerHTML += "<h3>myString2.length => 5</h3>";

divCreate("stringToUpperCase")
let stringToUpperCaseDiv=document.getElementById("stringToUpperCase");
stringToUpperCaseDiv.innerHTML += "<h2> Strings To Upper Case</h2> <hr/><br>";
stringToUpperCaseDiv.innerHTML += "<h3>myString1.toUpperCase() => HELLO</h3>";
stringToUpperCaseDiv.innerHTML += "<h3>myString2.toUpperCase() => WORLD</h3>";

divCreate("stringToLowerCase")
let stringToLowerCaseDiv=document.getElementById("stringToLowerCase");
stringToLowerCaseDiv.innerHTML += "<h2>Strings To Lower Case</h2> <hr/><br>";
stringToLowerCaseDiv.innerHTML += "<h3>myString1.toLowerCase() => hello</h3>";
stringToLowerCaseDiv.innerHTML += "<h3>myString2.toLowerCase() => world</h3>";

divCreate("stringConcat")
let stringConcatDiv=document.getElementById("stringConcat");
stringConcatDiv.innerHTML += "<h2>String Concat</h2> <hr/><br>";
stringConcatDiv.innerHTML += "<h3>myString1.concat(' ',myString2) => Hello World</h3>";

divCreate("stringCharAt")
let stringCharAtDiv=document.getElementById("stringCharAt");
stringCharAtDiv.innerHTML += "<h2> Strings CharAt</h2> <hr/><br>";
stringCharAtDiv.innerHTML += "<h3>myString1.charAt(0) => H</h3>";
stringCharAtDiv.innerHTML += "<h3>myString2.charAt(0) => W</h3>";

divCreate("stringIndexOf")
let stringIndexOfDiv=document.getElementById("stringIndexOf");
stringIndexOfDiv.innerHTML += "<h2>Strings Index Of</h2> <hr/><br>";
stringIndexOfDiv.innerHTML += "<h3>myString1.indexOf('o') => 4</h3>";
stringIndexOfDiv.innerHTML += "<h3>myString2.indexOf('o') => 1</h3>";

divCreate("stringLastIndexOf")
let stringLastIndexOfDiv=document.getElementById("stringLastIndexOf");
stringLastIndexOfDiv.innerHTML += "<h2>Strings Last Index Of</h2> <hr/><br>";
stringLastIndexOfDiv.innerHTML += "<h3>myString1.lastIndexOf('l') => 3</h3>";
stringLastIndexOfDiv.innerHTML += "<h3>myString2.lastIndexOf('o') => 4</h3>";

divCreate("stringIncludes")
let stringIncludesDiv=document.getElementById("stringIncludes");
stringIncludesDiv.innerHTML += "<h2>Strings Includes</h2> <hr/><br>";
stringIncludesDiv.innerHTML += "<h3>myString1.includes('l') => true</h3>";
stringIncludesDiv.innerHTML += "<h3>myString2.includes('l') => false</h3>";

divCreate("stringStartsWith")
let stringStartsWithDiv=document.getElementById("stringStartsWith");
stringStartsWithDiv.innerHTML += "<h2>Strings Starts With</h2> <hr/><br>";
stringStartsWithDiv.innerHTML="<h3>myString1.startsWith('H') => true</h3>";