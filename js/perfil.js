document.addEventListener("DOMContentLoaded", function () {
    const perfilContainer = document.getElementById("perfil-container");
    const logoutContainer = document.getElementById("logout-container");
    const logoutBtn = document.getElementById("logout-btn");
    const ingresarBtn = document.querySelector(".ingresar");
    const nombreUsuario = document.getElementById("nombre-usuario");

    function verificarSesion() {
        let usuario = JSON.parse(localStorage.getItem("user"));

        if (usuario && usuario.nombre) {
            // Mostrar nombre del usuario y habilitar botones
            if (perfilContainer && nombreUsuario) {
                perfilContainer.style.display = "block";
                nombreUsuario.textContent = usuario.nombre.trim();
            }
            if (logoutContainer) logoutContainer.style.display = "block"; // Asegurar que aparezca
            if (ingresarBtn) ingresarBtn.style.display = "none";
        } else {
            // Usuario no logueado, ocultar botones
            if (perfilContainer) perfilContainer.style.display = "none";
            if (logoutContainer) logoutContainer.style.display = "none";
            if (ingresarBtn) ingresarBtn.style.display = "inline-block";
        }
    }

    if (logoutBtn) {
        logoutBtn.addEventListener("click", function () {
            localStorage.removeItem("user"); // Eliminar usuario activo
            verificarSesion(); // Actualizar vista
            window.location.href = "./vistas/ingreso.html"; // Redirigir al login
        });
    }

    // Inicializar sesión al cargar la página
    verificarSesion();
});

// Mostrar progreso y certificado
const progresoBarra = document.getElementById("progreso-barra");
const progresoTexto = document.getElementById("progreso-texto");
const btnCertificado = document.getElementById("btn-certificado");
const listaModulos = document.getElementById("lista-modulos");

const user = JSON.parse(localStorage.getItem("user")) || { progreso: 0, modulosCompletados: [], certificado: false };

progresoBarra.style.width = `${user.progreso}%`;
progresoTexto.textContent = `${user.progreso}%`;

if (user.certificado) {
btnCertificado.style.display = "inline-block";
btnCertificado.addEventListener("click", () => {
    window.open("../sources/certificado.pdf", "_blank");
});
}

// Mostrar módulos completados
if (Array.isArray(user.modulosCompletados)) {
user.modulosCompletados.forEach(mod => {
    const item = document.createElement("li");
    item.classList.add("list-group-item");
    item.textContent = `✅ ${mod}`;
    listaModulos.appendChild(item);
});
}

