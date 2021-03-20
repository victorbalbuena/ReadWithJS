leerArchivo = (e) => {
  let archivo = e.target.files[0];
if (!archivo) {
  return;
}
let lector = new FileReader();
lector.onload = function(e) {
  let contenido = e.target.result;
  mostrarContenido(contenido);
};
lector.readAsText(archivo);
} 

mostrarContenido = (contenido) => {
  let elemento = document.getElementById('contenido-archivo');
  elemento.innerHTML = contenido;
}

document.getElementById('file-input')
  .addEventListener('change', leerArchivo, false);


