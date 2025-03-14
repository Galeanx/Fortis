document.addEventListener("DOMContentLoaded", function () {
    const formToggles = document.querySelectorAll('.form-toggle');
    const formContainers = document.querySelectorAll('.form-container');
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

    if (perfilDropdown) {
        new bootstrap.Dropdown(perfilDropdown);
    }

    formToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            formToggles.forEach(t => t.classList.remove('active'));
            formContainers.forEach(f => f.classList.remove('active'));
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
            messageEl.textContent = 'Las contraseñas no coinciden!';
            messageEl.classList.add('error-message');
            return;
        }

        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const existingUser = users.find(user => user.username === username);

        if (existingUser) {
            messageEl.textContent = '¡El nombre de usuario ya existe! 🙄';
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
        const username = document.getElementById('loginUsername').value.trim().toLowerCase();
        const password = document.getElementById('loginPassword').value.trim();
        const messageEl = document.getElementById('loginMessage');

        messageEl.textContent = '';
        messageEl.classList.remove('error-message', 'success-message');

        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const user = users.find(u => u.username.trim().toLowerCase() === username && u.password === password);

        if (user) {
            messageEl.textContent = 'Inicio de sesión exitoso';
            messageEl.classList.add('success-message');
            localStorage.setItem("usuario", JSON.stringify({ nombre: user.username }));
            window.location.href = "../index.html"; // Redirigir a la página de inicio

            verificarSesion();
            setTimeout(() => { window.location.href = "../index.html"; }, 1000);
        } else {
            messageEl.textContent = '¡Nombre de usuario o contraseña inválidos!';
            messageEl.classList.add('error-message');
        }
    });

    verificarSesion();
});