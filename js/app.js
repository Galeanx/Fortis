/* 
Página de Inicio: Si hay un usuario en localStorage y tiene un nombre, se muestra el perfil del usuario, su nombre y el botón de cierre de sesión, mientras que el botón de ingresar se oculta. Cuando no hay usuario, el perfil y el botón de cierre de sesión se ocultan, y el botón de ingresar se muestra. Si el botón de cerrar sesión existe, al hacer clic en él, se elimina la sesión del usuario, se actualiza la interfaz y se redirige a la página de ingreso. Cuando el usuario está autenticado, al hacer clic en un módulo, se evita la navegación predeterminada y se redirige al módulo correspondiente.
Si no hay sesión, el enlace funciona de manera normal y lleva al usuario a la página de ingreso.

Página de Ingreso: Primero, al cargarse la página, se verifica si hay un usuario guardado. Si existe y tiene un nombre, se muestra su perfil y se oculta el botón de ingresar. Si no hay usuario, se oculta el perfil y se muestra el botón de ingresar.
Si el usuario desea cerrar sesión, al hacer clic en el botón correspondiente, su información se elimina del localStorage, se actualiza la interfaz y se redirige a la página de ingreso. En el proceso de registro, el sistema verifica que las contraseñas ingresadas coincidan. Si no lo hacen, muestra un mensaje de error y detiene el registro. Luego, revisa si el nombre de usuario ya existe en el localStorage. Si es así, muestra otro mensaje de error y no permite el registro. Si las validaciones se cumplen, el usuario se guarda en localStorage, mostrando un mensaje de éxito.
En el inicio de sesión, se comprueba si el nombre de usuario y la contraseña coinciden con un usuario almacenado. Si es correcto, se guarda la sesión, se muestra un mensaje de éxito y se redirige a la página de inicio. Si los datos no coinciden, se muestra un mensaje indicando que las credenciales son inválidas.
 */

document.addEventListener("DOMContentLoaded", function () {
    const perfilContainer = document.getElementById("perfil-container");
    const logoutContainer = document.getElementById("logout-container");
    const logoutBtn = document.getElementById("logout-btn");
    const ingresarBtn = document.querySelector(".ingresar");
    const nombreUsuario = document.getElementById("nombre-usuario");
    const moduloLinks = document.querySelectorAll(".modulo-link");

    function verificarSesion() {
        let usuario = JSON.parse(localStorage.getItem("user"));

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
            localStorage.removeItem("user");
            verificarSesion();
            window.location.href = "../vistas/ingreso.html";
        });
    }

    // Interceptar clics en los enlaces de módulos
    moduloLinks.forEach((link) => {
        link.addEventListener("click", function (event) {
            let usuario = JSON.parse(localStorage.getItem("user"));
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
