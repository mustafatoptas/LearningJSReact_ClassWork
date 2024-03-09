const array=[
    {
        id:1,
        setAttribute:'pushedIzmir',
        method:cities.push(izmir),
        h1:'Pushed Izmir',
    }
]

for (let index = 0; index < array.length; index++) {
    var divElement = document.createElement("div");
    divElement.classList.add("array-div");
    divElement.setAttribute("id", array[index].setAttribute);
    document.body.appendChild(divElement);
    array[index].method;
    let outputDivPush = document.getElementById("pushedIzmir");
    outputDivPush.innerHTML += `<h1>${array[index].h1}</h1><br>`;
    outputDivPush.innerHTML +=
      "<h4>" + "Current Array====>" + cities.toString() + "</h4>" + "<br>";
    outputDivPush.innerHTML +=
      "<h4>" + "Cities.push(izmir)"+"====>" + cities.toString() + "</h4>" + "<br>";
    
    
}