document.addEventListener("DOMContentLoaded", function () {
    const nombreEl = document.getElementById("nombre-estudiante");
    const fechaEl = document.getElementById("fecha-completion");
    const idEl = document.getElementById("certificado-id");
    const firmaNombreEl = document.getElementById("firma-nombre");
    const firmaTituloEl = document.getElementById("firma-titulo");

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const usuarioLogueado = usuarios.find(u => u.userLogged === true);

    if (!usuarioLogueado) {
        alert("⚠️ No se encontró un usuario logueado. No se puede generar el certificado.");
        return;
    }

    // Insertar el nombre del usuario (desde input o registro)
    const nombreDesdeInput = localStorage.getItem("nombreCertificado");
    nombreEl.textContent = nombreDesdeInput || usuarioLogueado.userNU;

    // Insertar la fecha actual
    const fecha = new Date();
    const fechaFormateada = fecha.toLocaleDateString("es-ES", {
        day: "2-digit",
        month: "long",
        year: "numeric"
    });
    fechaEl.textContent = "Completado el: " + fechaFormateada;

    // Generar ID del certificado
    const idCertificado = "FORTIS-" + Math.floor(Math.random() * 1000000);
    idEl.textContent = "ID del Certificado: " + idCertificado;

    // Personaliza tu firma
    firmaNombreEl.textContent = "Equipo Fortis";
    firmaTituloEl.textContent = "Instructor / Coordinador MOOC";

    // Función para descargar como PDF
    const btnDescargar = document.getElementById("btn-descargar");
    if (btnDescargar) {
        btnDescargar.addEventListener("click", () => {
            const elemento = document.querySelector(".certificado-container");

            const opciones = {
                margin: 0,
                filename: `Certificado-${nombreEl.textContent}.pdf`,
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };

            html2pdf().from(elemento).set(opciones).save();
        });
    }
});
