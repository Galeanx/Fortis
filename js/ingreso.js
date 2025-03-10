  const formToggles = document.querySelectorAll('.form-toggle');
  const formContainers = document.querySelectorAll('.form-container');

  document.addEventListener("DOMContentLoaded", function () {
    const perfilContainer = document.getElementById("perfil-container");
    const logoutBtn = document.getElementById("logout-btn");
    const ingresarBtn = document.querySelector(".ingresar");
    const nombreUsuario = document.getElementById("nombre-usuario");
    const perfilDropdown = document.getElementById("perfilDropdown");

    function verificarSesion() {
        let usuario = JSON.parse(localStorage.getItem("usuario"));

        if (usuario && usuario.nombre) {
            perfilContainer.style.display = "block";
            nombreUsuario.textContent = usuario.nombre.trim();
            if (ingresarBtn) ingresarBtn.style.display = "none";
        } else {
            perfilContainer.style.display = "none";
            if (ingresarBtn) ingresarBtn.style.display = "inline-block";
        }
    }

    if (logoutBtn) {
        logoutBtn.addEventListener("click", function () {
            localStorage.removeItem("usuario");
            verificarSesion();
            window.location.href = "./vistas/ingreso.html";
        });
    }

    // 🔹 Forzar inicialización del dropdown
    if (perfilDropdown) {
        new bootstrap.Dropdown(perfilDropdown);
    }

    verificarSesion();
});

  formToggles.forEach(toggle => {
      toggle.addEventListener('click', () => {
          formToggles.forEach(t => t.classList.remove('active'));
          formContainers.forEach(f => f.classList.remove('active'));

          // Add active class to clicked toggle and corresponding form
          toggle.classList.add('active');
          document.getElementById(`${toggle.dataset.form}-form`).classList.add('active');
      });
  });

  document.getElementById('registerForm').addEventListener('submit', function(e) {
      e.preventDefault();
      const username = document.getElementById('registerUsername').value;
      const password = document.getElementById('registerPassword').value;
      const confirmPassword = document.getElementById('confirmPassword').value;
      const messageEl = document.getElementById('registerMessage');

      messageEl.textContent = '';
      messageEl.classList.remove('error-message', 'success-message');

      if (password !== confirmPassword) {
          messageEl.textContent = 'Passwords do not match!';
          messageEl.classList.add('error-message');
          return;
      }

      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const existingUser = users.find(user => user.username === username);

      if (existingUser) {
          messageEl.textContent = '¡El nombre de usuario ya existe!';
          messageEl.classList.add('error-message');
          return;
      }

      users.push({ username, password });
      localStorage.setItem('users', JSON.stringify(users));

      messageEl.textContent = 'Registro completado!';
      messageEl.classList.add('success-message');
      this.reset();
  });

  document.getElementById('loginForm').addEventListener('submit', function(e) {
      e.preventDefault();
      const username = document.getElementById('loginUsername').value;
      const password = document.getElementById('loginPassword').value;
      const messageEl = document.getElementById('loginMessage');

      messageEl.textContent = '';
      messageEl.classList.remove('error-message', 'success-message');

      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find(u => u.username === username && u.password === password);

      if (user) {
          messageEl.textContent = 'Inicio de sesión exitoso';
          messageEl.classList.add('success-message');
          this.reset();
      } else {
          messageEl.textContent = '¡Nombre de usuario o contraseña inválidos!';
          messageEl.classList.add('error-message');
      }
  });

  document.addEventListener('DOMContentLoaded', function () {
    const perfilContainer = document.getElementById('perfil-container');
    const logoutContainer = document.getElementById('logout-container');
    const nombreUsuario = document.getElementById('nombre-usuario');
    const ingresarBtn = document.querySelector('.ingresar');

    // Verificar en qué página está
    const esPaginaPrincipal = window.location.pathname.endsWith('index.html') || window.location.pathname === '/';

    // Simulación de sesión (ajusta según tu lógica real)
    const usuario = JSON.parse(localStorage.getItem('usuarioLogueado'));

    // Solo mostrar icono y logout si está logueado y NO está en la página principal
    if (usuario && !esPaginaPrincipal) {
        perfilContainer.style.display = 'flex';
        logoutContainer.style.display = 'flex';
        ingresarBtn.style.display = 'none'; // Oculta botón ingresar
        nombreUsuario.textContent = usuario.nombre; // Muestra nombre del usuario
    }

    // Función para cerrar sesión
    document.getElementById('logout-btn').addEventListener('click', function () {
        localStorage.removeItem('usuarioLogueado');
        location.reload(); // Recargar para actualizar vista
    });
});
