const divCreate = (id) => {
  const divElement = document.createElement("div");
  divElement.classList.add("array-div");
  divElement.setAttribute("id", id);
  document.getElementById("div-1flex").appendChild(divElement);
}
// Bir araba nesnesi oluşturalım
const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    color: "blue",
    // Metod: Araç bilgisini gösteren bir metod
    displayInfo: function() {
      return `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Color: ${this.color}`;
    },
    // Metod: Araç rengini değiştiren bir metod
    changeColor: function(newColor) {
      this.color = newColor;
      return `Car color changed to ${this.color}`;
    }
  };
  divCreate("myCar")
  let carDiv=document.getElementById("myCar");
  carDiv.innerHTML += "<h1>Car Objects</h1> <hr/><br>";
  carDiv.innerHTML += `<h4>const car = {<br>
    &#160 brand: "Toyota",<br>
    &#160 model: "Corolla",<br>
    &#160 year: 2020,<br>
    &#160 color: "blue",<br>
    <br>
    &#160 displayInfo: function() {<br>
      &#160 &#160 return \`Brand: \${this.brand}, Model: \${this.model}, Year: \${this.year}, Color: \${this.color}\`;<br>
      &#160 &#160  },<br>
    <br>
    &#160 changeColor: function(newColor) {<br>
      &#160  &#160  this.color = newColor;<br>
      <br>
      &#160  &#160  return \`Car color changed to \${this.color}\`;<br>
    }
  };</h4>`;

  divCreate("carProperties")
  let carPropertiesDiv=document.getElementById("carProperties");
  carPropertiesDiv.innerHTML += "<h2>Car Properties</h2> <hr/><br>";
  carPropertiesDiv.innerHTML += "<h3> car.brand => Brand: Toyota</h3>";   
  carPropertiesDiv.innerHTML += "<h3> car.model => Model: Corolla</h3>";
  carPropertiesDiv.innerHTML += "<h3>car.year => Year: 2020</h3>";
  carPropertiesDiv.innerHTML += "<h3>car.color => Color: blue</h3>";

  divCreate("carInformation")
  let carInformationDiv=document.getElementById("carInformation");
  carInformationDiv.innerHTML += "<h2>Car Information</h2> <hr/><br>";
  carInformationDiv.innerHTML += "<h3>car.displayInfo() => <br><br> &#160 &#160  &#160 &#160 Brand: Toyota,<br> &#160 &#160 &#160 &#160 Model: Corolla,<br> &#160 &#160 &#160 &#160 Year: 2020,<br>  &#160 &#160 &#160 &#160 Color: blue</h3>";

divCreate("carChangeColor")
let carChangeColorDiv=document.getElementById("carChangeColor");
carChangeColorDiv.innerHTML += "<h2>Car Change Color</h2> <hr/><br>";
carChangeColorDiv.innerHTML += "<h3>car.changeColor('red') => Car color changed to red</h3>";

 let num=10;
 num=25;
 console.log(num);
  
let bool=true;
bool=false;
console.log(bool);
  