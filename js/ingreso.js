document.addEventListener("DOMContentLoaded", function () {
    const elementos = {
        formToggles: document.querySelectorAll('.form-toggle'),
        formContainers: document.querySelectorAll('.form-container'),
        perfilContainer: document.getElementById("perfil-container"),
        logoutBtn: document.getElementById("logout-btn"),
        ingresarBtn: document.querySelector(".ingresar"),
        nombreUsuario: document.getElementById("nombre-usuario"),
        perfilDropdown: document.getElementById("perfilDropdown"),
        registerForm: document.getElementById('registerForm'),
        loginForm: document.getElementById('loginForm'),
    };

    function verificarSesion() {
        let usuario = JSON.parse(localStorage.getItem("usuario"));

        if (usuario && usuario.nombre) {
            elementos.perfilContainer.style.display = "block";
            elementos.nombreUsuario.textContent = usuario.nombre.trim();
            if (elementos.ingresarBtn) elementos.ingresarBtn.style.display = "none";
        } else {
            elementos.perfilContainer.style.display = "none";
            if (elementos.ingresarBtn) elementos.ingresarBtn.style.display = "inline-block";
        }
    }

    if (elementos.logoutBtn) {
        elementos.logoutBtn.addEventListener("click", function () {
            localStorage.removeItem("usuario");
            verificarSesion();
            window.location.href = "./vistas/ingreso.html";
        });
    }

    if (elementos.perfilDropdown) {
        new bootstrap.Dropdown(elementos.perfilDropdown);
    }

    for (let toggle of elementos.formToggles) {
        toggle.addEventListener('click', () => {
            elementos.formToggles.forEach(t => t.classList.remove('active'));
            elementos.formContainers.forEach(f => f.classList.remove('active'));
            toggle.classList.add('active');
            document.getElementById(`${toggle.dataset.form}-form`).classList.add('active');
        });
    }

    if (elementos.registerForm) {
        elementos.registerForm.addEventListener('submit', function (e) {
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
            if (users.some(user => user.user === username)) {
                messageEl.textContent = '¡El nombre de usuario ya existe!';
                messageEl.classList.add('error-message');
                return;
            }

            users.push({
                user: username,
                pass: password,
                logged: false,
                progreso: 0,
            });

            localStorage.setItem('users', JSON.stringify(users));
            messageEl.textContent = 'Registro completado!';
            messageEl.classList.add('success-message');
            this.reset();
        });
    }

    if (elementos.loginForm) {
        elementos.loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const username = document.getElementById('loginUsername').value.trim().toLowerCase();
            const password = document.getElementById('loginPassword').value.trim();
            const messageEl = document.getElementById('loginMessage');

            messageEl.textContent = '';
            messageEl.classList.remove('error-message', 'success-message');

            const users = JSON.parse(localStorage.getItem('users') || '[]');
            const user = users.find(u => u.user.trim().toLowerCase() === username && u.pass === password);

            if (user) {
                messageEl.textContent = 'Inicio de sesión exitoso';
                messageEl.classList.add('success-message');
                localStorage.setItem("user", JSON.stringify({ nombre: user.user }));

                setTimeout(() => { window.location.href = "../index.html"; }, 1000);
            } else {
                messageEl.textContent = '¡Nombre de usuario o contraseña inválidos!';
                messageEl.classList.add('error-message');
            }
        });
    }

    verificarSesion();
});
