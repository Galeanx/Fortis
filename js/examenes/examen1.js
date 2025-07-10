document.addEventListener("DOMContentLoaded", function () {
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const quizForm = document.querySelector('#quizForm');
    const btnIniciarSesion = document.querySelector(".ingresar");
    const perfilContainer = document.getElementById("perfil-container");
    const logoutContainer = document.getElementById("logout-container");
    const nombreUsuario = document.getElementById("usuario-pantalla");
    const btnCerrarSesion = document.getElementById("logout-btn");

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

            if (usuarioLogueado.progreso_modulos.modulo1 === 100) {
                alert("⚠️ Ya has completado este examen.");
                return;
            }

            const respuestasUser = {
                p1: document.querySelector('input[name="elementos"]:checked')?.value,
                p2: document.querySelector('input[name="componente"]:checked')?.value,
                p3: document.querySelector('input[name="funciones"]:checked')?.value,
                p4: document.querySelector('input[name="importancia"]:checked')?.value,
                p5: document.querySelector('input[name="relacion"]:checked')?.value,
            };

            const respuestasCorrectas = {
                p1: "París",
                p2: "Júpiter",
                p3: "6",
                p4: "Garcilaso",
                p5: "Cobre",
            };

            let acumulado = 0;
            for (let key in respuestasCorrectas) {
                if (respuestasUser[key] === respuestasCorrectas[key]) {
                    acumulado++;
                }
            }

            if (acumulado >= 3) {
                alert("✅ ¡Examen aprobado!");
                usuarioLogueado.progreso += 20;
                usuarioLogueado.progreso1 = 100;
                usuarioLogueado.progreso_modulos.modulo1 = 100;
                console.log("🎉 ¡Progreso actualizado!");
                window.location.href = "../vistas/perfil.html";
            } else {
                alert("❌ No alcanzaste la puntuación mínima. Intenta nuevamente.");
                console.log("😓 Examen no aprobado. No se actualizó el progreso.");
            }

            localStorage.setItem("usuarios", JSON.stringify(usuarios));
            console.log(`🔎 Respuestas correctas: ${acumulado} de 5`);
        });
    }

    verificarSesion();
});