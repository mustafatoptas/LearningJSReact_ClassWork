const divCreate= (id)=>{
    var divElement=document.createElement("div");
    divElement.classList.add("array-div");
    divElement.setAttribute("id",id);
    document.getElementById("div-1flex").appendChild(divElement);
    }

divCreate("array");
const numbers = [1, 2, 3, 4, 5];
const arrayDiv=document.getElementById("array");
arrayDiv.innerHTML+="<h1>Array</h1>";
arrayDiv.innerHTML+="<h3> <br> Create an Array <br> const numbers = ["+numbers+"];</h3>";
arrayDiv.innerHTML+="<h3>Array Length<br> number.lenght ===>"+numbers.length+"</h3>"; 
arrayDiv.innerHTML+="<h3>Access an Array Element<br> numbers[2] ===>"+numbers[2]+"</h3>";
arrayDiv.innerHTML+="<h3>Push an Array Element<br> numbers[2]=10; ===>"+numbers+"</h3>";

divCreate("objects");
const objectDiv=document.getElementById("objects");
objectDiv.innerHTML+="<h1>Objects</h1>";
objectDiv.innerHTML+="<h3>Create an Object <br> <br> const person = {<br> &#160 name: 'Rıfat',<br> &#160 age: 21,<br> &#160 city: 'Konya'<br> &#160 };</h3>";
const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
person.age=40
person.job = "Developer"
delete person.age;;   
objectDiv.innerHTML+="<h3>Access an Object Property <br> person.name ===>"+person.name+"</h3>";
objectDiv.innerHTML+="<h3>Change an Object Property <br> person.age=40; ===>"+person.age+"</h3>";  
objectDiv.innerHTML+="<h3>Add a Property <br> person.job = 'Developer'; ===>"+person.job+"</h3>";
objectDiv.innerHTML+="<h3>Delete a Property <br> delete person.age; ===>"+person.age+"</h3>";

divCreate("maps");
const mapDiv=document.getElementById("maps");
mapDiv.innerHTML+="<h1>Maps</h1>";
mapDiv.innerHTML+="<h3>Create a Map <br> const myMap = new Map();</h3>";
const myMap = new Map();

myMap.set("name", "Rıfat");
myMap.set("age", 21);
myMap.set("city", "Konya");
myMap.set("name", "Osman");
mapDiv.innerHTML+="<h3>myMap.set('name','Rıfat') <br> myMap.set('age',21) <br> myMap.set('city','Konya') </h3>"
mapDiv.innerHTML+="<h3>Set a Key-Value Pair <br> myMap.set('name', 'osman'); <br> myMap.get('name')===>"+myMap.get('name')+"</h3>";
mapDiv.innerHTML+="<h3>Delete a Value by Key <br> myMap.delete('city')<br>Map after Deleting Key: ===>Map(2) {'name' => 'Osman', 'age' => 21}</h3>";

divCreate("sets");
const setDiv=document.getElementById("sets");
setDiv.innerHTML+="<h1>Sets</h1>";
setDiv.innerHTML+="<h3>Create a Set <br> const mySet = new Set();</h3>";
const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(4); 
console.log("Setssss:", mySet);
setDiv.innerHTML+="mySet.add(1); <br> mySet.add(2); <br> mySet.add(3); <br> mySet.add(4); <br>";
mySet.delete(2);
setDiv.innerHTML+="<h3>Delete a Value <br> mySet.delete(2); <br> mySet===>"+"Set(){1, 3, 4}"+"</h3>";
setDiv.innerHTML+="<h3>Get Set Size <br> mySet.size ===>"+mySet.size+"</h3>";
setDiv.innerHTML+="<h3>Check a Value <br> mySet.has(3) ===>"+mySet.has(3)+"</h3>";
setDiv.innerHTML+="<h3>Get All Values <br> mySet ===>"+"Set(){1, 3, 4}"+"</h3>";
