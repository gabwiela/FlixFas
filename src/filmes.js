document.addEventListener("DOMContentLoaded", function() {
    const jsonFilePath = "./db/filmes.json";
    const filmesContainer = document.getElementById("filmes-container");
  
    if (filmesContainer) {
      fetch(jsonFilePath)
        .then(response => {
          if (!response.ok) {
            throw new Error(`Falha ao carregar o arquivo JSON: ${response.status}`);
          }
          return response.json();
        })
        .then(jsonData => {
          jsonData.filmes.forEach(filme => {
            let cardHTML = `
              <div class="col-md-4">
                <div class="card mb-4 shadow-sm">
                  <img src="${filme.poster}" class="bd-placeholder-img card-img-top" width="100%" height="225" alt="${filme.title}">
                  <div class="card-body">
                    <h5 class="card-title custom-title-color">${filme.title}</h5>
                    <p class="card-text">${filme.description}</p>
                    <p class="card-text">Diretor: ${filme.director}</p>
                    <p class="card-text">Rotten Tomatoes: ${filme.rottentomatoes}</p>
                  </div>
                </div>
              </div>
            `;
  
            filmesContainer.innerHTML += cardHTML;
          });
        })
        .catch(error => {
          console.error(error);
        });
    } else {
      console.error("A tag com o ID 'filmes-container' não foi encontrada.");
    }
  });
  