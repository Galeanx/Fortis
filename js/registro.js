document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("form-registro");
  const nombreUsuario = document.getElementById("nombre-usuario");
  const claveRegistro = document.getElementById("clave-registro");
  const confirmarClave = document.getElementById("confirmar-clave");

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

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const yaExiste = usuarios.some(
      u => u.userNU.toLowerCase() === usuarioNuevo.userNU.toLowerCase()
    );

    if (claveRegistro.value !== confirmarClave.value || yaExiste) {
      mostrarPopup('popup-error');
      formulario.reset();
      return;
    }

    usuarios.push(usuarioNuevo);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    formulario.reset();
    mostrarPopup('popup-exito');

    // Redirige luego de 3 segundos
    setTimeout(() => {
      cerrarPopup('popup-exito');
      window.location.href = "../vistas/ingreso.html";
    }, 5000);
  });
});

function mostrarPopup(id) {
  document.getElementById(id).style.display = "flex";
}

function cerrarPopup(id) {
  document.getElementById(id).style.display = "none";
}
