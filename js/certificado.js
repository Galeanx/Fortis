document.addEventListener("DOMContentLoaded", function () {
  const nombreEl = document.getElementById("nombre-estudiante");

  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  const usuarioLogueado = usuarios.find(u => u.userLogged === true);

  if (!usuarioLogueado) {
    nombreEl.textContent = "[Usuario no encontrado]";
  } else {
    const nombreDesdeInput = localStorage.getItem("nombreCertificado");
    nombreEl.textContent = nombreDesdeInput || usuarioLogueado.userNU;
  }

  // Descargar como PDF
  document.getElementById("descargarPDF").addEventListener("click", () => {
    const certificado = document.querySelector(".certificate");

    const opciones = {
      margin: 10,
      filename: "certificado-fortis.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, scrollY: 0 },
      jsPDF: {
        unit: "pt",
        format: [1120, 1000], // Tamaño personalizado para evitar recortes
        orientation: "portrait"
      }
    };

    html2pdf().set(opciones).from(certificado).save();
  });
});
