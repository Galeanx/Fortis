let user = JSON.parse(localStorage.getItem("user"));

const quizForm = document.querySelector('#quizForm');

function capturarRespuestas() {
    const elementos = document.querySelector('input[name="elementos"]:checked')?.value;
    const componente = document.querySelector('input[name="componente"]:checked')?.value;
    const funciones = document.querySelector('input[name="funciones"]:checked')?.value;
    const importancia = document.querySelector('input[name="importancia"]:checked')?.value;
    const relacion = document.querySelector('input[name="relacion"]:checked')?.value;

    return {
        p1: elementos,
        p2: componente,
        p3: funciones,
        p4: importancia,
        p5: relacion,
    };
}

function validarRespuestas(e) {
    e.preventDefault();

    if (!user.progreso_modulos) {
        user.progreso_modulos = {
            modulo1: 0,
            modulo2: 0,
            modulo3: 0,
            modulo4: 0,
            modulo5: 0,
        };
    }

    if (user.progreso_modulos.modulo1 === 100) {
        alert("⚠️ Ya has completado este examen. No es necesario repetirlo.");
        console.log("⛔ El examen ya fue completado previamente.");
        return;
    }

    const respuestasUser = capturarRespuestas();
    const respuestasCorrectas = {
        p1: "París",
        p2: "Júpiter",
        p3: "6",
        p4: "Garcilaso",
        p5: "Cobre",
    };

    let acumulado = 0;
    const userAnswers = Object.values(respuestasUser);
    const correctAnswers = Object.values(respuestasCorrectas);

    for (let i = 0; i < userAnswers.length; i++) {
        if (userAnswers[i] === correctAnswers[i]) {
            acumulado++;
        }
    }

    console.log(`🔎 Respuestas correctas: ${acumulado} de 5`);

    if (acumulado >= 3) {
        user.progreso_modulos.modulo1 = 100;
        alert("✅ ¡Examen aprobado! Has completado el módulo.");
        console.log("🎉 ¡Examen aprobado! Se actualizó el progreso del módulo 1 a 100%");
    } else {
        alert("❌ No alcanzaste la puntuación mínima. Intenta nuevamente.");
        console.log("😓 Examen no aprobado. No se actualizó el progreso.");
    }

    localStorage.setItem("user", JSON.stringify(user));
}
quizForm.addEventListener("submit", validarRespuestas);
