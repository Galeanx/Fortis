const Ingresar = document.getElementById('btnIngresar');
const container = document.querySelector('.container');
const textobusqueda = document.querySelector('#textobusqueda');
const buscador = document.querySelector('#search-container');

/* Actualización codigo */

document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('open');
});
function ingresar() {
    window.location = './vistas/ingreso.html';
}

Ingresar.addEventListener('click', ingresar);

function mostrarResults(filtro) {
    container.innerHTML = ""; // Limpiar los módulos previos
    console.log("Módulos a mostrar:", filtro);

    if (filtro.length === 0) {
        console.log("No se encontraron módulos que coincidan con la búsqueda.");
    }

    filtro.forEach(modulo => {
        const mod = document.createElement('div');
        mod.classList.add('mod');

        mod.innerHTML = `
            <div class="card">
                <div class="card-header">
                    <img src="${modulo.img}" alt="${modulo.nombre}">
                </div>
                <div class="card-body">
                    <h1 class="nombre">${modulo.nombre}</h1>
                    <p class="text">${modulo.descripcion}</p>
                    <a href="${modulo.link}">Ver más</a>
                </div>
            </div>
        `;

        container.appendChild(mod);
    });
}

function filtrar(e) {
    e.preventDefault();
    container.innerHTML = "";

    let filtro = modulos;

    // Filtrar por búsqueda de texto
    if (textobusqueda.value) {
        filtro = filtro.filter(modulo =>
            modulo.nombre.toLowerCase().includes(textobusqueda.value.toLowerCase())
        );
    }

    console.log("Resultado del filtro:", filtro);

    // Mostrar los resultados filtrados
    mostrarResults(filtro);
}

// Event listener para el formulario de búsqueda
buscador.addEventListener('submit', filtrar);

document.addEventListener('DOMContentLoaded', function() {
    const btnCerrarSesion = document.getElementById('btnCerrarSesion');
    const saludoUsuario = document.getElementById('saludoUsuario');

    function verificarSesion() {
        let currentUser = JSON.parse(localStorage.getItem('user'));

        if (currentUser) {
            // Si hay un usuario logueado, mostrar su nombre y ocultar botones
            saludoUsuario.textContent = `Bienvenido ${currentUser.userName}`;
            Ingresar.style.display = 'none';
            btnCerrarSesion.style.display = 'inline-block';
        } else {
            // Si no hay usuario logueado, mostrar los botones y ocultar el nombre
            saludoUsuario.textContent = '';
            Ingresar.style.display = 'inline-block';
            btnCerrarSesion.style.display = 'none';
        }
    }

    btnCerrarSesion.addEventListener('click', function() {
        localStorage.removeItem('user');
        verificarSesion(); // Actualiza la vista después de cerrar sesión
    });

    // Inicializa la verificación de sesión
    verificarSesion();

    // Mostrar todos los módulos al cargar la página
    mostrarResults(modulos);
});
