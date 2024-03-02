function loadContent(topic) {
  let filePath = topic + "/" + topic + ".js";
  fetch(filePath)
    .then((response) => response.text())
    .then((data) => {
      var existingScript = document.getElementById("dynamic-script");
      if (existingScript !== null) {
        console.log(
          "exist script before deleting " + existingScript.textContent//silmeden önce oluşan scripti existing olarak alabiliyor.
        );
        existingScript.textContent = "";
        console.log("exist script after deleting" + existingScript.textContent);//silme işlemi gerçekleşiyor. sorun yok

        existingScript.textContent = data;
        console.log("exist script pushed " + existingScript.textContent);//yeni script basılıyor burada da bir sorun yok.
        window.location.assign(
          "http://127.0.0.1:5500/r%C4%B1fat/r%C4%B1fat.html"//bu kod gereksiz. yukarıdaki her şey çalışıyor fakat yeni script sayfaya basılmıyor. 
                                                            // ben de sayfayı yeniden yükleyip yeni scripti çalıştırmak istedim.
                                                            // yani yeni script datası alınıyor görünüyor fakat eski script çalışmaya devam ediyor.
                                                            //ve yeni menuyu load etmemiz için iki kez tıklamamız gerekiyor. buradaki sorun da bu.
        );
        //document.body.appendChild(existingScript);
      } else {
        var script = document.createElement("script");
        script.id = "dynamic-script";
        script.textContent = data;
        document.body.appendChild(script);
        console.log("orj script:" + script.textContent);
      }
    })

    .catch((error) => console.error("Error:", error));
}
