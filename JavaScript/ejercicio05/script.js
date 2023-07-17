window.onload = function() {
    var contenido = document.getElementById("contenido");
    var hora = "00";
    var minutos = "00";
    var segundos = "00";

    contenido.innerHTML = hora + ":" + minutos + ":" + segundos;
};

function actualizaSegundos(pSegundos) {
    var contenido = document.getElementById("contenido");
    var hora = "0";
    var minutos = "0";
    var segundos = "0";

    if(!isNaN(pSegundos) && pSegundos !== ""){
        segundos = parseInt(pSegundos);
        if(segundos > 59) {
            minutos = Math.floor(segundos / 60);
            segundos = segundos % 60; 
        }if(minutos > 59){
            hora = Math.floor(minutos / 60);
            minutos = minutos % 60; 

        }if(hora >= 24){
            hora = 24;
            minutos = 0;
            segundos = 0;
        }
    }

    hora = (hora < 10) ? "0" + hora : hora;
    minutos = (minutos < 10) ? "0" + minutos : minutos;
    segundos = (segundos < 10) ? "0" + segundos : segundos;

    contenido.innerHTML = hora + ":" + minutos + ":" + segundos;

}

function cuentaAtras(segundos){
    var segundos = document.getElementById("segundos").value;
    document.getElementById("segundos").value = "";
    var temporizador;
    actualizaSegundos(segundos);
    
    temporizador = setInterval(function() {
        if(segundos > 0){
            actualizaSegundos(segundos);
            segundos--;
        }else {
            document.getElementById("cajaMensaje").style.display = "block";
            clearInterval(temporizador);
        }      

    }, 1000);

}

function detenerAlarma(){
    document.getElementById("cajaMensaje").style.display = "none";
    actualizaSegundos(0);


}