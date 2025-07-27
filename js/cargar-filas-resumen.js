// URL de tu Google Apps Script (ya proporcionada)
const URL = "https://script.google.com/macros/s/AKfycbwBl1wapgc4a2dTGpbluP_oeBPnQaI2pJeo2n9MHbYwJJ7d13xxnbuIBlhkwE7ubk-r/exec";

// Función que obtiene los datos y los muestra en la tabla
fetch(URL)
  .then(response => response.json())
  .then(data => {
    const tabla = document.getElementById("tabla-datos");

    data.forEach(fila => {
      const tr = document.createElement("tr");

      // Ajusta las columnas a tu orden específico
      tr.innerHTML = `
        <td class="left">${fila.Fecha || ""}</td>
        <td class="right">${fila.Cliente || ""}</td>
        <td class="right">${fila.PagosS || ""}</td>
        <td class="right">${fila.PagosD || ""}</td>
        <td class="right">${fila.GastosS || ""}</td>
        <td class="right">${fila.GastosD || ""}</td>
        <td class="right">${fila.SaldoS || ""}</td>
        <td class="right">${fila.SaldoD || ""}</td>
      `;

      tabla.appendChild(tr);
    });
  })
  .catch(error => {
    console.error("Error al cargar los datos:", error);
  });
