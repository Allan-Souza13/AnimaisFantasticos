// Verifique a distância da primeira imagem
// em relação ao topo da página
const distanciaImg = document.querySelector("img");
console.log(
  "A distâcia da imagem em relação ao topo da pagina é: ",
  distanciaImg.offsetTop
);

// Retorne a soma da largura de todas as imagens
function somaImagens() {
  let soma = 0;
  const somaImg = document.querySelectorAll("img");
  somaImg.forEach((imagem) => {
    soma = soma + imagem.offsetWidth;
    console.log(imagem.offsetWidth);
  });
  console.log(soma);
}
window.onload = function () {
  somaImagens(); 
};

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const link = document.querySelectorAll('a');

link.forEach((links)=>{
  const linkWidth = link.offsetWidth;
  const linkHeight = link.offsetHeight;
  if(linkWidth >= 48 && linkHeight >= 48){
    console.log(links, 'Possui acessibilidade');
  }else{
    console.log('Não possui boa acessibilidade');
  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const media = window.matchMedia('(max-width:720px)').matches;
  if(media){
  const menu = document.querySelector(  '.menu');
  menu.classList.add('menu-mobile')
  }