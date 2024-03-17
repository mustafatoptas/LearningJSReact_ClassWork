const divCreate= (id)=>{
  var divElement=document.createElement("div");
  divElement.classList.add("array-div");
  divElement.setAttribute("id",id);
  document.getElementById("div-1flex").appendChild(divElement);
  }
divCreate("string");
let DivPush = document.getElementById("string");
DivPush.innerHTML += "<h1> Data Type</h1><br>";
DivPush.innerHTML +=
  "<h4>" + "'Rıfat' is ====>" + typeof "Rıfat" + "<br>" +
           "3.14 is    ====>" + typeof 3.14 + "<br>" +
           "NaN is     ====>" + typeof NaN + "<br>" +
           "false is   ====>" + typeof false + "<br>" +
           "[1, 2, 3, 4] is           ====>" + typeof [1, 2, 3, 4] + "<br>" +
           "{name:'Rıfat', age:22} is ====>" + typeof {name:'Rıfat', age:22} + "<br>" +
           "new Date() is             ====>" + typeof new Date() + "<br>" +
           "function () {} is         ====>" + typeof function () {} + "<br>" +
           "myCar is                  ====>" + typeof myCar + "<br>" +
           "null is                   ====> " + typeof null; + "</h4>" + "<br>";

divCreate("operator");
let x=5;
let y=2;
let DivPush2 = document.getElementById("operator");
DivPush2.innerHTML += "<h1>Maths Operators</h1><br>";
DivPush2.innerHTML +=
  "<h4>" + "x = 5; y = 2; "+"<br> "+
  "x + y is ====>" + (x+y) + "<br>" +
           "x - y is ====>" + (x-y) + "<br>" +
           "x * y is ====>" + (x*y) + "<br>" +
           "x / y is ====>" + (x/y) + "<br>" +
           "x % y is ====>" + (x%y) + "<br>" +
           "x ** y is ====>" + (x**y) + "<br>" +

           
           "x += y is ====>" + (x+=y) + "<br>" +
           "x -= y is ====>" + (x-=y) + "<br>" +
           "x *= y is ====>" + (x*=y) + "<br>" +
           "x /= y is ====>" + (x/=y) + "<br>" +
           "x %= y is ====>" + (x%=y) + "<br>" +
           "x **= y is ====>" + (x**=y) + "<br>" ;

divCreate("mantiksal");
let DivPush3 = document.getElementById("mantiksal");
DivPush3.innerHTML += "<h1>Logical Operators</h1><br>";
DivPush3.innerHTML +=
           "<h4>"+"x == y is ====> Eşit midir? (false)<br>" +
           "x === y is ====> Aynı ve Eşit midir? (false)<br>" +
           "x != y is ====> Eşit değil midir? (true)<br>" +
           "x !== y is ====> Aynı ve Eşit değil midir? (true)<br>" +
           "x > y is ====> x, y'den büyüktür. (true)<br>" +
           "x >= y is ====> x, y'den büyük veya eşittir. (true)<br>" +
           "x && y > 1 is ====> x ve y 1'den büyük müdür? (true)<br>";


