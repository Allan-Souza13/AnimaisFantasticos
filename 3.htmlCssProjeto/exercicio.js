// Retorne no console todas as imagens do site
const animaisImg = document.querySelectorAll('img');
console.log(animaisImg);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagem = document.querySelectorAll('img[src^="./img/imagem"]');
console.log(imagem);

// Selecione todos os links internos (onde o href começa com #)
const linksInterno = document.querySelectorAll('[href^="#"]');
console.log(linksInterno);

// Selecione o primeiro h2 dentro de .animais-descricao
const animaisDescricao = document.querySelector('.animais-descricao h2');
console.log(animaisDescricao);

const ultimoParagrafo = document.querySelectorAll('p');
console.log(ultimoParagrafo[--ultimoParagrafo.length]);