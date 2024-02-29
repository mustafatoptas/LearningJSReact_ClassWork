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

/*const operators = ["Ali", "Osman", "Mustafa", "Rıfat"];

// 1. includes(): Belirli bir öğenin dizide olup olmadığını kontrol eder.
const hasOsman = operators.includes("Osman");
console.log("Osman dizide mi?", hasOsman); // true

// 2. indexOf(): Belirli bir öğenin dizideki indeksini döndürür.
const MustafaIndex = operators.indexOf("Mustafa");
console.log("Mustafa'un indeksi:", MustafaIndex); // 2

// 3. join(): Dizideki tüm öğeleri birleştirip bir dizeye dönüştürür.
const joinedOperators = operators.join(", ");
console.log("Birleştirilmiş operatörler:", joinedOperators); // "Ali, Osman, Mustafa, Rıfat"

// 4. reverse(): Diziyi tersine çevirir.
const reversedOperators = operators.reverse();
console.log("Tersine çevrilmiş operatörler:", reversedOperators); // ["Rıfat", "Mustafa", "Osman", "Ali"]

// 5. sort(): Diziyi sıralar.
const sortedOperators = operators.sort();
console.log("Sıralanmış operatörler:", sortedOperators); // ["Osman", "Mustafa", "Rıfat", "Ali"]

// 6. slice(): Belirli bir kısmı kopyalar ve yeni bir dizi oluşturur.
const selectedOperators = operators.slice(1, 3);
console.log("Seçilen operatörler:", selectedOperators); // ["Mustafa", "Rıfat"]

// 7. splice(): Dizideki belirli bir kısmı kaldırır ve/veya yeni öğeler ekler.  
const removedOperators = operators.splice(1, 2);
console.log("Silinen operatörler:", removedOperators); // ["Osman", "Mustafa"]

// 8. map(): Dizideki her öğe için belirli bir işlemi uygular ve yeni bir dizi oluşturur.
const mappedOperators = operators.map((operator) => operator.toUpperCase());
console.log("Büyük harfli operatörler:", mappedOperators); // ["ALI", "OSMAN", "MUSTAFA", "RIFAT"]

// 9. filter(): Belirli bir koşulu sağlayan öğeleri filtreler ve yeni bir dizi oluşturur.
const filteredOperators = operators.filter((operator) => operator.length > 3);
console.log("Filtrelenmiş operatörler:", filteredOperators); // ["Mustafa", "Rıfat"]

// 10. reduce(): Dizideki her öğe için belirli bir işlemi uygular ve tek bir sonuç döndürür.
const reducedOperators = operators.reduce((accumulator, operator) => accumulator + operator, "");
console.log("Azaltılmış operatörler:", reducedOperators); // "AliOsmanMustafaRıfat"

// 11. forEach(): Dizideki her öğe için belirli bir işlemi uygular.
operators.forEach((operator) => console.log("Operatör:", operator));

// 12. every(): Dizideki tüm öğelerin belirli bir koşulu sağlayıp sağlamadığını kontrol eder.
const allOperatorsAreLong = operators.every((operator) => operator.length > 3);
console.log("Tüm operatörler uzun mu?", allOperatorsAreLong); // false

// 13. some(): Dizideki herhangi bir öğenin belirli bir koşulu sağlayıp sağlamadığını kontrol eder.
const someOperatorsAreLong = operators.some((operator) => operator.length > 3);
console.log("Bazı operatörler uzun mu?", someOperatorsAreLong); // true

// 14. find(): Belirli bir koşulu sağlayan ilk öğeyi döndürür.
const longOperator = operators.find((operator) => operator.length > 3);
console.log("Uzun operatör:", longOperator); // "Mustafa"

// 15. findIndex(): Belirli bir koşulu sağlayan ilk öğenin indeksini döndürür.
const longOperatorIndex = operators.findIndex((operator) => operator.length > 3);
console.log("Uzun operatörün indeksi:", longOperatorIndex); // 2

// 16. flat(): Diziyi düzleştirir.
const nestedOperators = ["Ali", ["Osman", "Mustafa"], "Rıfat"];
const flatOperators = nestedOperators.flat();
console.log("Düzleştirilmiş operatörler:", flatOperators); // ["Ali", "Osman", "Mustafa", "Rıfat"]

// 17. flatMap(): Dizideki her öğe için belirli bir işlemi uygular ve ardından diziyi düzleştirir.
const flatMappedOperators = operators.flatMap((operator) => operator.split(""));
console.log("Düzleştirilmiş harfler:", flatMappedOperators); // ["A", "l", "i", "O", "s", "m", "a", "n", "M", "u", "s", "t", "a", "f", "a", "R", "ı", "f", "a", "t"]

// 18. from(): Dizi benzeri bir nesneyi diziye dönüştürür.
const arrayLikeObject = { 0: "Ali", 1: "Osman", 2: "Mustafa", 3: "Rıfat", length: 4 };
const arrayFromObject = Array.from(arrayLikeObject);
console.log("Nesne dizisi:", arrayFromObject); // ["Ali", "Osman", "Mustafa", "Rıfat"]

// 19. keys(): Dizideki indeksleri içeren bir dizi döndürür.
const operatorIndices = operators.keys();
console.log("Operatör indeksleri:", Array.from(operatorIndices)); // [0, 1, 2, 3]

// 20. values(): Dizideki öğeleri içeren bir dizi döndürür.
const operatorValues = operators.values();
console.log("Operatör değerleri:", Array.from(operatorValues)); // ["Ali", "Osman", "Mustafa", "Rıfat"]

// 21. entries(): Dizideki öğelerin indeks ve değerlerini içeren bir dizi döndürür.
const operatorEntries = operators.entries();
console.log("Operatör girişleri:", Array.from(operatorEntries)); // [[0, "Ali"], [1, "Osman"], [2, "Mustafa"], [3, "Rıfat"]]

// 22. copyWithin(): Dizinin belirli bir kısmını kopyalar ve başka bir kısmına yapıştırır.
const copiedOperators = operators.copyWithin(0, 2);
console.log("Kopyalanmış operatörler:", copiedOperators); // ["Mustafa", "Rıfat", "Mustafa", "Rıfat"]

// 23. fill(): Dizinin belirli bir kısmını belirli bir değerle doldurur.
const filledOperators = operators.fill("Ali", 1, 3);
console.log("Doldurulmuş operatörler:", filledOperators); // ["Mustafa", "Ali", "Ali", "Rıfat"]

// 24. pop(): Dizinin sonundaki öğeyi kaldırır.
const poppedOperator = operators.pop();
console.log("Çıkarılan operatör:", poppedOperator); // "Rıfat"

// 25. push(): Dizinin sonuna yeni öğeler ekler.
const pushedOperators = operators.push("Rıfat");
console.log("Eklenmiş operatörler:", pushedOperators); // 4

// 26. shift(): Dizinin başındaki öğeyi kaldırır.
const shiftedOperator = operators.shift();
console.log("Çıkarılan operatör:", shiftedOperator); // "Mustafa"

// 27. unshift(): Dizinin başına yeni öğeler ekler.
const unshiftedOperators = operators.unshift("Mustafa");
console.log("Eklenmiş operatörler:", unshiftedOperators); // 4

// 28. toString(): Diziyi bir dizeye dönüştürür.
const stringifiedOperators = operators.toString();
console.log("Dizeye dönüştürülmüş operatörler:", stringifiedOperators); // "Mustafa,Osman,Rıfat"

// 29. toLocaleString(): Diziyi yerel bir dizeye dönüştürür.
const localizedOperators = operators.toLocaleString();

// 30. concat(): Dizileri birleştirir.
const otherOperators = ["Ali", "Osman"];
const concatenatedOperators = operators.concat(otherOperators);
console.log("Birleştirilmiş operatörler:", concatenatedOperators); // ["Mustafa", "Osman", "Rıfat", "Ali", "Osman"]
*/
