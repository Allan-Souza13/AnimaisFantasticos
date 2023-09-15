// Duplique o menu e adicione ele em copy

const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');
const cloneMenu = menu.cloneNode(true);
copy.appendChild(cloneMenu);

// Selecione o primeiro DT da dl de Faq
const faq  =document.querySelector('.faq');
const primeirodt = faq.querySelector('dt');

console.log(primeirodt);

// Selecione o DD referente ao primeiro DT
const proximodd = primeirodt.nextElementSibling;
console.log(proximodd);
// Substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector('.animais');

faq.innerHTML = animais.innerHTML