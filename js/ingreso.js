const formulario = document.querySelector('.user-form');
const username = document.querySelector('.username');
const password = document.querySelector('.password');

function validarUsuario(e) {
    e.preventDefault();

    let currentUser = JSON.parse(localStorage.getItem('user'));

    if (!currentUser) {
        alert("No hay usuarios registrados. Por favor, regístrate primero.");
        return;
    }

    // Convertir el nombre de usuario a minúsculas para evitar errores de mayúsculas
    let inputUser = username.value.trim().toLowerCase();
    let storedUser = currentUser.userName.trim().toLowerCase();
    let inputPass = password.value.trim();
    let storedPass = currentUser.userPass.trim();

    if (inputUser === storedUser && inputPass === storedPass) {
        console.log("Felicidades, puedes entrar 🔥");

        // Guardar el usuario activo en localStorage
        localStorage.setItem("usuario", JSON.stringify({ nombre: currentUser.userName }));

        // Redirigir al usuario a la página principal
        window.location.href = "../index.html";
    } else {
        alert("Usuario o contraseña incorrectos. Inténtalo de nuevo.");
        console.log("Sigue intentando");
    }

    formulario.reset();
}

formulario.addEventListener("submit", validarUsuario);
