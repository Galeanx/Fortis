document.addEventListener("DOMContentLoaded", function () {
    const perfilContainer = document.getElementById("perfil-container");
    const logoutContainer = document.getElementById("logout-container");
    const logoutBtn = document.getElementById("logout-btn");
    const ingresarBtn = document.querySelector(".ingresar");
    const nombreUsuario = document.getElementById("nombre-usuario");
    const moduloLinks = document.querySelectorAll(".modulo-link");

    function verificarSesion() {
        let usuario = JSON.parse(localStorage.getItem("usuario"));

        if (usuario && usuario.nombre) {
            if (perfilContainer && nombreUsuario) {
                perfilContainer.style.display = "block";
                nombreUsuario.textContent = usuario.nombre.trim();
            }
            if (logoutContainer) logoutContainer.style.display = "block";
            if (ingresarBtn) ingresarBtn.style.display = "none";
        } else {
            if (perfilContainer) perfilContainer.style.display = "none";
            if (logoutContainer) logoutContainer.style.display = "none";
            if (ingresarBtn) ingresarBtn.style.display = "inline-block";
        }
    }

    if (logoutBtn) {
        logoutBtn.addEventListener("click", function () {
            localStorage.removeItem("usuario");
            verificarSesion();
            window.location.href = "./vistas/ingreso.html";
        });
    }

    // Interceptar clics en los enlaces de módulos
    moduloLinks.forEach((link) => {
        link.addEventListener("click", function (event) {
            let usuario = JSON.parse(localStorage.getItem("usuario"));
            let rutaModulo = this.getAttribute("data-modulo"); // Obtener la ruta del módulo

            if (usuario) {
                event.preventDefault(); // Evita la navegación predeterminada
                window.location.href = rutaModulo; // Redirige al módulo si está logueado
            } else {
                // Deja que el enlace funcione normalmente y lo mande a ingreso.html
            }
        });
    });

    verificarSesion();
});
