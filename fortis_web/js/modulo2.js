document.addEventListener('DOMContentLoaded', () => {
    const temas = [
        {
            titulo: "EVALUACIÓN INICIAL Y METAS",
            contenidos: [
                "EVALUACIÓN DE CONDICIÓN FÍSICA",
                "IDENTIFICACIÓN DE METAS PERSONALES Y DEPORTIVAS",
                "ESTABLECIMIENTO DE OBJETIVOS ESPECÍFICOS"
            ]
        },
        {
            titulo: "ENTRENAMIENTO FÍSICO",
            contenidos: [
                "PRINCIPIOS DEL ENTRENAMIENTO DEPORTIVO",
                "PERIODIZACIÓN DEL ENTRENAMIENTO",
                "PREVENCIÓN DE LESIONES"
            ]
        },
        {
            titulo: "DESCANSO Y RECUPERACIÓN",
            contenidos: [
                "IMPORTANCIA DEL SUEÑO",
                "ESTRATEGIAS DE RECUPERACIÓN",
                "MANEJO DEL ESTRÉS Y FATIGA "
            ]
        },
        {
            titulo: "SALUD MENTAL Y BIENESTAR EMOCIONAL",
            contenidos: [
                "MANEJO DEL ESTRES EN EL DEPORTE",
                "APOYO PSICOLÓGICO",
                "BIENESTAR EMOCIONAL Y RENDIMIENTO DEPORTIVO"
            ]
        },
        {
            titulo: "SALUD FÍSICA Y PREVENCIÓN DE LESIONES",
            contenidos: [
                "EVALUACIÓN DE SALUD FÍSICA",
                "EJERCICIOS DE FORTALECIMIENTO",
                "PREVENCIÓN DE LESIONES DEPORTIVAS"
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