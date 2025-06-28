document.getElementById('gastoForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita recargar la página

  // Obtener valores del formulario
  const fecha = document.getElementById('fecha').value;
  const categoria = document.getElementById('categoria').value;
  const descripcion = document.getElementById('descripcion').value;
  const monto = parseFloat(document.getElementById('monto').value).toFixed(2);

  // Validaciones
  if (!fecha || !categoria || !descripcion || isNaN(monto) || monto <= 0) {
    alert("Por favor completa todos los campos correctamente.");
    return;
  }

  // Insertar fila en la tabla
  const tbody = document.querySelector('#tablaGastos tbody');
  const fila = document.createElement('tr');

  fila.innerHTML = `
    <td>${fecha}</td>
    <td>${categoria}</td>
    <td>${descripcion}</td>
    <td>$${monto}</td>
  `;

  tbody.appendChild(fila);

  // Limpiar formulario
  document.getElementById('gastoForm').reset();

  // Opcional: mostrar en consola
  console.log({ fecha, categoria, descripcion, monto });
});