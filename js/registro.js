document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("form-registro");
    const nombreUsuario = document.getElementById("nombre-usuario");
    const claveRegistro = document.getElementById("clave-registro");
    const confirmarClave = document.getElementById("confirmar-clave");
    const mensajeError = document.getElementById("error-registro");

    formulario.addEventListener("submit", function (e) {
        e.preventDefault();

        const usuarioNuevo = {
            userNU: nombreUsuario.value.trim(),
            userP: claveRegistro.value,
            userLogged: false,
            certificado: false,
            progreso: 0, 
            progreso1: 0,
            progreso2: 0,
            progreso3: 0,
            progreso4: 0,
            progreso5: 0,
        };

        if (claveRegistro.value !== confirmarClave.value) {
            mensajeError.textContent = "Las contraseñas no coinciden.";
            return;
        }

        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

        const yaExiste = usuarios.some(u => u.userNU.toLowerCase() === usuarioNuevo.userNU.toLowerCase());

        if (yaExiste) {
            mensajeError.textContent = "El nombre de usuario ya está registrado.";
            return;
        }

        usuarios.push(usuarioNuevo);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        formulario.reset();
        mensajeError.textContent = "";

        // ✅ Asegúrate de que este código se ejecuta
        alert("✅ Registro exitoso. ¡Bienvenido a Fortis!");
        window.location.href = "../vistas/ingreso.html"; // o "../vistas/ingreso.html" según tu estructura
    });
});
