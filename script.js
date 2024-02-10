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

console.log("********************Pushed Izmir*******************");
console.log(cities);
cities.push(izmir);
console.log(cities);

cities.pop();

console.log("********************Unshift Izmir*******************");
console.log(cities);
cities.unshift(izmir);
console.log(cities);

cities=[];

console.log("********************Pop İzmir*******************");
cities.push(konya, istanbul,ankara,izmir);
console.log(cities);
cities.pop(izmir);
console.log(cities);

cities=[];

console.log("********************Shift*******************");
cities.push(konya, istanbul,ankara,izmir);
console.log(cities);
cities.shift();
console.log(cities);

cities=[];

console.log("********************Map(Muğla)*******************");
for (let i = 0; i < 4; i++) {
    cities.push(izmir);
}
console.log(cities);
const NewCities=cities.map(Element=>muğla);
console.log(NewCities);

cities=[];

console.log("********************Filter(IZmir)*******************");
cities.push(konya,izmir,ankara,izmir);
console.log(cities);
const filteredCities=cities.filter(Element=>Element==izmir);
console.log(filteredCities);



console.log("********************Reverse*******************");
console.log(cities);
cities.reverse();
console.log(cities);

cities.reverse();

console.log("********************Includes(Izmir)*******************");
console.log(cities);
console.log( cities.includes(izmir));

console.log("********************At(index of 3)*******************");
console.log(cities);
console.log(cities.at(2));

console.log("********************Slice(0,1)*******************");
console.log(cities);
console.log(cities.slice(0,1));

cities=[];
console.log("********************Splice*******************");
cities.push(konya,izmir,ankara,izmir);// bazı kaynakları taradım slice ve splice fonksiyonları aynı işi yapıyorlar. anlamadım.
console.log(cities);                  //splice (1,1,xxx,xxx) metodu da aynısını yapmadı. farklı bir şekilde çalıştı. anlamadım.  
let splice1=cities.splice(0,1);
console.log(splice1);

console.log("********************Fill(Antalya)*******************");
console.log(cities);
console.log(cities.fill(antalya));

cities=[];
console.log("********************Find(Izmir)*******************");
cities.push(konya,izmir,ankara,izmir)
console.log(cities);
console.log(cities.find(finder=>finder=="Izmir"));

console.log("********************FindIndex(Izmir)*******************");
console.log(cities);
console.log(cities.indexOf("Izmir"));