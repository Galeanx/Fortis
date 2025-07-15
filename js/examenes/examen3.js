document.addEventListener("DOMContentLoaded", function () {
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const quizForm = document.querySelector('#quizForm');
    const btnIniciarSesion = document.querySelector(".ingresar");
    const perfilContainer = document.getElementById("perfil-container");
    const logoutContainer = document.getElementById("logout-container");
    const nombreUsuario = document.getElementById("usuario-pantalla");
    const btnCerrarSesion = document.getElementById("logout-btn");
    const moduloLinks = document.querySelectorAll(".modulo-link");

    function verificarSesion() {
        let usuarioLogueado = usuarios.find(u => u.userLogged);

        if (usuarioLogueado) {
            if (nombreUsuario) nombreUsuario.textContent = usuarioLogueado.userNU;
            if (btnIniciarSesion) btnIniciarSesion.style.display = "none";
            if (perfilContainer) perfilContainer.style.display = "flex";
            if (logoutContainer) logoutContainer.style.display = "flex";
        } else {
            if (nombreUsuario) nombreUsuario.textContent = "";
            if (btnIniciarSesion) btnIniciarSesion.style.display = "flex";
            if (perfilContainer) perfilContainer.style.display = "none";
            if (logoutContainer) logoutContainer.style.display = "none";
        }
    }

    function cerrarSesion() {
        usuarios = usuarios.map(u => ({ ...u, userLogged: false }));
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        window.location.href = "../index.html";
    }

    if (btnCerrarSesion) {
        btnCerrarSesion.addEventListener("click", cerrarSesion);
    }

    if (quizForm) {
        quizForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const usuarioLogueado = usuarios.find(usuario => usuario.userLogged === true);

            if (!usuarioLogueado) {
                alert("⚠️ Debes iniciar sesión para realizar el examen.");
                return;
            }

            // Inicializar progreso_modulos si no existe
            if (!usuarioLogueado.progreso_modulos) {
                usuarioLogueado.progreso_modulos = {
                    modulo1: 0,
                    modulo2: 0,
                    modulo3: 0,
                    modulo4: 0,
                    modulo5: 0,
                };
            }

            if (usuarioLogueado.progreso_modulos.modulo3 === 100) {
                alert("⚠️ Ya has completado este examen.");
                return;
            }

            const respuestasUser = {
            p1: document.querySelector('input[name="respuesta1"]:checked')?.value,
            p2: document.querySelector('input[name="respuesta2"]:checked')?.value,
            p3: document.querySelector('input[name="respuesta3"]:checked')?.value,
            p4: document.querySelector('input[name="respuesta4"]:checked')?.value,
            p5: document.querySelector('input[name="respuesta5"]:checked')?.value,
            };

            const respuestasCorrectas = {
            p1: "Reaccion",
            p2: "Respiracion",
            p3: "Negativo",
            p4: "Clave",
            p5: "Meditacion",
            };

            let acumulado = 0;
            for (let key in respuestasCorrectas) {
                if (respuestasUser[key] === respuestasCorrectas[key]) {
                    acumulado++;
                }
            }

// ✅ ACTUALIZACIÓN DEL PROGRESO + MODAL
      const popup = document.getElementById("popup-examen");
      const mensajePrincipal = document.getElementById("mensajePrincipal");
      const mensajeSecundario = document.getElementById("mensajeSecundario");
      const imagenPopupExito = document.getElementById("imagenPopupExito");
      const imagenPopupError = document.getElementById("imagenPopupError");
      const continuarBtnContainer = document.getElementById("continuarBtnContainer");

      if (acumulado >= 3) {
        usuarioLogueado.progreso += 20;
        usuarioLogueado.progreso3 = 100;
        usuarioLogueado.progreso_modulos.modulo3 = 100;

        // 🔄 Reemplazar en el array original
        const index = usuarios.findIndex(u => u.userNU === usuarioLogueado.userNU);
        if (index !== -1) {
          usuarios[index] = usuarioLogueado;
        }

        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        popup.style.display = "flex";
        mensajePrincipal.textContent = "¡Examen aprobado!";
        mensajeSecundario.textContent = `Tu puntaje es ${acumulado} de 5`;
        imagenPopupExito.style.display = "block";
        imagenPopupError.style.display = "none";
        continuarBtnContainer.style.display = "block";

      } else {
        popup.style.display = "flex";
        mensajePrincipal.textContent = "Debes repetir el examen";
        mensajeSecundario.textContent = `Tu puntaje es ${acumulado} de 5`;
        imagenPopupExito.style.display = "none";
        imagenPopupError.style.display = "block";
        continuarBtnContainer.style.display = "none";
      }

      // 🔘 Botones
      document.getElementById("cerrarPopup").addEventListener("click", () => {
        popup.style.display = "none";
      });

      document.getElementById("irPerfilBtn").addEventListener("click", () => {
        window.location.href = "../vistas/perfil.html";
      });
    });
  }

  verificarSesion(); // ⚠️ NUNCA eliminar esta llamada
});
