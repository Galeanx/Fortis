function revisarQuiz() {
    let respuestasCorrectas = 0;
    let respuestas = {
        q1: "b",
        q2: "a",
        q3: "b",
        q4: "b"
    };

    Object.keys(respuestas).forEach(pregunta => {
        let seleccion = document.querySelector(`input[name="${pregunta}"]:checked`);
        if (seleccion && seleccion.value === respuestas[pregunta]) {
            respuestasCorrectas++;
        }
    });

    let resultadoTexto = `Respondiste correctamente ${respuestasCorrectas} de 4 preguntas.`;
    document.getElementById("resultado").innerText = resultadoTexto;
}