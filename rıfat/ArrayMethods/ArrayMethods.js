const konya = "Konya";
const istanbul = "Istanbul";
const ankara = "Ankara";
const izmir = "Izmir";
const antalya = "Antalya";
const muğla = "Muğla";

let cities = new Array();

for (let i = 0; i < 4; i++) {
  cities.push(konya);
}

var divElement = document.createElement("div");
divElement.classList.add("array-div");
divElement.setAttribute("id", "pushedIzmir");
document.body.appendChild(divElement);
cities.push(istanbul);
let outputDivPush = document.getElementById("pushedIzmir");
outputDivPush.innerHTML += "<h1>Pushed Izmir</h1><br>";
outputDivPush.innerHTML +=
  "<h4>" + "Current Array====>" + cities.toString() + "</h4>" + "<br>";
outputDivPush.innerHTML +=
  "<h4>" + "Cities.push(izmir)====>" + cities.toString() + "</h4>" + "<br>";

var divElement = document.createElement("div");
divElement.classList.add("array-div");
divElement.setAttribute("id", "unShiftIzmir");
document.body.appendChild(divElement);
let outputDivUnshift = document.getElementById("unShiftIzmir");
outputDivUnshift.innerHTML += "<h1>UnShift Izmir</h1><br>";
outputDivUnshift.innerHTML +=
  "<h4>" + "Current Array====>" + cities.toString() + "</h4>" + "<br>";
cities.unshift(izmir);
outputDivUnshift.innerHTML +=
  "<h4>" + "cities.unshift(izmir);====>" + cities.toString() + "</h4>" + "<br>";

cities = [];

cities.push(konya, istanbul, ankara, izmir);
var divElement = document.createElement("div");
divElement.classList.add("array-div");
divElement.setAttribute("id", "popIzmir");
document.body.appendChild(divElement);
let outputDivPop = document.getElementById("popIzmir");
outputDivPop.innerHTML += "<h1>Pop Izmir</h1><br>";
outputDivPop.innerHTML +=
  "<h4>" + "Current Array====>" + cities.toString() + "</h4>" + "<br>";
cities.pop(izmir);
outputDivPop.innerHTML +=
  "<h4>" + "cities.pop(izmir);====>" + cities.toString() + "</h4>" + "<br>";

cities = [];

cities.push(konya, istanbul, ankara, izmir);

var divElement = document.createElement("div");
divElement.classList.add("array-div");
divElement.setAttribute("id", "Shift");
document.body.appendChild(divElement);
let outputDivShift = document.getElementById("Shift");
outputDivShift.innerHTML += "<h1>Shift</h1><br>";
outputDivShift.innerHTML +=
  "<h4>" + "Current Array====>" + cities.toString() + "</h4>" + "<br>";
cities.shift();
outputDivShift.innerHTML +=
  "<h4>" + "cities.shift();====>" + cities.toString() + "</h4>" + "<br>";

cities = [];
for (let i = 0; i < 4; i++) {
  cities.push(izmir);
}
var divElement = document.createElement("div");
divElement.classList.add("array-div");
divElement.setAttribute("id", "map");
document.body.appendChild(divElement);
let outputDivMap = document.getElementById("map");
outputDivMap.innerHTML += "<h1>Map</h1><br>";
outputDivMap.innerHTML +=
  "<h4>" + "Current Array====>" + cities.toString() + "</h4>" + "<br>";
newArrMugla = cities.map((Element) => muğla);
outputDivMap.innerHTML +=
  "<h4>" +
  "cities.map(Element=>muğla);====>" +
  newArrMugla.toString() +
  "</h4>" +
  "<br>";

cities = [];
cities.push(konya, izmir, ankara, izmir);
var divElement = document.createElement("div");
divElement.classList.add("array-div");
divElement.setAttribute("id", "filter");
document.body.appendChild(divElement);
let outputDivFilter = document.getElementById("filter");
outputDivFilter.innerHTML += "<h1>Filter</h1><br>";
outputDivFilter.innerHTML +=
  "<h4>" + "Current Array====>" + cities.toString() + "</h4>" + "<br>";
const newarr = cities.filter((Element) => Element == izmir);
outputDivFilter.innerHTML +=
  "<h4>" +
  "cities.filter(Element=>Element==izmir);====>" +
  newarr.toString() +
  "</h4>" +
  "<br>";

var divElement = document.createElement("div");
divElement.classList.add("array-div");
divElement.setAttribute("id", "Reverse");
document.body.appendChild(divElement);
let outputDivReverse = document.getElementById("Reverse");
outputDivReverse.innerHTML += "<h1>Reverse</h1><br>";
outputDivReverse.innerHTML +=
  "<h4>" + "Current Array====>" + cities.toString() + "</h4>" + "<br>";
cities.reverse();
outputDivReverse.innerHTML +=
  "<h4>" + "cities.reverse();====>" + cities.toString() + "</h4>" + "<br>";
cities.reverse();

var divInclude = document.createElement("div");
divInclude.classList.add("array-div");
divInclude.setAttribute("id", "Include");
document.body.appendChild(divInclude);

divInclude.innerHTML += "<h1>Include</h1><br>";
divInclude.innerHTML +=
  "<h4>Current Array====>" + cities.toString() + "</h4><br>";
let tf = cities.includes(izmir);
divInclude.innerHTML += "<h4>cities.includes(izmir);====>" + tf + "</h4><br>";


var divIndexOf = document.createElement("div");
divIndexOf.classList.add("array-div");
divIndexOf.setAttribute("id", "indexof");
document.body.appendChild(divIndexOf);

divIndexOf.innerHTML += "<h1>Index Of 3</h1><br>";
divIndexOf.innerHTML +=
  "<h4>Current Array====>" + cities.toString() + "</h4><br>";
let Io = cities.at(2);
divIndexOf.innerHTML += "<h4>cities.at(2)====>" + Io + "</h4><br>";


var divSlice = document.createElement("div");
divSlice.classList.add("array-div");
divSlice.setAttribute("id", "slice");
document.body.appendChild(divSlice);

divSlice.innerHTML += "<h1>Slice</h1><br>";
divSlice.innerHTML +=
  "<h4>Current Array====>" + cities.toString() + "</h4><br>";
cities.splice(0, 1);
divSlice.innerHTML +=
  "<h4>cities.splice(0,1)====>" + cities.toString() + "</h4><br>";

cities = [];
cities.push(konya, izmir, ankara, izmir);


var divSplice = document.createElement("div");
divSplice.classList.add("array-div");
divSplice.setAttribute("id", "splice");
document.body.appendChild(divSplice);

divSplice.innerHTML += "<h1>Splice</h1><br>";
divSplice.innerHTML +=
  "<h4>Current Array====>" + cities.toString() + "</h4><br>";
cities.slice(0, 1);
divSplice.innerHTML += "<h4>cities.slice(0,1)====>" + Io + "</h4><br>";


var divFill = document.createElement("div");
divFill.classList.add("array-div");
divFill.setAttribute("id", "fill");
document.body.appendChild(divFill);

divFill.innerHTML += "<h1>Fill(Antalya)</h1><br>";
divFill.innerHTML += "<h4>Current Array====>" + cities.toString() + "</h4><br>";
cities.fill(antalya);
divFill.innerHTML +=
  "<h4>cities.fill(antalya)====>" + cities.toString() + "</h4><br>";

cities = [];
cities.push(konya, izmir, ankara, izmir);


var divFind = document.createElement("div");
divFind.classList.add("array-div");
divFind.setAttribute("id", "Find");
document.body.appendChild(divFind);

divFind.innerHTML += "<h1>Find(Izmir)</h1><br>";
divFind.innerHTML += "<h4>Current Array====>" + cities.toString() + "</h4><br>";
const finder = cities.find((finder) => finder == "Izmir");
divFind.innerHTML +=
  "<h4>cities.find(finder=>finder==Izmir)====>" + finder + "</h4><br>";


var divFindIndex = document.createElement("div");
divFindIndex.classList.add("array-div");
divFindIndex.setAttribute("id", "FindIndex");
document.body.appendChild(divFindIndex);

divFindIndex.innerHTML += "<h1>FindIndex(Izmir)</h1><br>";
divFindIndex.innerHTML +=
  "<h4>Current Array====>" + cities.toString() + "</h4><br>";
const index = cities.indexOf("Izmir");
divFindIndex.innerHTML +=
  "<h4>(cities.indexOf(Izmir));====>" + index + "</h4><br>";

//#region
// let outputDivInclude = document.getElementById("Include");
// outputDivInclude.innerHTML += "<h1>Include</h1><br>";
// outputDivInclude.innerHTML +="<h4>"+"Current Array====>"+ cities.toString() +"</h4>"+ "<br>";
// let tf=cities.includes(izmir)
// outputDivInclude.innerHTML+="<h4>"+"cities.includes(izmir);====>"+tf +"</h4>"+ "<br>";

// let outputDivIndexOf = document.getElementById("indexof");
// outputDivIndexOf.innerHTML += "<h1>Index Of 3</h1><br>";
// outputDivIndexOf.innerHTML +="<h4>"+"Current Array====>"+ cities.toString() +"</h4>"+ "<br>";
// let Io=cities.at(2)
// outputDivIndexOf.innerHTML+="<h4>"+"cities.at(2)====>"+Io +"</h4>"+ "<br>";

// let outputDivSlice = document.getElementById("slice");
// outputDivSlice.innerHTML += "<h1>Slice</h1><br>";
// outputDivSlice.innerHTML +="<h4>"+"Current Array====>"+ cities.toString() +"</h4>"+ "<br>";
// cities.splice(0,1)
// outputDivSlice.innerHTML+="<h4>"+"cities.splice(0,1)====>"+cities.toString() +"</h4>"+ "<br>";

// cities=[];
// cities.push(konya,izmir,ankara,izmir);
// let outputDivSplice = document.getElementById("splice");
// outputDivSplice.innerHTML += "<h1>Splice</h1><br>";
// outputDivSplice.innerHTML +="<h4>"+"Current Array====>"+ cities.toString() +"</h4>"+ "<br>";
// cities.slice(0,1)
// outputDivSplice.innerHTML+="<h4>"+"cities.slice(0,1)====>"+Io +"</h4>"+ "<br>";

// let outputDivFill = document.getElementById("fill");
// outputDivFill.innerHTML += "<h1>Fill(Antalya)</h1><br>";
// outputDivFill.innerHTML +="<h4>"+"Current Array====>"+ cities.toString() +"</h4>"+ "<br>";
// cities.fill(antalya)
// outputDivFill.innerHTML+="<h4>"+"cities.fill(antalya)====>"+cities.toString() +"</h4>"+ "<br>";

// cities=[];
// cities.push(konya,izmir,ankara,izmir)

// let outputDivFind = document.getElementById("Find");
// outputDivFind.innerHTML += "<h1>Find(Izmir)</h1><br>";
// outputDivFind.innerHTML +="<h4>"+"Current Array====>"+ cities.toString() +"</h4>"+ "<br>";
// const finder=cities.find(finder=>finder=="Izmir")
// outputDivFind.innerHTML+="<h4>"+"cities.find(finder=>finder==Izmir)====>"+finder +"</h4>"+ "<br>";


// let outputDivFindIndex = document.getElementById("FindIndex");
// outputDivFindIndex.innerHTML += "<h1>FindIndex(Izmir)</h1><br>";
// outputDivFindIndex.innerHTML +="<h4>"+"Current Array====>"+ cities.toString() +"</h4>"+ "<br>";
// const index=(cities.indexOf("Izmir"));
// outputDivFindIndex.innerHTML+="<h4>"+"(cities.indexOf(Izmir));====>"+index +"</h4>"+ "<br>";
//#endregion
