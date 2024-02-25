const konya="Konya";
const istanbul="Istanbul";
const ankara="Ankara";
const izmir="Izmir";
const antalya="Antalya";
const muğla="Muğla";

let cities = new Array();


for (let i = 0; i < 4; i++) {
    cities.push(konya);
}
let outputDivPush = document.getElementById("pushedIzmir");
outputDivPush.innerHTML += "<h1>Pushed Izmir</h1><br>";
outputDivPush.innerHTML +="<h4>"+"Current Array====>"+ cities.toString() +"</h4>"+ "<br>";
cities.push(izmir);
outputDivPush.innerHTML+="<h4>"+"Cities.push(izmir)====>"+cities.toString() +"</h4>"+ "<br>";

let outputDivUnshift = document.getElementById("unShiftIzmir");
outputDivUnshift.innerHTML += "<h1>UnShift Izmir</h1><br>";
outputDivUnshift.innerHTML +="<h4>"+"Current Array====>"+ cities.toString() +"</h4>"+ "<br>";
cities.unshift(izmir);
outputDivUnshift.innerHTML+="<h4>"+"cities.unshift(izmir);====>"+cities.toString() +"</h4>"+ "<br>";

cities=[];
cities.push(konya, istanbul,ankara,izmir);
let outputDivPop = document.getElementById("popIzmir");
outputDivPop.innerHTML += "<h1>Pop Izmir</h1><br>";
outputDivPop.innerHTML +="<h4>"+"Current Array====>"+ cities.toString() +"</h4>"+ "<br>";
cities.pop(izmir);
outputDivPop.innerHTML+="<h4>"+"cities.pop(izmir);====>"+cities.toString() +"</h4>"+ "<br>";

cities=[];

cities.push(konya, istanbul,ankara,izmir);
let outputDivShift = document.getElementById("Shift");
outputDivShift.innerHTML += "<h1>Shift</h1><br>";
outputDivShift.innerHTML +="<h4>"+"Current Array====>"+ cities.toString() +"</h4>"+ "<br>";
cities.shift();
outputDivShift.innerHTML+="<h4>"+"cities.shift();====>"+cities.toString() +"</h4>"+ "<br>";

cities=[];
for (let i = 0; i < 4; i++) {
    cities.push(izmir);
}
let outputDivMap = document.getElementById("map");
outputDivMap.innerHTML += "<h1>Map</h1><br>";
outputDivMap.innerHTML +="<h4>"+"Current Array====>"+ cities.toString() +"</h4>"+ "<br>";
newArrMugla=cities.map(Element=>muğla);
outputDivMap.innerHTML+="<h4>"+"cities.map(Element=>muğla);====>"+newArrMugla.toString() +"</h4>"+ "<br>";

cities=[];
cities.push(konya,izmir,ankara,izmir);

let outputDivFilter = document.getElementById("filter");
outputDivFilter.innerHTML += "<h1>Filter</h1><br>";
outputDivFilter.innerHTML +="<h4>"+"Current Array====>"+ cities.toString() +"</h4>"+ "<br>";
const newarr= cities.filter(Element=>Element==izmir);
outputDivFilter.innerHTML+="<h4>"+"cities.filter(Element=>Element==izmir);====>"+newarr.toString() +"</h4>"+ "<br>";

let outputDivReverse = document.getElementById("Reverse");
outputDivReverse.innerHTML += "<h1>Reverse</h1><br>";
outputDivReverse.innerHTML +="<h4>"+"Current Array====>"+ cities.toString() +"</h4>"+ "<br>";
cities.reverse();
outputDivReverse.innerHTML+="<h4>"+"cities.reverse();====>"+cities.toString() +"</h4>"+ "<br>";

cities.reverse();

let outputDivInclude = document.getElementById("Include");
outputDivInclude.innerHTML += "<h1>Include</h1><br>";
outputDivInclude.innerHTML +="<h4>"+"Current Array====>"+ cities.toString() +"</h4>"+ "<br>";
let tf=cities.includes(izmir)
outputDivInclude.innerHTML+="<h4>"+"cities.includes(izmir);====>"+tf +"</h4>"+ "<br>";

let outputDivIndexOf = document.getElementById("indexof");
outputDivIndexOf.innerHTML += "<h1>Index Of 3</h1><br>";
outputDivIndexOf.innerHTML +="<h4>"+"Current Array====>"+ cities.toString() +"</h4>"+ "<br>";
let Io=cities.at(2)
outputDivIndexOf.innerHTML+="<h4>"+"cities.at(2)====>"+Io +"</h4>"+ "<br>";

let outputDivSlice = document.getElementById("slice");
outputDivSlice.innerHTML += "<h1>Slice</h1><br>";
outputDivSlice.innerHTML +="<h4>"+"Current Array====>"+ cities.toString() +"</h4>"+ "<br>";
cities.splice(0,1)
outputDivSlice.innerHTML+="<h4>"+"cities.splice(0,1)====>"+cities.toString() +"</h4>"+ "<br>";


cities=[];
cities.push(konya,izmir,ankara,izmir);
let outputDivSplice = document.getElementById("splice");
outputDivSplice.innerHTML += "<h1>Splice</h1><br>";
outputDivSplice.innerHTML +="<h4>"+"Current Array====>"+ cities.toString() +"</h4>"+ "<br>";
cities.slice(0,1)
outputDivSplice.innerHTML+="<h4>"+"cities.slice(0,1)====>"+Io +"</h4>"+ "<br>";

let outputDivFill = document.getElementById("fill");
outputDivFill.innerHTML += "<h1>Fill(Antalya)</h1><br>";
outputDivFill.innerHTML +="<h4>"+"Current Array====>"+ cities.toString() +"</h4>"+ "<br>";
cities.fill(antalya)
outputDivFill.innerHTML+="<h4>"+"cities.fill(antalya)====>"+cities.toString() +"</h4>"+ "<br>";

cities=[];
cities.push(konya,izmir,ankara,izmir)

let outputDivFind = document.getElementById("Find");
outputDivFind.innerHTML += "<h1>Find(Izmir)</h1><br>";
outputDivFind.innerHTML +="<h4>"+"Current Array====>"+ cities.toString() +"</h4>"+ "<br>";
const finder=cities.find(finder=>finder=="Izmir")
outputDivFind.innerHTML+="<h4>"+"cities.find(finder=>finder==Izmir)====>"+finder +"</h4>"+ "<br>";

let outputDivFindIndex = document.getElementById("FindIndex");
outputDivFindIndex.innerHTML += "<h1>FindIndex(Izmir)</h1><br>";
outputDivFindIndex.innerHTML +="<h4>"+"Current Array====>"+ cities.toString() +"</h4>"+ "<br>";
const index=(cities.indexOf("Izmir"));
outputDivFindIndex.innerHTML+="<h4>"+"(cities.indexOf(Izmir));====>"+index +"</h4>"+ "<br>";

