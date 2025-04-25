document.addEventListener("DOMContentLoaded", () => {
    const btnIniciarSesion = document.querySelector(".ingresar");
    const btnCerrarSesion = document.querySelector("#logout-btn");
    const contenedorPerfil = document.querySelector("#perfil-container");
    const contenedorCerrarSesion = document.querySelector("#logout-container");
    const usuarioPantalla = document.querySelectorAll("#usuario-pantalla");
    const btnDescargar = document.querySelector(".btn-des");
  
    const barraGlobal = document.querySelector("#progreso-global");
    const barra1 = document.querySelector("#modulo1-barra");
    const barra2 = document.querySelector("#modulo2-barra");
    const barra3 = document.querySelector("#modulo3-barra");
    const barra4 = document.querySelector("#modulo4-barra");
    const barra5 = document.querySelector("#modulo5-barra");
  
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  
    function verificarSesion() {
      for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].userLogged) {
          const nombreUsuario = usuarios[i].userNU;
          
          // Mostrar nombre del usuario en todos los elementos #usuario-pantalla
          usuarioPantalla.forEach(el => el.textContent = nombreUsuario);
  
          // Mostrar perfil y botón cerrar sesión
          contenedorPerfil.style.display = "block";
          contenedorCerrarSesion.style.display = "block";
  
          // Ocultar botón Iniciar Sesión
          btnIniciarSesion.style.display = "none";
          return;
        }
      }
  
      // Si no hay usuario logueado
      contenedorPerfil.style.display = "none";
      contenedorCerrarSesion.style.display = "none";
      btnIniciarSesion.style.display = "block";
    }
  
    function cerrarSesion() {
      for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].userLogged) {
          usuarios[i].userLogged = false;
          localStorage.setItem("usuarios", JSON.stringify(usuarios));
          window.location.href = "../index.html";
          return;
        }
      }
    }
  
    function actualizarBarras() {
      for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].userLogged) {
          barraGlobal.style.width = `${usuarios[i].progreso}%`;
          barraGlobal.textContent = `${usuarios[i].progreso}%`;
  
          barra1.style.width = `${usuarios[i].progreso1}%`;
          barra1.textContent = `${usuarios[i].progreso1}%`;
  
          barra2.style.width = `${usuarios[i].progreso2}%`;
          barra2.textContent = `${usuarios[i].progreso2}%`;
  
          barra3.style.width = `${usuarios[i].progreso3}%`;
          barra3.textContent = `${usuarios[i].progreso3}%`;

          barra4.style.width = `${usuarios[i].progreso4}%`;
          barra4.textContent = `${usuarios[i].progreso4}%`;

          barra5.style.width = `${usuarios[i].progreso5}%`;
          barra5.textContent = `${usuarios[i].progreso5}%`;
  
          return;
        }
      }
    }
  
    function activarDescarga() {
      if (!btnDescargar) return;
    
      for (let i = 0; i < usuarios.length; i++) {
        const user = usuarios[i];
    
        if (user.userLogged && user.progreso === 100) {
          btnDescargar.disabled = false;
          btnDescargar.style.backgroundColor = "#7f1b33";
          btnDescargar.style.cursor = "pointer";
          user.certificado = true;
    
          // Guardar en LocalStorage
          localStorage.setItem("usuarios", JSON.stringify(usuarios));
    
          // Redirigir al hacer clic
          btnDescargar.addEventListener("click", () => {
            window.location.href = "../vistas/certificado.html";
          });
    
          return;
        }
      }
    }    
  
    verificarSesion();
    actualizarBarras();
    activarDescarga();
  
    if (btnCerrarSesion) {
      btnCerrarSesion.addEventListener("click", cerrarSesion);
    }
  });
  