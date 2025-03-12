document.addEventListener("DOMContentLoaded", function () {
    const perfilContainer = document.getElementById("perfil-container");
    const logoutContainer = document.getElementById("logout-container");
    const logoutBtn = document.getElementById("logout-btn");
    const ingresarBtn = document.querySelector(".ingresar");
    const nombreUsuario = document.getElementById("nombre-usuario");

    function verificarSesion() {
        let usuario = JSON.parse(localStorage.getItem("usuario"));

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
            localStorage.removeItem("usuario"); // Eliminar usuario activo
            verificarSesion(); // Actualizar vista
            window.location.href = "./vistas/ingreso.html"; // Redirigir al login
        });
    }

    // Inicializar sesión al cargar la página
    verificarSesion();
});