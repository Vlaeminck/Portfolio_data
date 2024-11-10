document.addEventListener('DOMContentLoaded', () => {
    const projectDetails = {
        title: 'Dashboard de Pokedex 1ra Generación',
        description: 'Trabaje un dataset de Kaggle con datos de Pokemon GO, y cree un dashboard interactivo con Looker Studio, la imagenes fueron tomadas desde la página:  https://pokemondb.net. Basado la primer generación permite consultar las estadisticas de cada uno de los pokemon',
        result: 'Genere un dashboard que permita consultar los datos de la Pokedex de manera interactiva, con UI simil Pokedex'
    };

    displayProjectDetails(projectDetails);
});

function displayProjectDetails(project) {
    const detailsContainer = document.getElementById('project-details');
    detailsContainer.innerHTML = `
        <h1>${project.title}</h1>
        <p>${project.description}</p>
        <p><strong>Resultado:</strong> ${project.result}</p>
        <a href="index-html.html">Volver a la página principal</a>
    `;
}