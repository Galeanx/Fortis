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

    // Insertar el nombre del usuario
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

    // Generar ID del certificado (puedes cambiar el algoritmo si quieres algo más complejo)
    const idCertificado = "FORTIS-" + Math.floor(Math.random() * 1000000);
    idEl.textContent = "ID del Certificado: " + idCertificado;

    // Personaliza tu firma
    firmaNombreEl.textContent = "Equipo Fortis";
    firmaTituloEl.textContent = "Instructor / Coordinador MOOC";
});
