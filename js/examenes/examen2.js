let user = JSON.parse(localStorage.getItem("user"))

const quizForm = document.querySelector('#quizForm')

function capturarRespuestas() {
    return {
        p1: document.querySelector('input[name="rio"]:checked')?.value,
        p2: document.querySelector('input[name="elemento"]:checked')?.value,
        p3: document.querySelector('input[name="oceano"]:checked')?.value,
        p4: document.querySelector('input[name="pintor"]:checked')?.value,
        p5: document.querySelector('input[name="energia"]:checked')?.value,
    };
}

function validarRespuestas(e) {
    e.preventDefault();

    const respuestasUser = capturarRespuestas();
    const respuestasCorrectas = {
        p1: "Amazonas",
        p2: "Hidrógeno",
        p3: "Pacífico",
        p4: "Da Vinci",
        p5: "Solar",
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
        console.log("Ganaste el examen");
        user.progreso += 20;
        console.log(user.progreso);
        localStorage.setItem("user", JSON.stringify({
            user: "admin",
            pass: 1234,
            logged: true,
            progreso: user.progreso,
        }));
    } else {
        console.log("Debes repetir el examen");
    }

    console.log(acumulado);
}

quizForm.addEventListener("submit", validarRespuestas);
