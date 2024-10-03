document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const noticiaId = params.get("id");

  fetch("./db/bancodedados.json")
      .then((result) => result.json())
      .then((dados) => {
          const noticia = dados.noticias.find((element) => element.id == noticiaId);

          if (noticia) {
              exibirNoticia(noticia);
          } else {
              console.error("Notícia não encontrada.");
          }
      })
      .catch((error) => {
          console.error("Erro ao carregar dados:", error);
      });

  function exibirNoticia(noticia) {
      const noticiaCompletaElement = document.getElementById("noticiaCompleta");

      // Criar elementos HTML para exibir a notícia
      const tituloElement = document.createElement("h1");
      tituloElement.textContent = noticia.title;

      const dataElement = document.createElement("p");
      dataElement.textContent = noticia.date;

      const imagemElement = document.createElement("img");
      imagemElement.src = noticia.image;
      imagemElement.alt = noticia.title;
      imagemElement.classList.add("noticia-imagem");

      const conteudoElement = document.createElement("div");
      conteudoElement.innerHTML = noticia.content;

      // Adiciona elementos ao container da notícia completa
      noticiaCompletaElement.appendChild(tituloElement);
      noticiaCompletaElement.appendChild(dataElement);
      noticiaCompletaElement.appendChild(imagemElement);
      noticiaCompletaElement.appendChild(conteudoElement);
  }
});

