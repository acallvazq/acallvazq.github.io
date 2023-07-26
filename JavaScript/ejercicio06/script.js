const imagenes = [
    "images/fondo1.jpg",
    "images/fondo2.jpg",
    "images/fondo3.jpg",
    "images/fondo4.jpg",
    "images/fondo5.jpg"
];

let nImagenes = 0;
let valorInput = 0;

window.onload = function() {
    displayPosEliminar();
    valorInput = Math.floor(document.getElementById("pos-delete").value);

};

function agregarImagenes() {
    if(nImagenes < imagenes.length){
        const imagenContainer = document.getElementById("contendor");
        const nuevaImagen = document.createElement("img");

        nuevaImagen.src = imagenes[nImagenes];
        imagenContainer.appendChild(nuevaImagen);
        nImagenes++;

        if(nImagenes == imagenes.length) {
            document.getElementById("inicio").disabled = true;
        }

        displayPosEliminar();
    }   
}

function eliminarImagenes() {
    if (valorInput >= 1 && valorInput <= nImagenes) {
      const imagenContainer = document.getElementById('contendor');
      const imagenAEliminar = imagenContainer.children[valorInput - 1];
      imagenContainer.removeChild(imagenAEliminar);
      nImagenes--;
  
      document.getElementById('inicio').disabled = false;
  
      // Actualizar el valor máximo del input número
      if(document.getElementById("pos-delete").value > nImagenes && nImagenes > 0) document.getElementById("pos-delete").value = nImagenes;
  
      // Si no hay imágenes, ocultar el input número nuevamente
      if (nImagenes === 0) {
        document.getElementById("posImagen").style.display = 'none';
      }
    } else {
      alert('Por favor, introduce un número válido dentro del rango actual.');
    }
  }

function displayPosEliminar() {
    let posicion = document.getElementById("posImagen");

    posicion.style.display = nImagenes == 0 ? "none" : "block";
}

function siguienteNumero() {
    const inputEliminar = document.getElementById("pos-delete");

    if(valorInput + 1 <= nImagenes) valorInput++;
 

    inputEliminar.value = valorInput;    
}

function anteriorNumero() {
    const inputEliminar = document.getElementById("pos-delete");

    if(valorInput - 1 >= 1) valorInput--;

    inputEliminar.value = valorInput;    
}