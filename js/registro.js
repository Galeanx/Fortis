const formulario = document.querySelector('.user-form');
const username = document.querySelector('.username');
const password = document.querySelector('.password');

function registrarUsuario(e) {
    e.preventDefault();

    let newUser = {
        userName: username.value,
        userPass: password.value
    };

    // Guardar usuario en localStorage
    localStorage.setItem('user', JSON.stringify(newUser));

    // Guardar usuario activo para mostrar en el index
    localStorage.setItem('usuario', JSON.stringify({ nombre: newUser.userName }));

    console.log('Usuario registrado con éxito');

    formulario.reset();
    window.location = "./ingreso.html"; // Redirigir al login
}

formulario.addEventListener('submit', registrarUsuario);
