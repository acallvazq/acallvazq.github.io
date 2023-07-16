window.onload = function() {
    var contenido = document.getElementById("contenido");
    var colores = ["red", "yellow" ,"green","aquamarine", "blue", "pink", "violet", "orange"]
    var indice = 0;

    setInterval(() => {
        contenido.style.background = colores[indice];
        indice = (indice + 1) % colores.length;
    
    }, 1000);
};