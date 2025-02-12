const formulario = document.querySelector('.user-form');
const username = document.querySelector('.username');
const password = document.querySelector('.password');

function registrarUsuario(e) {
    e.preventDefault();

    let newUser = {
        userName: username.value,
        userPass: password.value
    };

    localStorage.setItem('user', JSON.stringify(newUser));
    console.log('Usuario registrado con éxito');

    formulario.reset();
    window.location = "./ingreso.html";
}

formulario.addEventListener('submit', registrarUsuario);