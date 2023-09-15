const listaAnimais = document.querySelector('.animais-lista');

const height = listaAnimais.offsetHeight;
const animaisTopo = listaAnimais.offsetTop;
console.log(height);
console.log(animaisTopo);

const primeiroh2 = document.querySelector('h2');
const animaisEsquerda = primeiroh2.offsetLeft;
console.log(animaisEsquerda);

//
const h2rect = primeiroh2.getBoundingClientRect();
console.log(h2rect.top);
if(h2rect.top < 0){
  console.log('passou do elemento');
}

//media

const small = window.matchMedia('(max-width: 600px)');
if(small.matches){
  console.log('Tela menor que 600px');
}else{
  console.log("Tela Maior que 600px");
}