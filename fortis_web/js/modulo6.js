document.addEventListener('DOMContentLoaded', () => {
    const temas = [
        {
            titulo: "CULTURA DE BIENESTAR EN EL ENTORNO DEPORTIVO",
            contenidos: [
                "PROMOCIÓN DE UNA MENTALIDAD DE BIENESTAR",
                "CREACIÓN DE ESPACIOS SEGUROS Y APOYO MUTUO",
                "INCORPORACIÓN DE PRÁCTICAS DE AUTOCUIDADO"
            ]
        },
        {
            titulo: "INTEGRACIÓN DE ESTRATEGIAS DE BIENESTAR EN EL ENTRENAMIENTO",
            contenidos: [
                "INCORPORACIÓN DE ENTRENAMIENTO MENTAL Y PSICOLÓGICO",
                "ENFOQUE EN LA RECUPERACIÓN Y REGENERACIÓN",
                "FOMENTO DE HÁBITOS SALUDABLES",
            ]
        },
        {
            titulo: "IMPLEMENTACIÓN  DE PROGRAMAS DE BIENESTAR",
            contenidos: [
                "DESARROLLO DE POLÍTICAS DE BIENESTAR",
                "FORMACIÓN EN SALUD MENTAL Y PRIMEROS AUXILIOS PSICOLÓGICOS",
                "ACCESO A RECURSOS DE APOYO"
            ]
        },
        {
            titulo: "EVALUACIÓN Y MONITOREO CONTINÚO DEL BIENESTAR",
            contenidos: [
                "EVALUACIÓN DE LA SALUD MENTAL Y EMOCIONAL",
                "SEGUIMIENTO DEL PROGRESO DEL BIENESTAR",
                "ANÁLISIS DE DATOS Y TENDENCIAS DE BIENESTAR"
            ]
        },
        {
            titulo: "COLABORACIÓN PARA EL BIENESTAR INTEGRAL",
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


