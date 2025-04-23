//registrar datos del usuario
const Username = document.querySelector(".Username");
const Nombre = document.querySelector(".Nombre");
const Password = document.querySelector(".Password");
const formulario = document.querySelector(".formulario");

function registrarUser(e){
    e.preventDefault();
    let user = {
        userNU: Username.value,
        userN: Nombre.value,
        userP: Password.value,
        userLogged: false,
        certificado: false,
        progreso: 0,
        progreso1: 0,
        progreso2: 0,
        progreso3: 0,
        progreso4: 0,
        progreso5: 0,
    }
    //enviar información a local storage

    let usuarios = JSON.parse(localStorage.getItem("usuarios"))  || [];

    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].userC === Correo.value) {
            alert("Este correo ya está registrado. Usa otro o inicia sesión.");
            formulario.reset();
            return;
        }
    }

    usuarios.push(user)
    localStorage.setItem("usuarios", JSON.stringify(usuarios));   
    formulario.reset()
    window.location = "../vistas/inicio-sesion.html"
}

formulario.addEventListener("submit",registrarUser)