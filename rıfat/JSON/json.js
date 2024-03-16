function divCreate(id) {
    const divElement = document.createElement("div");
    divElement.classList.add("array-div");
    divElement.setAttribute("id", id);
    document.getElementById("div-1flex").appendChild(divElement);
}

divCreate("json");
let jsonDiv = document.getElementById("json");
jsonDiv.innerHTML += "<h1>JSON File</h1><p>people.json<p> <hr/><br>";
jsonDiv.innerHTML += "<h4>[<br>\
      &#160  {<br>\
        &#160  &#160     \"name\": \"Osman\",<br>\
        &#160  &#160  \"surname\": \"Özer\",<br>\
        &#160  &#160   \"age\": 24,<br>\
        &#160  &#160   \"city\": \"Sivas\",<br>\
        &#160  &#160   \"isStudent\": true<br>\
         &#160 },<br>\
         &#160 {<br>\
        &#160  &#160  \"name\": \"Rıfat\",<br>\
        &#160  &#160 \"surname\": \"Demirok\",<br>\
        &#160  &#160  \"age\": 22,<br>\
        &#160  &#160  \"city\": \"Konya\",<br>\
        &#160  &#160  \"isStudent\": true<br>\
        &#160  },<br>\
        &#160  {<br>\
        &#160  &#160 \"name\": \"Ali\",<br>\
        &#160  &#160  \"surname\": \"Özer\",<br>\
        &#160  &#160  \"age\": 40,<br>\
        &#160  &#160  \"city\": \"Konya\",<br>\
        &#160  &#160  \"isStudent\": false<br>\
        &#160  },<br>\
        &#160  {<br>\
        &#160  &#160   \"name\": \"Mustafa\",<br>\
        &#160  &#160  \"surname\": \"Toptaş\",<br>\
        &#160  &#160  \"age\": 28,<br>\
        &#160  &#160  \"city\": \"Konya\",<br>\
        &#160  &#160  \"isStudent\": false<br>\
        &#160   }<br>\
]</h4>";
divCreate("jsonFetch");
let jsonFetchDiv = document.getElementById("jsonFetch");
jsonFetchDiv.innerHTML += "<h2>JSON Fetch</h2><hr/><br>";
jsonFetchDiv.innerHTML+="<p>'fetch() method is used to make a request to the server and load the response. The fetch() method returns a Promise. '</p><br>";

jsonFetchDiv.innerHTML += "<h3>fetch('people.json')<br>\
&#160.then(response => response.json())<br>\
&#160.then(data => {<br>\
    &#160 const people = data;<br>\
    <br>\
    &#160 people.forEach(person => {<br>\
      &#160 &#160 return person.name;<br>\
    &#160 });<br>\
    <br>\
    &#160 const students = people.filter(person => person.isStudent);<br>\
    &#160 console.log(students);<br>\
  })<br>\
  .catch(error => console.error('Error:', error));</h3>";

divCreate("jsonStringify");
let jsonStringifyDiv = document.getElementById("jsonStringify");

jsonStringifyDiv.innerHTML += "<h2>JSON Stringify</h2><hr/><br>";
jsonStringifyDiv.innerHTML+="<p>'stringify method is convert js to json  '</p><br>";
jsonStringifyDiv.innerHTML += "<h3>const person = {<br>\
  &#160 name: 'Osman',<br>\
  &#160 surname: 'Özer',<br>\
  &#160 age: 24,<br>\
  &#160 city: 'Sivas',<br>\
  &#160 isStudent: true<br>\
};<br>\
<br>\
const personStr = JSON.stringify(person);<br>\
console.log(personStr);<br>\
Output=> {<br>\"name\":\"Osman\",<br>\"surname\":\"Özer\",<br>\"age\":24,<br>\"city\":\"Sivas\",<br>\"isStudent\":true<br>}</h3>";
