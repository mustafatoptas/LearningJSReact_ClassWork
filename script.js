function loadContent(topic) {
  var filePath = topic + "/" + topic + ".js";
  console.log(topic);
  fetch(filePath)
    .then((response) => response.text())
    .then((data) => {
      var script = document.createElement("script");
      script.textContent = data;
      document.body.appendChild(script);
      console.log(script);
    })
    .catch((error) => console.error("Error:", error));
}
