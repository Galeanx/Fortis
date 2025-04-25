const btnIniciarSesion = document.querySelector(".ingresar");
const perfilContainer = document.getElementById("perfil-container");
const logoutContainer = document.getElementById("logout-container");
const nombreUsuario = document.getElementById("usuario-pantalla");
const btnCerrarSesion = document.getElementById("logout-btn");
const moduloLinks = document.querySelectorAll(".modulo-link");

let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

function verificarSesion() {
    let usuarioLogueado = usuarios.find(u => u.userLogged);

    if (usuarioLogueado) {
        nombreUsuario.textContent = `${usuarioLogueado.userNU}`;
        btnIniciarSesion.style.display = "none";
        perfilContainer.style.display = "flex";
        logoutContainer.style.display = "flex";
    } else {
        nombreUsuario.textContent = "";
        btnIniciarSesion.style.display = "flex";
        perfilContainer.style.display = "none";
        logoutContainer.style.display = "none";
    }
}

function cerrarSesion() {
    usuarios = usuarios.map(u => ({
        ...u,
        userLogged: false
    }));
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    window.location.href = "./index.html";
}

document.addEventListener("DOMContentLoaded", verificarSesion);
btnCerrarSesion.addEventListener("click", cerrarSesion);

// Interceptar clics en los enlaces de módulos
moduloLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
        const usuario = JSON.parse(localStorage.getItem("usuarios"));
        const rutaModulo = this.getAttribute("data-modulo") || this.getAttribute("href");

        if (!usuario) {
            // Si no está logueado, lo dejamos ir a la página de ingreso
            return;
        }

        // Si está logueado, evitamos el comportamiento por defecto y lo redirigimos
        event.preventDefault();
        window.location.href = rutaModulo;
    });
});