document.addEventListener("DOMContentLoaded", function () {
    const perfilContainer = document.getElementById("perfil-container");
    const logoutBtn = document.getElementById("logout-btn");
    const ingresarBtn = document.querySelector(".ingresar");
    const nombreUsuario = document.getElementById("nombre-usuario");
    const perfilDropdown = document.getElementById("perfilDropdown");

    function verificarSesion() {
        let usuario = JSON.parse(localStorage.getItem("usuario"));

        if (usuario && usuario.nombre) {
            perfilContainer.style.display = "block";
            nombreUsuario.textContent = usuario.nombre.trim();
            if (ingresarBtn) ingresarBtn.style.display = "none";
        } else {
            perfilContainer.style.display = "none";
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

    // 🔹 Forzar inicialización del dropdown
    if (perfilDropdown) {
        new bootstrap.Dropdown(perfilDropdown);
    }

    verificarSesion();
});
