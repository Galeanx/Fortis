document.getElementById("form-nombre").addEventListener("submit", function(e) {
    e.preventDefault();
    const nombre = document.getElementById("nombre-certificado").value.trim();

    if (nombre.length < 3) {
      alert("Por favor, ingresa un nombre válido.");
      return;
    }

    // Guardar nombre en localStorage para usar en certificado.html
    localStorage.setItem("nombreCertificado", nombre);

    // Redirigir a certificado.html
    window.location.href = "./vistas/certificado.html"; // Ajusta ruta si es necesario
  });