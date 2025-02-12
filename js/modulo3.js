document.addEventListener('DOMContentLoaded', () => {

    const temas = [
        {
            titulo: "ALIMENTACIÓN EQUILIBRADA Y SALUDABLE",
            contenidos: [
                "PIRÁMIDE ALIMENTICIA Y PAUTAS DIETÉTICAS",
                "IMPORTANCIA DE UNA DIETA EQUILIBRADA",
                "PLANIFICACIÓN DE COMIDAS SALUDABLES"
            ]
        },
        {
            titulo: "NUTRICIÓN DURANTE EL CICLO DE VIDA",
            contenidos: [
                "IMPORTANCIA DE LA NUTRICIÓN ADECUADA",
                "NECESIDADES NUTRICIONALES ESPECÍFICAS",
                "IMPORTANCIA DE LA ALIMENTACION EN EL CRECIMIENTO"
            ]
        },
        {
            titulo: "PLANIFICACIÓN Y ESTRATEGIAS DE ALIMENTACIÓN",
            contenidos: [
                "TIPOS DE ALIMENTO Y TIEMPOS DE CONSUMO ",
                "HIDRATACIÓN Y CONSUMO DE NUTRIENTES",
                "RECUPERACIÓN MUSCULAR Y REPOSICIÓN DE GLUCÓGENO"
            ]
        },
        {
            titulo: "NUTRICIÓN PARA LA PREVENCIÓN DE LESIONES Y ENFERMEDADES",
            contenidos: [
                "ALIMENTACIÓN PARA LA SALUD ÓSEA Y MUSCULAR",
                "ESTRATEGIAS PARA REDUCIR EL RIESGO DE ENFERMEDADES",
                "BIENESTAR EMOCIONAL Y RENDIMIENTO DEPORTIVO"
            ]
        },
        {
            titulo: "ESTRATEGIAS DE RECUPERACIÓN",
            contenidos: [
                "ALIMENTACIÓN PARA LA RECUPERACIÓN MUSCULAR",
                "NUTRIENTES Y SUPLEMENTOS PARA LA RECUPERACIÓN",
                "IMPORTANCIA DE LA NUTRICIÓN EN LA RECUPERACIÓN"
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