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
  
/*function loadContent(topic) {
    var filePath = topic + "/" + topic + ".js";  

    // Loading uyarısı 
    var loadingIndicator = document.createElement('div');
    loadingIndicator.textContent = 'Yükleniyor...';
    document.body.appendChild(loadingIndicator);

    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            // Yükleme tamamlandığında loading uyarısı kaldırılsın
            document.body.removeChild(loadingIndicator);

            var script = document.createElement('script');
            script.textContent = data;
            document.body.appendChild(script);
        })
        .catch(error => {
            // Hata oluştuğunda da loading uyarısını kaldırılsın
            document.body.removeChild(loadingIndicator);
            console.error('Error:', error);
        });
}*/
