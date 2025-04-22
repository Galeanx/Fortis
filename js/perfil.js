document.addEventListener("DOMContentLoaded", function () {
    const perfilContainer = document.getElementById("perfil-container");
    const logoutContainer = document.getElementById("logout-container");
    const logoutBtn = document.getElementById("logout-btn");
    const ingresarBtn = document.querySelector(".ingresar");
    const nombreUsuario = document.getElementById("nombre-usuario");

    function verificarSesion() {
        let usuario = JSON.parse(localStorage.getItem("user"));

        if (usuario && usuario.nombre) {
            // Mostrar nombre del usuario y habilitar botones
            if (perfilContainer && nombreUsuario) {
                perfilContainer.style.display = "block";
                nombreUsuario.textContent = usuario.nombre.trim();
            }
            if (logoutContainer) logoutContainer.style.display = "block"; // Asegurar que aparezca
            if (ingresarBtn) ingresarBtn.style.display = "none";
        } else {
            // Usuario no logueado, ocultar botones
            if (perfilContainer) perfilContainer.style.display = "none";
            if (logoutContainer) logoutContainer.style.display = "none";
            if (ingresarBtn) ingresarBtn.style.display = "inline-block";
        }
    }

    if (logoutBtn) {
        logoutBtn.addEventListener("click", function () {
            localStorage.removeItem("user"); // Eliminar usuario activo
            verificarSesion(); // Actualizar vista
            window.location.href = "./vistas/ingreso.html"; // Redirigir al login
        });
    }

    // Inicializar sesión al cargar la página
    verificarSesion();
});

document.addEventListener("DOMContentLoaded", function () {
    const nombreUsuario = document.getElementById("nombre-usuario");
    const progresoGlobal = document.getElementById("progreso-global");
    const moduloBarras = {
        modulo1: document.getElementById("modulo1-barra"),
        modulo2: document.getElementById("modulo2-barra"),
        modulo3: document.getElementById("modulo3-barra"),
        modulo4: document.getElementById("modulo4-barra"),
        modulo5: document.getElementById("modulo5-barra")
    };
    const btnCertificado = document.getElementById("btn-certificado");

    let user = JSON.parse(localStorage.getItem("user")) || {
        nombre: "Invitado",
        progreso: 0,
        progreso_modulos: {
            modulo1: 0,
            modulo2: 0,
            modulo3: 0,
            modulo4: 0,
            modulo5: 0
        },
        certificado: false
    };

    // Mostrar nombre
    nombreUsuario.textContent = user.nombre;

    // Actualizar barras de módulos
    for (let modulo in moduloBarras) {
        let porcentaje = user.progreso_modulos[modulo] || 0;
        moduloBarras[modulo].style.width = `${porcentaje}%`;
        moduloBarras[modulo].textContent = `${porcentaje}%`;
    }

    // Calcular progreso global
    let modulosCompletados = Object.values(user.progreso_modulos).filter(val => val === 100).length;
    user.progreso = modulosCompletados * 20;
    progresoGlobal.style.width = `${user.progreso}%`;
    progresoGlobal.textContent = `${user.progreso}%`;

    // Guardar progreso global en localStorage
    localStorage.setItem("user", JSON.stringify(user));

    // Mostrar botón certificado solo si progreso === 100
    if (user.progreso === 100) {
        user.certificado = true;
        btnCertificado.disabled = false;
        btnCertificado.classList.remove("disabled");
    } else {
        user.certificado = false;
        btnCertificado.disabled = true;
        btnCertificado.classList.add("disabled");
    }

    // Actualizar LocalStorage por si se desbloquea certificado
    localStorage.setItem("user", JSON.stringify(user));
});

