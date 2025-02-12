document.addEventListener('DOMContentLoaded', () => {
    const temas = [
        {
            titulo: "EVALUACIÓN Y ANÁLISIS DE RIESGOS",
            contenidos: [
                "ANÁLISIS DE RIESGOS DEPORTIVOS",
                "FACTORES DE RIESGO INDIVIDUALES",
                "ENTORNO DE ENTRENAMIENTO Y COMPETICIÓN"
            ]
        },
        {
            titulo: "EDUCACIÓN Y CONCIENTIZACIÓN SOBRE PREVENCIÓN",
            contenidos: [
                "EDUCACIÓN EN RECUPERACIÓN Y REHABILITACIÓN",
                "TÉCNICAS DE ENTRENAMIENTO SEGURO",
                "IMPORTANCIA DEL CALENTAMIENTO Y ESTIRAMIENTO"
            ]
        },
        {
            titulo: "DISEÑO DE PROGRAMAS DE PREVENCIÓN",
            contenidos: [
                "PROGRAMAS DE FORTALECIMIENTO MUSCULAR",
                "ENFOQUE EN LA TÉCNICA Y LA BIOMECÁNICA",
                "INTERVENCIONES MULTIDISCIPLINARIAS"
            ]
        },
        {
            titulo: "EVALUACIÓN Y SEGUIMIENTO DE LA PREVENCIÓN",
            contenidos: [
                "MONITOREO DEL RENDIMIENTO Y FATIGA",
                "SEGUIMIENTO DE LA SALUD MÚSCULO ESQUELÉTICA",
                "ANÁLISIS DE TENDENCIAS Y PATRONES DE LESIONES"
            ]
        },
        {
            titulo: "CULTURA DE SEGURIDAD Y BIENESTAR DEL ATLETA",
            contenidos: [
                "PROMOCIÓN DE UNA CULTURA DE SEGURIDAD",
                "APOYO PSICOLÓGICO Y BIENESTAR EMOCIONAL",
                "INVOLUCRAMIENTO DE LOS ENTRENADORES Y STAFF "
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