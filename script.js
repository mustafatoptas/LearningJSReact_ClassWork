function loadContent(topic) {
    var filePath = topic + "/" + topic + ".js";  
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            var script = document.createElement('script');
            script.textContent = data;
            document.body.appendChild(script);
        })
        .catch(error => console.error('Error:', error));
}

function toggleMenu() {
    var menu = document.getElementById('menu-items');
    menu.classList.toggle('open');
}
