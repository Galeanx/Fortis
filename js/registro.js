const formulario = document.querySelector('.user-form');
const username = document.querySelector('.username');
const password = document.querySelector('.password');

function registrarUsuario(e) {
    e.preventDefault();
    let user = {
        userN: Username.value,
        userP: Password.value,
        userC: Correo.value,
        userA: Apellidos.value,
        userLogged: false
    }

let usuarios = JSON.parse(localStorage.getItem("usuarios")) || []

for (let i= 0; i <usuarios.length; i++) {
    if(Username.value ===)
}




usuarios.push(user)

localStorage.setItem("usuarios", JSON.stringify(usuarios));
formulario.reset()
window.location = "../vistas/ingresar.html"





    // Guardar usuario en localStorage
    localStorage.setItem('user', JSON.stringify(newUser));

    // Guardar usuario activo para mostrar en el index
    localStorage.setItem('usuario', JSON.stringify({ nombre: newUser.userName }));

    console.log('Usuario registrado con éxito');

    formulario.reset();
    window.location = "./ingreso.html"; // Redirigir al login
}

formulario.addEventListener('submit', registrarUsuario);
