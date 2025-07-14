document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("form-ingreso");
  const inputUsuario = document.getElementById("nombre-usuario");
  const inputClave = document.getElementById("clave-ingreso");

  formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuarioEncontrado = usuarios.find(user =>
      user.userNU.trim().toLowerCase() === inputUsuario.value.trim().toLowerCase() &&
      user.userP === inputClave.value
    );

    if (usuarioEncontrado) {
      usuarioEncontrado.userLogged = true;
      localStorage.setItem("usuarios", JSON.stringify(usuarios));

      // Mostrar nombre personalizado en el modal
      const saludoEl = document.getElementById("bienvenida-usuario");
      saludoEl.textContent = `¡Bienvenido, ${usuarioEncontrado.userNU}! `;

      mostrarPopup("popup-bienvenida");

      // Redirige a index después de 2.5 segundos
      setTimeout(() => {
        cerrarPopup("popup-bienvenida");
        window.location.href = "../index.html";
      }, 2500);
    } else {
      mostrarPopup("popup-error-login");
      formulario.reset();
    }
  });
});

function mostrarPopup(id) {
  document.getElementById(id).style.display = "flex";
}

function cerrarPopup(id) {
  document.getElementById(id).style.display = "none";
}
