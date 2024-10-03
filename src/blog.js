let informacoes = [];
let listaHtml = '';

function MontaItem(pId, pTitulo, pData, pContent, pImagem) {
    let itemHtml = `
        <div class="blog-box">
            <div class="blog-img">
                <img src="${pImagem}" alt="${pTitulo}">
            </div>
            <div class="blog-text">
                <span>${pData}</span>
                <a href='conteudo.html?id=${pId}' class="blog-title">${pTitulo}</a>
                <p>${pContent}</p>
                <a href='conteudo.html?id=${pId}'>Leia Mais</a>
            </div>
        </div>`;
    return itemHtml;
}

document.addEventListener("DOMContentLoaded", () => {
    fetch("./db/bancodedados.json")
        .then((result) => result.json())
        .then((dados) => {
            const elementoHtml = document.getElementById('caixaNoticias');
            informacoes = dados.noticias;

            informacoes.forEach((element) => {
                listaHtml += MontaItem(element.id, element.title, element.date, element.content, element.image);
            });

            elementoHtml.innerHTML = listaHtml;
        })
        .catch((error) => {
            console.log("Erro encontrado: ", error);
        });
});
