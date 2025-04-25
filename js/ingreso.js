document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("form-ingreso");
    const inputUsuario = document.getElementById("nombre-usuario");
    const inputClave = document.getElementById("clave-ingreso");
    const mensajeError = document.getElementById("error-ingreso");

    formulario.addEventListener("submit", function (e) {
        e.preventDefault();

        const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        const usuarioEncontrado = usuarios.find(user =>
            user.userNU.trim().toLowerCase() === inputUsuario.value.trim().toLowerCase() &&
            user.userP === inputClave.value
        );

        if (usuarioEncontrado) {
            usuarioEncontrado.userLogged = true;

            // Actualiza la lista completa en localStorage
            localStorage.setItem("usuarios", JSON.stringify(usuarios));

            mensajeError.textContent = "";
            alert(`¡Bienvenido, ${usuarioEncontrado.userNU}! 🎉`);
            window.location.href = "../index.html";
        } else {
            mensajeError.textContent = "❌ Usuario o contraseña incorrecta.";
            formulario.reset();
        }
    });
});

