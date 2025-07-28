// Este script carga la tabla HTML desde componentes/tabla-resumen.html
document.addEventListener("DOMContentLoaded", function () {
  fetch("componentes/tabla-resumen.html")
    .then(response => response.text())
    .then(html => {
      document.getElementById("contenedor-tabla").innerHTML = html;
    })
    .catch(error => {
      console.error("Error al cargar la tabla:", error);
    });
});
