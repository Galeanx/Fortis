let user = JSON.parse(localStorage.getItem("user") )

const quizForm = document.querySelector('#quizForm')

function capturarRespuestas() {

    //Obtener valores selesccionados
    const capital = document.querySelector('input[name="capital"]:checked')?.value;
    const planeta = document.querySelector('input[name="planeta"]:checked')?.value;
    const continentes = document.querySelector('input[name="continentes"]:checked')?.value;
    const autor = document.querySelector('input[name="autor"]:checked')?.value;
    const metal = document.querySelector('input[name="metal"]:checked')?.value;

    return{
        p1: capital,
        p2: planeta,
        p3: continentes,
        p4: autor,
        p5: metal,
    }
}

function validarRespuestas (e) {
    e.preventDefault()

    const respuestasUser = capturarRespuestas()
    const respuestasCorrectas = {
        p1: "París",
        p2: "Júpiter",
        p3: "6",
        p4: "Cervantes",
        p5: "Aluminio",
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
        localStorage.setItem("user",JSON.stringify({
            user: "admin",
            pass: 1234,
            logged: true,
            progreso: user.progreso,
        }))
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