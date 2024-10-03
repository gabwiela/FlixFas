document.addEventListener("DOMContentLoaded", function() {
    const jsonFilePath = "./db/series.json";
    const seriesContainer = document.getElementById("series-container");
  
    if (seriesContainer) {
      fetch(jsonFilePath)
        .then(response => {
          if (!response.ok) {
            throw new Error(`Falha ao carregar o arquivo JSON: ${response.status}`);
          }
          return response.json();
        })
        .then(jsonData => {
          jsonData.series.forEach(serie => {
            let cardHTML = `
              <div class="col-md-4">
                <div class="card mb-4 shadow-sm">
                  <img src="${serie.poster}" class="bd-placeholder-img card-img-top" width="100%" height="225" alt="${serie.title}">
                  <div class="card-body">
                    <h5 class="card-title custom-title-color">${serie.title}</h5>
                    <p class="card-text">${serie.description}</p>
                    <p class="card-text">${serie.episodes} Episódios</p>
                    <p class="card-text">${serie.streaming}</p>
                  </div>
                </div>
              </div>
            `;
  
            seriesContainer.innerHTML += cardHTML;
          });
        })
        .catch(error => {
          console.error(error);
        });
    } else {
      console.error("A tag com o ID 'series-container' não foi encontrada.");
    }
  });
  