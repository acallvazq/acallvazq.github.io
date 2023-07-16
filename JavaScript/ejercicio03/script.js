window.onload = function() {
    var contenido = document.getElementById("contenido");

    setInterval(() => {
        var fecha = new Date();
        var hora = fecha.getHours();
        var minutos = fecha.getMinutes();
        var segundos = fecha.getSeconds();

        hora = (hora < 10) ? "0" + hora : hora;
        minutos = (minutos < 10) ? "0" + minutos : minutos;
        segundos = (segundos < 10) ? "0" + segundos : segundos;

        contenido.innerHTML = hora + ":" + minutos + ":" + segundos;
    
    }, 1000);
};
