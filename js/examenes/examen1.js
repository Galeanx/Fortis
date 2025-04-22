let user = JSON.parse(localStorage.getItem("user") )

const quizForm = document.querySelector('#quizForm')

function capturarRespuestas() {

    //Obtener valores selesccionados
    const elementos = document.querySelector('input[name="elementos"]:checked')?.value;
    const componente = document.querySelector('input[name="componente"]:checked')?.value;
    const funciones = document.querySelector('input[name="funciones"]:checked')?.value;
    const importancia = document.querySelector('input[name="importancia"]:checked')?.value;
    const relacion = document.querySelector('input[name="relacion"]:checked')?.value;

    return{
        p1: elementos,
        p2: componente,
        p3: funciones,
        p4: importancia,
        p5: relacion,
    }
}

function validarRespuestas (e) {
    e.preventDefault()

    const respuestasUser = capturarRespuestas()
    const respuestasCorrectas = {
        p1: "París",
        p2: "Júpiter",
        p3: "6",
        p4: "Garcilaso",
        p5: "Cobre",
    }

    let acumulado = 0

    const arrayRespuestasUser = Object.values(respuestasUser)
    const arrayRespuestasCorrectas = Object.values(respuestasCorrectas)

    //Recorre el array de arrayRespuestaUser y el de arrayRespuestasCorrectas y las compara
    for (let i = 0; i < arrayRespuestasUser.length; i++) {
        if(arrayRespuestasUser[i] == arrayRespuestasCorrectas [i]){
            acumulado++
        }

    }

    //Verifico cuanto lleva el usuario de progreso previo
    // let user = JSON.parse(localStorage.getItem("user")) || {};

    //Condicional que me dice si gané o perdí el examen
    if(acumulado >= 3 ){
        console.log("Ganaste el examen")
        user.progreso += 20
        console.log(user.progreso)
    }else{
        console.log("Debes repetir el examen")
    }

    console.log(acumulado)

    /*
    if (respuestasCorrectas.p1 === respuestasUser.p1){
        acumulado++
    }
    if (respuestasCorrectas.p2 === respuestasUser.p2){
        acumulado++
    }
    if (respuestasCorrectas.p3 === respuestasUser.p3){
        acumulado++
    }
    if (respuestasCorrectas.p4 === respuestasUser.p4){
        acumulado++
    }
    if (respuestasCorrectas.p5 === respuestasUser.p5){
        acumulado++
    } 

    console.log("Tu acumulado es: ", acumulado)


for (const key in respuestasCorrectas) {

    console.log(respuestasCorrectas[key])

    }*/
}

quizForm.addEventListener("submit", validarRespuestas)

document.addEventListener("DOMContentLoaded", function () {
    const perfilContainer = document.getElementById("perfil-container");
    const logoutContainer = document.getElementById("logout-container");
    const logoutBtn = document.getElementById("logout-btn");
    const ingresarBtn = document.querySelector(".ingresar");
    const nombreUsuario = document.getElementById("nombre-usuario");
    const moduloLinks = document.querySelectorAll(".modulo-link");

    function verificarSesion() {
        let usuario = JSON.parse(localStorage.getItem("user"));

        if (usuario && usuario.nombre) {
            if (perfilContainer && nombreUsuario) {
                perfilContainer.style.display = "block";
                nombreUsuario.textContent = usuario.nombre.trim();
            }
            if (logoutContainer) logoutContainer.style.display = "block";
            if (ingresarBtn) ingresarBtn.style.display = "none";
        } else {
            if (perfilContainer) perfilContainer.style.display = "none";
            if (logoutContainer) logoutContainer.style.display = "none";
            if (ingresarBtn) ingresarBtn.style.display = "inline-block";
        }
    }

    if (logoutBtn) {
        logoutBtn.addEventListener("click", function () {
            localStorage.removeItem("user");
            verificarSesion();
            window.location.href = "../vistas/ingreso.html";
        });
    }

    // Interceptar clics en los enlaces de módulos
    moduloLinks.forEach((link) => {
        link.addEventListener("click", function (event) {
            let usuario = JSON.parse(localStorage.getItem("user"));
            let rutaModulo = this.getAttribute("data-modulo"); // Obtener la ruta del módulo

            if (usuario) {
                event.preventDefault(); // Evita la navegación predeterminada
                window.location.href = rutaModulo; // Redirige al módulo si está logueado
            } else {
                // Deja que el enlace funcione normalmente y lo mande a ingreso.html
            }
        });
    });

    verificarSesion();
});
