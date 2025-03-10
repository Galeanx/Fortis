document.addEventListener('DOMContentLoaded', () => {
    const temas = [
        {
            titulo: "MOTIVACIÓN EN EL DEPORTE",
            contenidos: [
                "MOTIVACIÓN INTRINSECA VS EXTRINSECA",
                "AUTOEFICACIA Y CONFIANZA",
                "TEORIAS DE LA MOTIVACION APLICADAS AL DEPORTE"
            ]
        },
        {
            titulo: "ANSIEDAD Y ESTRÉS EN EL DEPORTE",
            contenidos: [
                "GESTIÓN DEL ESTRÉS Y LA ANSIEDAD PRECOMPETITIVA",
                "ESTRATEGIAS DE AFRONTAMIENTO",
                "RELACIÓN ENTRE ANSIEDAD Y RENDIMIENTO DEPORTIVO"
            ]
        },
        {
            titulo: "AUTOCONCEPTO Y AUTOESTIMA",
            contenidos: [
                "DESARROLLO DEL AUTOCONCEPTO CON LA PARTICIPACIÓN DEPORTIVA ",
                "IMPACTO DEL RENDIMIENTO EN LA AUTOESTIMA",
                "FOMENTAR UN AUTOCONCEPTO POSITIVO"
            ]
        },
        {
            titulo: "DESARROLLO Y RETIRO DEL DEPORTISTA",
            contenidos: [
                "TRANSICIÓN DE ETAPAS EN LA CARRERA DEPORTIVA",
                "ESTRATEGIAS DE ADAPTACIÓN DURANTE EL RETIRO DEL DEPORTISTA",
                "SALUD MENTAL Y BIENESTAR DESPUÉS DEL RETIRO"
            ]
        },
        {
            titulo: "BIENESTAR EMOCIONAL Y CALIDAD DE VIDA",
            contenidos: [
                "IMPACTO DEL DEPORTE EN EL BIENESTAR EMOCIONAL",
                "ESTRATEGIAS PARA PROMOVER EL BIENESTAR EMOCIONAL",
                "EQUILIBRIO ENTRE DEPORTE Y VIDA PERSONAL "
            ]
        }
    ];
    const textOverlay = document.querySelector('#text-overlay');

    function createContentHTML() {
        let html = '';
        let index = 1; 

        temas.forEach((tema) => {
            html += `<div class="text-block texto-movible-${index}">`; 
            html += `<h3>${tema.titulo}</h3>`; 
            tema.contenidos.forEach((contenido) => {
                html += `<p>${contenido}</p>`; 
            });
            html += `<button class="enter-button"><i class="fas fa-sign-in-alt"></i> Ingresar</button>`; 
            html += `</div>`;
            index++;
        });

        return html;
    }

    textOverlay.innerHTML = createContentHTML();
});