let user = JSON.parse(localStorage.getItem("user")) || { progreso: 0, modulosCompletados: [] };

const quizForm = document.querySelector('#quizForm');
const moduloActual = quizForm.dataset.modulo; // Captura el módulo desde un atributo en el formulario

function capturarRespuestas() {
    return {
        p1: document.querySelector('input[name="capital"]:checked')?.value,
        p2: document.querySelector('input[name="planeta"]:checked')?.value,
        p3: document.querySelector('input[name="continentes"]:checked')?.value,
        p4: document.querySelector('input[name="autor"]:checked')?.value,
        p5: document.querySelector('input[name="metal"]:checked')?.value,
    };
}

function validarRespuestas(e) {
    e.preventDefault();

    // Verificar si el usuario ya completó este módulo
    if (user.modulosCompletados.includes(moduloActual)) {
        alert("✅ Ya has completado este módulo. No puedes repetir el examen.");
        return;
    }

    const respuestasUser = capturarRespuestas();
    const respuestasCorrectas = {
        p1: "París",
        p2: "Júpiter",
        p3: "6",
        p4: "Cervantes",
        p5: "Aluminio",
    };

    let acumulado = 0;

    const arrayRespuestasUser = Object.values(respuestasUser);
    const arrayRespuestasCorrectas = Object.values(respuestasCorrectas);

    for (let i = 0; i < arrayRespuestasUser.length; i++) {
        if (arrayRespuestasUser[i] === arrayRespuestasCorrectas[i]) {
            acumulado++;
        }
    }

    if (acumulado >= 3) {
        console.log("✅ Ganaste el examen");
        user.progreso += 20;
        user.modulosCompletados.push(moduloActual); // Agregar módulo completado

        console.log("🎯 Progreso actualizado:", user.progreso);
        console.log("📌 Módulos completados:", user.modulosCompletados);

        localStorage.setItem("user", JSON.stringify(user));
    } else {
        console.log("❌ Debes repetir el examen");
    }
}

/*
    if (respuestasCorrectas.p1 === respuestasUser.p1) acumulado++;
    if (respuestasCorrectas.p2 === respuestasUser.p2) acumulado++;
    if (respuestasCorrectas.p3 === respuestasUser.p3) acumulado++;
    if (respuestasCorrectas.p4 === respuestasUser.p4) acumulado++;
    if (respuestasCorrectas.p5 === respuestasUser.p5) acumulado++;

    console.log("Tu acumulado es:", acumulado);

    for (const key in respuestasCorrectas) {
        console.log(respuestasCorrectas[key]);
    }
    */


quizForm.addEventListener("submit", validarRespuestas);
