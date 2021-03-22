leerArchivo = (e) => {
  // files para acceder a la lista de archivos
  let archivo = e.target.files[0];
  // En caso de que no exista un archivo, no hacer nada
  if (!archivo) {
    return;
  }

  // FileReader para leer el contenido de un fie
  let lector = new FileReader();

  lector.onload = function(e) {
    let contenido = e.target.result;
    // ejecuta la función encargada de cargar el contenido en pantalla
    mostrarContenido(contenido);
  };

  // Regresa el contenido del archivo
  lector.readAsText(archivo);
} 

mostrarContenido = (contenido) => {
  
  let elemento = document.querySelector('#contenido-archivo');
  // Mostrar el contenido en el DOM
  elemento.innerHTML = contenido;

}

let input = document.querySelector('#file-input');
// Cada que ocurra un cambio se vuelve a ejecutar la función
input.addEventListener('change', leerArchivo);
