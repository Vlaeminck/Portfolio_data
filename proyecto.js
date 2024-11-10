document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');

    if (projectId) {
        fetchProjectDetails(projectId);
    } else {
        document.getElementById('project-details').innerHTML = '<p>Proyecto no encontrado</p>';
    }
});

function fetchProjectDetails(projectId) {
    // Aquí deberías hacer una petición al servidor para obtener los detalles del proyecto
    // Por ahora, usaremos datos de ejemplo
    const projectDetails = {
        1: {
            title: 'Dashboard de Ventas en Power BI',
            description: 'Desarrollé un dashboard interactivo en Power BI para analizar las tendencias de ventas, permitiendo a los gerentes tomar decisiones informadas basadas en datos en tiempo real.',
            result: 'Aumento del 20% en la eficiencia de ventas'
        },
        2: {
            title: 'Análisis Predictivo con Python',
            description: 'Implementé un modelo de machine learning en Python para predecir la demanda de productos, mejorando la eficiencia del inventario.',
            result: 'Reducción del 15% en costos de inventario'
        }
    
    };

    const project = projectDetails[projectId];
    if (project) {
        displayProjectDetails(project);
    } else {
        document.getElementById('project-details').innerHTML = '<p>Proyecto no encontrado</p>';
    }
}

function displayProjectDetails(project) {
    const detailsContainer = document.getElementById('project-details');
    detailsContainer.innerHTML = `
        <h1>${project.title}</h1>
        <p>${project.description}</p>
        <p><strong>Resultado:</strong> ${project.result}</p>
        <a href="index-html.html">Volver a la página principal</a>
    `;
}

document.addEventListener('DOMContentLoaded', function() {
    const iframe = document.getElementById('dashboard-iframe');
    const loading = document.getElementById('loading');

    iframe.onload = function() {
        loading.style.display = 'none';
        iframe.style.display = 'block';
    };

    iframe.style.display = 'none';
});